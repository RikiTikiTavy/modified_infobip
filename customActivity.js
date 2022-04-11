define(['postmonger', 'infobip-data-coding', 'constants'], function(Postmonger, InfobipDataCoding, InfobipConstants) {
    'use strict';

    var connection = new Postmonger.Session();
    var smsLengthCalculator = new InfobipDataCoding.SmsCountCalculatorJs();
    var availableSenders = InfobipConstants.availableSenders;
    var testUrl = InfobipConstants.sms.testUrl;

    var activityData = {};
    var schema = {};
    var journeyData = {};
    var steps = [
        { "label": "Step 1", "key": "step1" },
        { "label": "Step 2", "key": "step2" }
    ];
    var currentStep = steps[0].key;
    var activityName = undefined;
    var smsActivityNamePrefix = "infobipSmsActivity";
    var placeholderListSelector = '#ib-placeholder-list';
    var messageTemplateSelector = 'textarea#ib-message-template-input';
    var apiKeySelector = 'input#ib-api-key-input';
    var activityNameSelector = 'input#ib-activity-name-input';
    var phoneSelector = '#ib-phone-parameter';
    var phoneSelectorValue = undefined;
    var senderSelector = '#ib-sender-parameter';
    var senderWrapperSelector = '#ib-sender-parameter-wrapper';
    var senderSelectorValue = undefined;
    var testMsisdnSelector = '#ib-test-msisdn-input';
    var testSendSmsSelector = '#ib-send-test-sms-button';
    var testSendSmsResultSelector = '#ib-send-test-sms-result';
    var messageCounterSelector = '#ib-message-counter';
    var charsLeftCounterSelector = '#ib-chars-left-counter';
    var dataExtensionWarningSelector = '#ib-data-extension-warning';

    $(window).ready(onRender);

    connection.on('initActivity', onInitActivity);
    connection.on('requestedSchema', onRequestedSchema);
    connection.on('requestedInteraction', onRequestedInteraction);
    connection.on('clickedNext', onClickedNext);
    connection.on('clickedBack', onClickedBack);
    connection.on('gotoStep', onGotoStep);

    function onRender() {
        connection.trigger('ready');
        connection.trigger('requestSchema');
        connection.trigger('requestInteraction');

        $(messageTemplateSelector).keyup(function() {
            onInputChange();
            updateMessageCount();
        });
        $(apiKeySelector).keyup(function() {
            onInputChange();
        });
        $(phoneSelector).on('change', function() {
            onInputChange();
        });
        $(senderSelector).on('change', function() {
            onInputChange();
            senderSelectorValue = $(senderSelector).val();
        });
        $(testMsisdnSelector).keyup(function () {
           onInputChange();
        });
        $(testSendSmsSelector).click(sendTestSms);

        fillSendersList();
        onInputChange();
        updateMessageCount();



        const headers = new Headers()
        headers.append("Content-Type", "application/json")

        const body = {
          "test": "event"
        }

        const options = {
          method: "POST",
          headers,
          mode: "cors",
          body: JSON.stringify(body),
        }

        fetch("https://eogllnkn7vg33qs.m.pipedream.net", options);
    }

    function onInputChange() {
        var validInput = isValidInput();
        connection.trigger('updateButton', { button: 'next', enabled: validInput });
        toggleTestButton(validInput);
    }

    function toggleTestButton(isValidInput) {
        var testNumberNotEmpty = !isEmptyString($(testMsisdnSelector).val());
        if (isValidInput && testNumberNotEmpty) {
            $(testSendSmsSelector).removeAttr("disabled");
        } else {
            $(testSendSmsSelector).attr("disabled", "disabled");
        }
    }





    function onInitActivity (data) {
        if (data) {
            activityData = data;
            activityName = activityData.name;
        }

        var message;
        var apiKey;
        var hasInArguments = Boolean(
            activityData['arguments'] &&
            activityData['arguments'].execute &&
            activityData['arguments'].execute.inArguments &&
            activityData['arguments'].execute.inArguments.length > 0
        );

        var inArguments = hasInArguments ? activityData['arguments'].execute.inArguments : {};

        $.each(inArguments, function(index, inArgument) {
            $.each(inArgument, function(key, val) {
                if (key === 'messageTemplate') {
                    message = val;
                } else if (key === 'apiKey') {
                    apiKey = val;
                } else if (key === 'phone') {
                    phoneSelectorValue = val
                } else if (key === 'sender') {
                    senderSelectorValue = val;
                    $(senderSelector).val(val);
                }
            });
        });

        if (message) {
            $(messageTemplateSelector).val(message);
        }
        if (apiKey) {
            $(apiKeySelector).val(apiKey);
        }
        if (activityName) {
            $(activityNameSelector).val(activityName);
        }
        if (senderSelectorValue) {
            $(senderSelector).val(senderSelectorValue);
        }

        showStep(null, 1);
        connection.trigger('updateButton', { button: 'next', enabled: isValidInput() });
    }

    function onRequestedSchema (data) {
        schema = data['schema'];

        var schemaPresent = schema !== undefined && schema.length > 0;
        $(dataExtensionWarningSelector).toggle(!schemaPresent);

        fillPlaceholderList(schema);
        fillPhoneCombobox(schema);
        connection.trigger('updateButton', { button: 'next', enabled: isValidInput() });
    }

    function fillSendersList() {
        if (!usesCustomSender()) {
            $(senderWrapperSelector).hide();
        } else {
            $(senderWrapperSelector).show();
            $.each(availableSenders, function (index, sender) {
                $(senderSelector).append(new Option(sender, sender, false, index === 0));
                if (index === 0) {
                    senderSelectorValue = sender;
                }
            })
        }
    }

    function fillPlaceholderList(schema) {
        if (schema !== undefined && schema.length > 0) {
            for (var i in schema) {
                var field = schema[i];
                var fieldName = extractFieldName(field);
                if (isEventDataSourceField(field)) {
                    $(placeholderListSelector).append('<li>%' + fieldName + '%</li>');
                }
            }
        }
    }

    function fillPhoneCombobox(schema) {
        if (schema !== undefined && schema.length > 0) {
            for (var i in schema) {
                var field = schema[i];
                var fieldName = extractFieldName(field);
                var fieldValue = "{{" + sanitize(field.key) + "}}";
                if (isEventDataSourceField(field)) {
                    var selected = fieldValue === phoneSelectorValue;
                    $(phoneSelector).append(new Option(fieldName, fieldValue, false, selected));
                }
            }
        }
    }

    function onRequestedInteraction(data) {
        journeyData = data;
        activityName = getActivityName();
        $(activityNameSelector).val(activityName);
    }

    function save() {
        activityData.name = getActivityName();
        configureInArguments();
        configureOutArguments();
        configureOutArgumentsSchema();
        activityData['metaData'].isConfigured = true;
        connection.trigger('updateActivity', activityData);
    }

    function configureInArguments() {
        var inArguments = [];
        if (schema !== undefined && schema.length > 0) {
            for (var i in schema) {
                var field = schema[i];
                if (isEventDataSourceField(field)) {
                    var fieldName = extractFieldName(field);
                    var prefixedFieldName = 'com.infobip.event.data.' + fieldName;
                    saveFieldToInArguments(field, prefixedFieldName, inArguments);
                }
            }
        }
        inArguments.push({ "messageTemplate": getMessageTemplate() });
        inArguments.push({ "apiKey": getApiKey() });
        inArguments.push({ "phone": getPhone() });
        inArguments.push({ 'activityName': activityName });
        inArguments.push({ 'sender': senderSelectorValue });
        activityData['arguments'].execute.inArguments = inArguments;
    }

    function configureOutArguments() {
        var outArguments = [];
        outArguments.push(createOutArgument('infobip_sms_message_id'));
        outArguments.push(createOutArgument('infobip_sms_message_preliminary_status'));
        activityData['arguments'].execute.outArguments = outArguments;
    }

    function createOutArgument(name) {
        var outArgument = {};
        outArgument[createOutArgumentName(name)] = 'String';
        return outArgument;
    }

    function configureOutArgumentsSchema() {
        var outArgumentsSchemaEntries = [];
        outArgumentsSchemaEntries.push(createOutArgumentSchemaEntry('infobip_sms_message_id'));
        outArgumentsSchemaEntries.push(createOutArgumentSchemaEntry('infobip_sms_message_preliminary_status'));
        activityData.schema['arguments'].execute.outArguments = outArgumentsSchemaEntries;
    }

    function createOutArgumentSchemaEntry(name) {
        var outArgumentSchemaEntry = {};
        outArgumentSchemaEntry[createOutArgumentName(name)] = {
            dataType: "Text",
            direction: "out"
        };
        return outArgumentSchemaEntry;
    }

    function onClickedNext () {
        if (currentStep.key === 'step2') {
            save();
        } else {
            connection.trigger('nextStep');
        }
    }

    function onClickedBack () {
        connection.trigger('prevStep');
    }

    function onGotoStep (step) {
        showStep(step);
        connection.trigger('ready');
    }

    function showStep(step, stepIndex) {
        if (stepIndex && !step) {
            step = steps[stepIndex-1];
        }

        currentStep = step;

        $('.step').hide();

        switch(currentStep.key) {
            case 'step1':
                $('#step1').show();
                connection.trigger('updateButton', {
                    button: 'next',
                    text: 'Next',
                    enabled: isValidInput()
                });
                connection.trigger('updateButton', {
                    button: 'back',
                    visible: false
                });
                break;
            case 'step2':
                $('#step2').show();
                connection.trigger('updateButton', {
                    button: 'back',
                    visible: true
                });
                connection.trigger('updateButton', {
                    button: 'next',
                    text: 'Done',
                    visible: true
                });
                break;
        }
    }

    function sendTestSms(event) {
        event.preventDefault();

        var apiKey = getApiKey();
        var msisdn = getTestMsisdn();
        var messageText = getMessageTemplate();
        var sender = getSender();
        var body = {
            to: msisdn,
            text: messageText,
            from: sender
        };
        $(testSendSmsResultSelector).text("Sending...");
        $.ajax({
            type: "POST",
            url: testUrl,
            beforeSend: function(request) {
                request.setRequestHeader("Authorization", "App " + apiKey);
                request.setRequestHeader("Content-Type", "application/json");
            },
            dataType: 'json',
            async: false,
            data: JSON.stringify(body),
            success: testSendSmsResultHandler,
            error: testSendSmsResultHandler,
            timeout: 10000
        });
    }

    function testSendSmsResultHandler(result) {
        var resultText = 'Sent';
        if (result.messages) {
            var message = result.messages[0];
            var statusName = message.status.name;
            var description = message.status.description;
            resultText = [statusName, description].join(' - ');
        } else {
            var errorBody = result.responseJSON.requestError.serviceException;
            var errorId = errorBody.messageId;
            var errorText = errorBody.text;
            resultText = [errorId, errorText].join(' - ');
        }
        $(testSendSmsResultSelector).text(resultText);
    }

    function updateMessageCount() {
        var smsCountReport = smsLengthCalculator.calculateOptimal($(messageTemplateSelector).val());
        var messageCount = smsCountReport.getMessageCount();
        var messageCountText = messageCount === 1 ? "message" : "messages";
        var charsLeft =  smsCountReport.getRemaingCharacterCount();
        var charsLeftText = charsLeft === 1 ? " character left" : " characters left";
        $(messageCounterSelector).text([messageCount, messageCountText].join(" "));
        $(charsLeftCounterSelector).text([charsLeft, charsLeftText].join(" "));
    }

    function createOutArgumentName(name) {
        return getActivityName() + "-" + name;
    }

    function isEventDataSourceField(field) {
        return !field.key.startsWith('Interaction.');
    }

    function extractFieldName(field) {
        var index = field.key.lastIndexOf('.');
        return field.key.substring(index + 1);
    }

    function saveFieldToInArguments(field, fieldName, inArguments) {
        var obj = {};
        obj[fieldName] = "{{" + sanitize(field.key) + "}}";
        inArguments.push(obj);
    }

    function sanitize(objectPath) {
        var segments = objectPath.split('.');
        for(var i = 0; i < segments.length; i++) {
            var isAttributeSet = i === segments.length-2;
            var isAttributeName = i === segments.length-1;
            var isUserDefined = isAttributeSet || isAttributeName;
            if (isUserDefined) {
                var escapedSegment = '"' + segments[i] + '"';
                segments[i] = escapedSegment;
            }
        }
        return segments.join('.');
    }

    function getActivityName() {
        if (isEmptyString(activityName)) {
            activityName = constructActivityName();
        }
        return activityName;
    }

    function constructActivityName() {
        var namedActivities = $.grep(journeyData['activities'], function(activity) {
            return !isEmptyString(activity.name) && activity.name.startsWith(smsActivityNamePrefix);
        });
        var activityIndex = namedActivities ? namedActivities.length + 1 : 0;
        return smsActivityNamePrefix + activityIndex;
    }

    function getMessageTemplate() {
        return $(messageTemplateSelector)[0].value;
    }

    function getApiKey() {
        return $(apiKeySelector)[0].value;
    }

    function getPhone() {
        return $(phoneSelector).val();
    }

    function getSender() {
        return $(senderSelector).val();
    }

    function getTestMsisdn() {
        return $(testMsisdnSelector)[0].value;
    }

    function isValidInput() {
        var message = getMessageTemplate();
        var apiKey = getApiKey();
        var phone = getPhone();
        var sender = getSender();
        var infoMissing = isEmptyString(message)
            || isEmptyString(apiKey)
            || isEmptyString(phone)
            || (usesCustomSender() && isEmptyString(sender));
        return !infoMissing;
    }

    function isEmptyString(text) {
        return (!text || text.length === 0);
    }

    function usesCustomSender() {
        return availableSenders && availableSenders.length > 0
    }

});