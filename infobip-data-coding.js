define('infobip-data-coding', ['stjs'], function (stjs) {
    'use strict';
    var TransliterationJs = function TransliterationJs(name, shortName, charset, key, enumName) {
        this.name = name;
        this.charset = charset;
        this.shortName = shortName;
        this.key = key;
        this.enumName = enumName;
    };
    TransliterationJs = stjs.extend(TransliterationJs, null, [], function (constructor, prototype) {
        constructor.All = new TransliterationJs("All available transliterations", "All", "", "0", "All");
        constructor.Default = new TransliterationJs("From Latin1 to GSM7", "Default", "windows-1252", "1", "Default");
        constructor.Greek = new TransliterationJs("From Windows-1253(Greek) to GSM7", "Greek", "windows-1253", "2", "Greek");
        constructor.Cyrillic = new TransliterationJs("From Windows-1251(Cyrillic) to GSM7", "Cyrillic", "windows-1251", "3", "Cyrillic");
        constructor.CentralEuropean = new TransliterationJs("From Windows-1252(Central European) to GSM7", "Cent.EU", "windows-1252", "4", "CentralEuropean");
        constructor.Turkish = new TransliterationJs("From Windows-1254(Turkish) to GSM7", "Turkish", "windows-1254", "5", "Turkish");
        constructor.SerbianCyrillic = new TransliterationJs("From Windows-1251(SerbianCyrillic) to GSM7", "SerbianCyrillic", "windows-1251", "6", "SerbianCyrillic");
        constructor.Baltic = new TransliterationJs("From Windows-1257(Baltic) to GSM7", "Baltic", "windows-1257", "7", "Baltic");
        constructor.Portuguese = new TransliterationJs("Portuguese chars to GSM7", "Portuguese", "windows-125x", "8", "Portuguese");
        constructor.Colombian = new TransliterationJs("Latin1 chars to GSM7, never unicode", "Colombian", "iso-8859-1", "9", "Colombian");
        constructor.ALL_VALUES = new Array(TransliterationJs.All, TransliterationJs.Default, TransliterationJs.Greek, TransliterationJs.Cyrillic, TransliterationJs.CentralEuropean, TransliterationJs.Turkish, TransliterationJs.SerbianCyrillic, TransliterationJs.Baltic, TransliterationJs.Portuguese, TransliterationJs.Colombian);
        prototype.name = null;
        prototype.charset = null;
        prototype.shortName = null;
        prototype.key = null;
        prototype.enumName = null;
        prototype.getKey = function () {
            return this.key;
        };
        constructor.fromKey = function (key) {
            for (var i = 0; i < TransliterationJs.ALL_VALUES.length; i++) {
                var tr = TransliterationJs.ALL_VALUES[i];
                if (tr.key.equals(key)) return tr;
            }
            return null;
        };
        /**
         *
         *  @return name in user friendly form
         */prototype.getName = function () {
            return this.name;
        };
        /**
         *
         *  Aug 14, 2010 12:16:06 PM, draganbencic
         *
         *  @return short name of transliteration option
         */prototype.getShortName = function () {
            return this.shortName;
        };
        /**
         *
         *  @return charset code, example windows-1252, iso-8859-1, UTF-8 etc
         */prototype.getCharset = function () {
            return this.charset;
        };
        prototype.getEnumName = function () {
            return this.enumName;
        };
    }, {
        All: "TransliterationJs",
        Default: "TransliterationJs",
        Greek: "TransliterationJs",
        Cyrillic: "TransliterationJs",
        CentralEuropean: "TransliterationJs",
        Turkish: "TransliterationJs",
        SerbianCyrillic: "TransliterationJs",
        Baltic: "TransliterationJs",
        Portuguese: "TransliterationJs",
        Colombian: "TransliterationJs",
        ALL_VALUES: {name: "Array", arguments: ["TransliterationJs"]}
    }, {});
    var SingleShiftCharacterSetJs = stjs.enumeration("BASIC_SINGLE_SHIFT", "TURKISH_SINGLE_SHIFT", "SPANISH_SINGLE_SHIFT", "PORTUGUESE_SINGLE_SHIFT");
    var LockingShiftCharacterSetJs = stjs.enumeration("BASIC_LOCKING_SHIFT", "TURKISH_LOCKING_SHIFT", "PORTUGUESE_LOCKING_SHIFT");
    /**
     *  This is used in generated sources in package org.infobip.data.coding.js.charsets.impl;
     */var CharacterSet = function CharacterSet() {
    };
    CharacterSet = stjs.extend(CharacterSet, null, [], function (constructor, prototype) {
        constructor.ESCAPE_CHARACTER = 27;
        constructor.REPLACE_CHARACTER = 32;
        prototype.canRepresentCharacter = function (c) {
        };
        prototype.encode = function (c) {
        };
        prototype.getEscapeCharacter = function () {
            return CharacterSet.ESCAPE_CHARACTER;
        };
        prototype.getUdhIdentifier = function () {
        };
        prototype.decode = function (bajt) {
        };
    }, {}, {});
    /**
     *  single character mapping resume
     *
     *  @author draganbencic
     */var MappedCharAndBytesCount = /**
     *  for mapping single character
     *
     *  @param isMapped
     *             if character has been/can be mapped
     *  @param mappedChar
     *             char with which is mapped
     */function MappedCharAndBytesCount(isMapped, mappedChar, byteCount) {
        this.isMapped = isMapped;
        this.mappedIntoChars = mappedChar;
        this.bytesCount = byteCount;
    };
    MappedCharAndBytesCount = stjs.extend(MappedCharAndBytesCount, null, [], function (constructor, prototype) {
        prototype.isMapped = false;
        prototype.mappedIntoChars = null;
        prototype.bytesCount = 0;
    }, {}, {});
    /**
     *  @author iivanovic
     *  @date 18.01.17.
     */var KoreanMessageLengthType = stjs.enumeration("SHORT", "LONG");
    var SmsCountReportCommon = function SmsCountReportCommon() {
    };
    SmsCountReportCommon = stjs.extend(SmsCountReportCommon, null, [], function (constructor, prototype) {
        prototype.messageCount = 0;
        prototype.remaingCharacterCount = 0;
        prototype.udhLength = 0;
        prototype.koreanMessageLengthType = null;
        /**
         *  Total udh and content length represent in bits
         */prototype.totalLengthInBits = 0;
        prototype.chararcterCount = 0;
        prototype.maxChararcterCount = 0;
        prototype.getMessageCount = function () {
            return this.messageCount;
        };
        prototype.setMessageCount = function (messageCount) {
            this.messageCount = messageCount;
        };
        prototype.getRemaingCharacterCount = function () {
            return this.remaingCharacterCount;
        };
        prototype.setRemaingCharacterCount = function (remaingCharacterCount) {
            this.remaingCharacterCount = remaingCharacterCount;
        };
        prototype.getUdhLength = function () {
            return this.udhLength;
        };
        prototype.setUdhLength = function (udhLength) {
            this.udhLength = udhLength;
        };
        prototype.getTotalLengthInBits = function () {
            return this.totalLengthInBits;
        };
        prototype.setTotalLengthInBits = function (totalLengthInBits) {
            this.totalLengthInBits = totalLengthInBits;
        };
        prototype.getChararcterCount = function () {
            return this.chararcterCount;
        };
        prototype.setChararcterCount = function (chararcterCount) {
            this.chararcterCount = chararcterCount;
        };
        prototype.getMaxChararcterCount = function () {
            return this.maxChararcterCount;
        };
        prototype.setMaxChararcterCount = function (maxChararcterCount) {
            this.maxChararcterCount = maxChararcterCount;
        };
        prototype.getKoreanMessageLengthType = function () {
            return this.koreanMessageLengthType;
        };
        prototype.setKoreanMessageLengthType = function (koreanMessageLengthType) {
            this.koreanMessageLengthType = koreanMessageLengthType;
        };
    }, {koreanMessageLengthType: {name: "Enum", arguments: ["KoreanMessageLengthType"]}}, {});
    /**
     *  @author mmimica
     */var CharRemapperJs = function CharRemapperJs() {
    };
    CharRemapperJs = stjs.extend(CharRemapperJs, null, [], function (constructor, prototype) {
        /**
         *  Maps message text according to specified character encoding. Process is
         *  as follows:<p>
         *  <ol>
         *  <li>Cleans the message text (replaces weird quote chars with ASCII ones), see {@link AbstractCharMapper#chars}
         *  <li>Checks if all characters can be mapped to gsm 7
         *  <li>If not, returns cleaned message (see step 1) and raises unicode flag.
         *  </ol>
         *
         *  @param text message text to be mapped
         *  @return mapping resume: mapped text, number of bytes (without taking
         *          account of headers in chained messages...)
         *
         *  @see #mapWithNoCleanup(String)
         */prototype.map = function (text) {
        };
        /**
         *  Same as {@link #map(String)}, but without step one.
         *  @param text message text to be mapped
         *  @return mapping resume: mapped text, number of bytes (without taking
         *          account of headers in chained messages...)
         */prototype.mapWithNoCleanup = function (text) {
        };
    }, {}, {});
    var NationalLanguageInfoJs = function NationalLanguageInfoJs() {
    };
    NationalLanguageInfoJs = stjs.extend(NationalLanguageInfoJs, null, [], function (constructor, prototype) {
        prototype.singleShiftCharacterSet = null;
        prototype.lockingShiftCharacterSet = null;
        prototype.getSingleShiftCharacterSet = function () {
            return this.singleShiftCharacterSet;
        };
        prototype.setSingleShiftCharacterSet = function (singleShiftCharacterSet) {
            this.singleShiftCharacterSet = singleShiftCharacterSet;
        };
        prototype.getLockingShiftCharacterSet = function () {
            return this.lockingShiftCharacterSet;
        };
        prototype.setLockingShiftCharacterSet = function (lockingShiftCharacterSet) {
            this.lockingShiftCharacterSet = lockingShiftCharacterSet;
        };
    }, {
        singleShiftCharacterSet: {name: "Enum", arguments: ["SingleShiftCharacterSetJs"]},
        lockingShiftCharacterSet: {name: "Enum", arguments: ["LockingShiftCharacterSetJs"]}
    }, {});
    /**
     *  @author dtopler
     *
     *  Due javascript conversion limitations copied from  UDHPartType.java from infobip-smpp-common project
     */var UDHPartTypes = stjs.enumeration("CONCATENATED_SHORT_MESSAGES_8BIT", "NATIONAL_LANGUAGE_SINGLE_SHIFT", "NATIONAL_LANGUAGE_LOCKING_SHIFT");
    /**
     *
     *  @author draganbencic
     *
     */var CharRemapResumeJs = function CharRemapResumeJs() {
    };
    CharRemapResumeJs = stjs.extend(CharRemapResumeJs, null, [], function (constructor, prototype) {
        /**
         *  message text after remapping it according to user specific settings
         */prototype.remappedText = null;
        /**
         *  message text after remapping, with replacement characters instead of switching to unicde
         */prototype.remappedTextNoUnicode = null;
        /**
         *  number of bytes required to send this message, no sms headers are counted
         *  here for chainded message
         */prototype.bytesCount = 0;
        /**
         *  number of bytes required to send this message, no sms headers are counted
         *  here for chainded message
         */prototype.bytesCountNoUnicode = 0;
        /**
         *  if characters cannot be reampped to gsm 7 for required language
         */prototype.requiresUnicode = false;
    }, {}, {});
    var UdhContext = function UdhContext(udhLen, hasConcatenatedPart, hasNliPart) {
        this.udhLen = udhLen;
        this.hasConcatenatedPart = hasConcatenatedPart;
        this.hasNliPart = hasNliPart;
    };
    UdhContext = stjs.extend(UdhContext, null, [], function (constructor, prototype) {
        /**
         *  udhLen that should be applied on each part Library take care of
         *  concatenation or NLI UDH depending on nInfo and messageLength
         */prototype.udhLen = 0;
        /**
         *  should be set to true if inside udhLen is UDH for concatenation
         */prototype.hasConcatenatedPart = false;
        /**
         *  should be set to true if inside udhLen is NLI UDH
         */prototype.hasNliPart = false;
        prototype.getUdhLen = function () {
            return this.udhLen;
        };
        prototype.isHasConcatenatedPart = function () {
            return this.hasConcatenatedPart;
        };
        prototype.isHasNliPart = function () {
            return this.hasNliPart;
        };
    }, {}, {});
    var UdhLengthReportJs = function UdhLengthReportJs() {
        this.udhParts = new Array();
    };
    UdhLengthReportJs = stjs.extend(UdhLengthReportJs, null, [], function (constructor, prototype) {
        prototype.totalLength = 0;
        prototype.udhParts = null;
        prototype.getTotalLength = function () {
            return this.totalLength;
        };
        prototype.setTotalLength = function (totalLength) {
            this.totalLength = totalLength;
        };
        prototype.getUdhParts = function () {
            return this.udhParts;
        };
        prototype.setUdhParts = function (udhParts) {
            this.udhParts = udhParts;
        };
    }, {udhParts: {name: "Array", arguments: [{name: "Enum", arguments: ["UDHPartTypes"]}]}}, {});
    /**
     * This is generated class. Don't remove or change it. This class is generated in pre-compile maven phase.
     *  Check infobip-data-coding-generator module.
     */var SpanishSingleShiftCharacterSet = function SpanishSingleShiftCharacterSet() {
    };
    SpanishSingleShiftCharacterSet = stjs.extend(SpanishSingleShiftCharacterSet, null, [CharacterSet], function (constructor, prototype) {
        prototype.getUdhIdentifier = function () {
            return 2;
        };
        prototype.canRepresentCharacter = function (c) {
            switch (c) {
                case '\xe7':
                    return true;
                case '^':
                    return true;
                case '{':
                    return true;
                case '}':
                    return true;
                case '\\':
                    return true;
                case '[':
                    return true;
                case '~':
                    return true;
                case ']':
                    return true;
                case '|':
                    return true;
                case '\xc1':
                    return true;
                case '\xcd':
                    return true;
                case '\xd3':
                    return true;
                case '\xda':
                    return true;
                case '\xe1':
                    return true;
                case "€":
                    return true;
                case '\xed':
                    return true;
                case '\xf3':
                    return true;
                case '\xfa':
                    return true;
                default:
                    return false;
            }
        };
        prototype.encode = function (c) {
            switch (c) {
                case '\xe7':
                    return 9;
                case '^':
                    return 20;
                case '{':
                    return 40;
                case '}':
                    return 41;
                case '\\':
                    return 47;
                case '[':
                    return 60;
                case '~':
                    return 61;
                case ']':
                    return 62;
                case '|':
                    return 64;
                case '\xc1':
                    return 65;
                case '\xcd':
                    return 73;
                case '\xd3':
                    return 79;
                case '\xda':
                    return 85;
                case '\xe1':
                    return 97;
                case "€":
                    return 101;
                case '\xed':
                    return 105;
                case '\xf3':
                    return 111;
                case '\xfa':
                    return 117;
                default:
                    return -1;
            }
        };
        prototype.decode = function (bajt) {
            switch (bajt) {
                case 9:
                    return '\xe7';
                case 20:
                    return '^';
                case 40:
                    return '{';
                case 41:
                    return '}';
                case 47:
                    return '\\';
                case 60:
                    return '[';
                case 61:
                    return '~';
                case 62:
                    return ']';
                case 64:
                    return '|';
                case 65:
                    return '\xc1';
                case 73:
                    return '\xcd';
                case 79:
                    return '\xd3';
                case 85:
                    return '\xda';
                case 97:
                    return '\xe1';
                case 101:
                    return "€";
                case 105:
                    return '\xed';
                case 111:
                    return '\xf3';
                case 117:
                    return '\xfa';
                default:
                    return null;
            }
        };
    }, {}, {});
    /**
     * This is generated class. Don't remove or change it. This class is generated in pre-compile maven phase.
     *  Check infobip-data-coding-generator module.
     */var PortugueseLockingShiftCharacterSet = function PortugueseLockingShiftCharacterSet() {
    };
    PortugueseLockingShiftCharacterSet = stjs.extend(PortugueseLockingShiftCharacterSet, null, [CharacterSet], function (constructor, prototype) {
        prototype.getUdhIdentifier = function () {
            return 3;
        };
        prototype.canRepresentCharacter = function (c) {
            switch (c) {
                case '@':
                    return true;
                case '\xa3':
                    return true;
                case '$':
                    return true;
                case '\xa5':
                    return true;
                case '\xea':
                    return true;
                case '\xe9':
                    return true;
                case '\xfa':
                    return true;
                case '\xed':
                    return true;
                case '\xf3':
                    return true;
                case '\xe7':
                    return true;
                case '\n':
                    return true;
                case '\xd4':
                    return true;
                case '\xf4':
                    return true;
                case '\r':
                    return true;
                case '\xc1':
                    return true;
                case '\xe1':
                    return true;
                case "Δ":
                    return true;
                case '_':
                    return true;
                case '\xaa':
                    return true;
                case '\xc7':
                    return true;
                case '\xc0':
                    return true;
                case "∞":
                    return true;
                case '^':
                    return true;
                case '\\':
                    return true;
                case "€":
                    return true;
                case '\xd3':
                    return true;
                case '|':
                    return true;
                case '\xc2':
                    return true;
                case '\xe2':
                    return true;
                case '\xca':
                    return true;
                case '\xc9':
                    return true;
                case ' ':
                    return true;
                case '!':
                    return true;
                case '"':
                    return true;
                case '#':
                    return true;
                case '\xba':
                    return true;
                case '%':
                    return true;
                case '&':
                    return true;
                case '\'':
                    return true;
                case '(':
                    return true;
                case ')':
                    return true;
                case '*':
                    return true;
                case '+':
                    return true;
                case ',':
                    return true;
                case '-':
                    return true;
                case '.':
                    return true;
                case '/':
                    return true;
                case '0':
                    return true;
                case '1':
                    return true;
                case '2':
                    return true;
                case '3':
                    return true;
                case '4':
                    return true;
                case '5':
                    return true;
                case '6':
                    return true;
                case '7':
                    return true;
                case '8':
                    return true;
                case '9':
                    return true;
                case ':':
                    return true;
                case ';':
                    return true;
                case '<':
                    return true;
                case '=':
                    return true;
                case '>':
                    return true;
                case '?':
                    return true;
                case '\xcd':
                    return true;
                case 'A':
                    return true;
                case 'B':
                    return true;
                case 'C':
                    return true;
                case 'D':
                    return true;
                case 'E':
                    return true;
                case 'F':
                    return true;
                case 'G':
                    return true;
                case 'H':
                    return true;
                case 'I':
                    return true;
                case 'J':
                    return true;
                case 'K':
                    return true;
                case 'L':
                    return true;
                case 'M':
                    return true;
                case 'N':
                    return true;
                case 'O':
                    return true;
                case 'P':
                    return true;
                case 'Q':
                    return true;
                case 'R':
                    return true;
                case 'S':
                    return true;
                case 'T':
                    return true;
                case 'U':
                    return true;
                case 'V':
                    return true;
                case 'W':
                    return true;
                case 'X':
                    return true;
                case 'Y':
                    return true;
                case 'Z':
                    return true;
                case '\xc3':
                    return true;
                case '\xd5':
                    return true;
                case '\xda':
                    return true;
                case '\xdc':
                    return true;
                case '\xa7':
                    return true;
                case '~':
                    return true;
                case 'a':
                    return true;
                case 'b':
                    return true;
                case 'c':
                    return true;
                case 'd':
                    return true;
                case 'e':
                    return true;
                case 'f':
                    return true;
                case 'g':
                    return true;
                case 'h':
                    return true;
                case 'i':
                    return true;
                case 'j':
                    return true;
                case 'k':
                    return true;
                case 'l':
                    return true;
                case 'm':
                    return true;
                case 'n':
                    return true;
                case 'o':
                    return true;
                case 'p':
                    return true;
                case 'q':
                    return true;
                case 'r':
                    return true;
                case 's':
                    return true;
                case 't':
                    return true;
                case 'u':
                    return true;
                case 'v':
                    return true;
                case 'w':
                    return true;
                case 'x':
                    return true;
                case 'y':
                    return true;
                case 'z':
                    return true;
                case '\xe3':
                    return true;
                case '\xf5':
                    return true;
                case '`':
                    return true;
                case '\xfc':
                    return true;
                case '\xe0':
                    return true;
                default:
                    return false;
            }
        };
        prototype.encode = function (c) {
            switch (c) {
                case '@':
                    return 0;
                case '\xa3':
                    return 1;
                case '$':
                    return 2;
                case '\xa5':
                    return 3;
                case '\xea':
                    return 4;
                case '\xe9':
                    return 5;
                case '\xfa':
                    return 6;
                case '\xed':
                    return 7;
                case '\xf3':
                    return 8;
                case '\xe7':
                    return 9;
                case '\n':
                    return 10;
                case '\xd4':
                    return 11;
                case '\xf4':
                    return 12;
                case '\r':
                    return 13;
                case '\xc1':
                    return 14;
                case '\xe1':
                    return 15;
                case "Δ":
                    return 16;
                case '_':
                    return 17;
                case '\xaa':
                    return 18;
                case '\xc7':
                    return 19;
                case '\xc0':
                    return 20;
                case "∞":
                    return 21;
                case '^':
                    return 22;
                case '\\':
                    return 23;
                case "€":
                    return 24;
                case '\xd3':
                    return 25;
                case '|':
                    return 26;
                case '\xc2':
                    return 28;
                case '\xe2':
                    return 29;
                case '\xca':
                    return 30;
                case '\xc9':
                    return 31;
                case ' ':
                    return 32;
                case '!':
                    return 33;
                case '"':
                    return 34;
                case '#':
                    return 35;
                case '\xba':
                    return 36;
                case '%':
                    return 37;
                case '&':
                    return 38;
                case '\'':
                    return 39;
                case '(':
                    return 40;
                case ')':
                    return 41;
                case '*':
                    return 42;
                case '+':
                    return 43;
                case ',':
                    return 44;
                case '-':
                    return 45;
                case '.':
                    return 46;
                case '/':
                    return 47;
                case '0':
                    return 48;
                case '1':
                    return 49;
                case '2':
                    return 50;
                case '3':
                    return 51;
                case '4':
                    return 52;
                case '5':
                    return 53;
                case '6':
                    return 54;
                case '7':
                    return 55;
                case '8':
                    return 56;
                case '9':
                    return 57;
                case ':':
                    return 58;
                case ';':
                    return 59;
                case '<':
                    return 60;
                case '=':
                    return 61;
                case '>':
                    return 62;
                case '?':
                    return 63;
                case '\xcd':
                    return 64;
                case 'A':
                    return 65;
                case 'B':
                    return 66;
                case 'C':
                    return 67;
                case 'D':
                    return 68;
                case 'E':
                    return 69;
                case 'F':
                    return 70;
                case 'G':
                    return 71;
                case 'H':
                    return 72;
                case 'I':
                    return 73;
                case 'J':
                    return 74;
                case 'K':
                    return 75;
                case 'L':
                    return 76;
                case 'M':
                    return 77;
                case 'N':
                    return 78;
                case 'O':
                    return 79;
                case 'P':
                    return 80;
                case 'Q':
                    return 81;
                case 'R':
                    return 82;
                case 'S':
                    return 83;
                case 'T':
                    return 84;
                case 'U':
                    return 85;
                case 'V':
                    return 86;
                case 'W':
                    return 87;
                case 'X':
                    return 88;
                case 'Y':
                    return 89;
                case 'Z':
                    return 90;
                case '\xc3':
                    return 91;
                case '\xd5':
                    return 92;
                case '\xda':
                    return 93;
                case '\xdc':
                    return 94;
                case '\xa7':
                    return 95;
                case '~':
                    return 96;
                case 'a':
                    return 97;
                case 'b':
                    return 98;
                case 'c':
                    return 99;
                case 'd':
                    return 100;
                case 'e':
                    return 101;
                case 'f':
                    return 102;
                case 'g':
                    return 103;
                case 'h':
                    return 104;
                case 'i':
                    return 105;
                case 'j':
                    return 106;
                case 'k':
                    return 107;
                case 'l':
                    return 108;
                case 'm':
                    return 109;
                case 'n':
                    return 110;
                case 'o':
                    return 111;
                case 'p':
                    return 112;
                case 'q':
                    return 113;
                case 'r':
                    return 114;
                case 's':
                    return 115;
                case 't':
                    return 116;
                case 'u':
                    return 117;
                case 'v':
                    return 118;
                case 'w':
                    return 119;
                case 'x':
                    return 120;
                case 'y':
                    return 121;
                case 'z':
                    return 122;
                case '\xe3':
                    return 123;
                case '\xf5':
                    return 124;
                case '`':
                    return 125;
                case '\xfc':
                    return 126;
                case '\xe0':
                    return 127;
                default:
                    return -1;
            }
        };
        prototype.decode = function (bajt) {
            switch (bajt) {
                case 0:
                    return '@';
                case 1:
                    return '\xa3';
                case 2:
                    return '$';
                case 3:
                    return '\xa5';
                case 4:
                    return '\xea';
                case 5:
                    return '\xe9';
                case 6:
                    return '\xfa';
                case 7:
                    return '\xed';
                case 8:
                    return '\xf3';
                case 9:
                    return '\xe7';
                case 10:
                    return '\n';
                case 11:
                    return '\xd4';
                case 12:
                    return '\xf4';
                case 13:
                    return '\r';
                case 14:
                    return '\xc1';
                case 15:
                    return '\xe1';
                case 16:
                    return "Δ";
                case 17:
                    return '_';
                case 18:
                    return '\xaa';
                case 19:
                    return '\xc7';
                case 20:
                    return '\xc0';
                case 21:
                    return "∞";
                case 22:
                    return '^';
                case 23:
                    return '\\';
                case 24:
                    return "€";
                case 25:
                    return '\xd3';
                case 26:
                    return '|';
                case 28:
                    return '\xc2';
                case 29:
                    return '\xe2';
                case 30:
                    return '\xca';
                case 31:
                    return '\xc9';
                case 32:
                    return ' ';
                case 33:
                    return '!';
                case 34:
                    return '"';
                case 35:
                    return '#';
                case 36:
                    return '\xba';
                case 37:
                    return '%';
                case 38:
                    return '&';
                case 39:
                    return '\'';
                case 40:
                    return '(';
                case 41:
                    return ')';
                case 42:
                    return '*';
                case 43:
                    return '+';
                case 44:
                    return ',';
                case 45:
                    return '-';
                case 46:
                    return '.';
                case 47:
                    return '/';
                case 48:
                    return '0';
                case 49:
                    return '1';
                case 50:
                    return '2';
                case 51:
                    return '3';
                case 52:
                    return '4';
                case 53:
                    return '5';
                case 54:
                    return '6';
                case 55:
                    return '7';
                case 56:
                    return '8';
                case 57:
                    return '9';
                case 58:
                    return ':';
                case 59:
                    return ';';
                case 60:
                    return '<';
                case 61:
                    return '=';
                case 62:
                    return '>';
                case 63:
                    return '?';
                case 64:
                    return '\xcd';
                case 65:
                    return 'A';
                case 66:
                    return 'B';
                case 67:
                    return 'C';
                case 68:
                    return 'D';
                case 69:
                    return 'E';
                case 70:
                    return 'F';
                case 71:
                    return 'G';
                case 72:
                    return 'H';
                case 73:
                    return 'I';
                case 74:
                    return 'J';
                case 75:
                    return 'K';
                case 76:
                    return 'L';
                case 77:
                    return 'M';
                case 78:
                    return 'N';
                case 79:
                    return 'O';
                case 80:
                    return 'P';
                case 81:
                    return 'Q';
                case 82:
                    return 'R';
                case 83:
                    return 'S';
                case 84:
                    return 'T';
                case 85:
                    return 'U';
                case 86:
                    return 'V';
                case 87:
                    return 'W';
                case 88:
                    return 'X';
                case 89:
                    return 'Y';
                case 90:
                    return 'Z';
                case 91:
                    return '\xc3';
                case 92:
                    return '\xd5';
                case 93:
                    return '\xda';
                case 94:
                    return '\xdc';
                case 95:
                    return '\xa7';
                case 96:
                    return '~';
                case 97:
                    return 'a';
                case 98:
                    return 'b';
                case 99:
                    return 'c';
                case 100:
                    return 'd';
                case 101:
                    return 'e';
                case 102:
                    return 'f';
                case 103:
                    return 'g';
                case 104:
                    return 'h';
                case 105:
                    return 'i';
                case 106:
                    return 'j';
                case 107:
                    return 'k';
                case 108:
                    return 'l';
                case 109:
                    return 'm';
                case 110:
                    return 'n';
                case 111:
                    return 'o';
                case 112:
                    return 'p';
                case 113:
                    return 'q';
                case 114:
                    return 'r';
                case 115:
                    return 's';
                case 116:
                    return 't';
                case 117:
                    return 'u';
                case 118:
                    return 'v';
                case 119:
                    return 'w';
                case 120:
                    return 'x';
                case 121:
                    return 'y';
                case 122:
                    return 'z';
                case 123:
                    return '\xe3';
                case 124:
                    return '\xf5';
                case 125:
                    return '`';
                case 126:
                    return '\xfc';
                case 127:
                    return '\xe0';
                default:
                    return null;
            }
        };
    }, {}, {});
    /**
     * This is generated class. Don't remove or change it. This class is generated in pre-compile maven phase.
     *  Check infobip-data-coding-generator module.
     */var TurkishSingleShiftCharacterSet = function TurkishSingleShiftCharacterSet() {
    };
    TurkishSingleShiftCharacterSet = stjs.extend(TurkishSingleShiftCharacterSet, null, [CharacterSet], function (constructor, prototype) {
        prototype.getUdhIdentifier = function () {
            return 1;
        };
        prototype.canRepresentCharacter = function (c) {
            switch (c) {
                case '^':
                    return true;
                case '{':
                    return true;
                case '}':
                    return true;
                case '\\':
                    return true;
                case '[':
                    return true;
                case '~':
                    return true;
                case ']':
                    return true;
                case '|':
                    return true;
                case "Ğ":
                    return true;
                case "İ":
                    return true;
                case "Ş":
                    return true;
                case '\xe7':
                    return true;
                case "€":
                    return true;
                case "ğ":
                    return true;
                case "ı":
                    return true;
                case "ş":
                    return true;
                default:
                    return false;
            }
        };
        prototype.encode = function (c) {
            switch (c) {
                case '^':
                    return 20;
                case '{':
                    return 40;
                case '}':
                    return 41;
                case '\\':
                    return 47;
                case '[':
                    return 60;
                case '~':
                    return 61;
                case ']':
                    return 62;
                case '|':
                    return 64;
                case "Ğ":
                    return 71;
                case "İ":
                    return 73;
                case "Ş":
                    return 83;
                case '\xe7':
                    return 99;
                case "€":
                    return 101;
                case "ğ":
                    return 103;
                case "ı":
                    return 105;
                case "ş":
                    return 115;
                default:
                    return -1;
            }
        };
        prototype.decode = function (bajt) {
            switch (bajt) {
                case 20:
                    return '^';
                case 40:
                    return '{';
                case 41:
                    return '}';
                case 47:
                    return '\\';
                case 60:
                    return '[';
                case 61:
                    return '~';
                case 62:
                    return ']';
                case 64:
                    return '|';
                case 71:
                    return "Ğ";
                case 73:
                    return "İ";
                case 83:
                    return "Ş";
                case 99:
                    return '\xe7';
                case 101:
                    return "€";
                case 103:
                    return "ğ";
                case 105:
                    return "ı";
                case 115:
                    return "ş";
                default:
                    return null;
            }
        };
    }, {}, {});
    /**
     * This is generated class. Don't remove or change it. This class is generated in pre-compile maven phase.
     *  Check infobip-data-coding-generator module.
     */var BasicSingleShiftCharacterSet = function BasicSingleShiftCharacterSet() {
    };
    BasicSingleShiftCharacterSet = stjs.extend(BasicSingleShiftCharacterSet, null, [CharacterSet], function (constructor, prototype) {
        prototype.getUdhIdentifier = function () {
            return 0;
        };
        prototype.canRepresentCharacter = function (c) {
            switch (c) {
                case '^':
                    return true;
                case '{':
                    return true;
                case '}':
                    return true;
                case '\\':
                    return true;
                case '[':
                    return true;
                case '~':
                    return true;
                case ']':
                    return true;
                case '|':
                    return true;
                case "€":
                    return true;
                default:
                    return false;
            }
        };
        prototype.encode = function (c) {
            switch (c) {
                case '^':
                    return 20;
                case '{':
                    return 40;
                case '}':
                    return 41;
                case '\\':
                    return 47;
                case '[':
                    return 60;
                case '~':
                    return 61;
                case ']':
                    return 62;
                case '|':
                    return 64;
                case "€":
                    return 101;
                default:
                    return -1;
            }
        };
        prototype.decode = function (bajt) {
            switch (bajt) {
                case 20:
                    return '^';
                case 40:
                    return '{';
                case 41:
                    return '}';
                case 47:
                    return '\\';
                case 60:
                    return '[';
                case 61:
                    return '~';
                case 62:
                    return ']';
                case 64:
                    return '|';
                case 101:
                    return "€";
                default:
                    return null;
            }
        };
    }, {}, {});
    /**
     * This is generated class. Don't remove or change it. This class is generated in pre-compile maven phase.
     *  Check infobip-data-coding-generator module.
     */var TurkishLockingShiftCharacterSet = function TurkishLockingShiftCharacterSet() {
    };
    TurkishLockingShiftCharacterSet = stjs.extend(TurkishLockingShiftCharacterSet, null, [CharacterSet], function (constructor, prototype) {
        prototype.getUdhIdentifier = function () {
            return 1;
        };
        prototype.canRepresentCharacter = function (c) {
            switch (c) {
                case '@':
                    return true;
                case '\xa3':
                    return true;
                case '$':
                    return true;
                case '\xa5':
                    return true;
                case "€":
                    return true;
                case '\xe9':
                    return true;
                case '\xf9':
                    return true;
                case "ı":
                    return true;
                case '\xf2':
                    return true;
                case '\xc7':
                    return true;
                case '\n':
                    return true;
                case "Ğ":
                    return true;
                case "ğ":
                    return true;
                case '\r':
                    return true;
                case '\xc5':
                    return true;
                case '\xe5':
                    return true;
                case "Δ":
                    return true;
                case '_':
                    return true;
                case "Φ":
                    return true;
                case "Γ":
                    return true;
                case "Λ":
                    return true;
                case "Ω":
                    return true;
                case "Π":
                    return true;
                case "Ψ":
                    return true;
                case "Σ":
                    return true;
                case "Θ":
                    return true;
                case "Ξ":
                    return true;
                case "Ş":
                    return true;
                case "ş":
                    return true;
                case '\xdf':
                    return true;
                case '\xc9':
                    return true;
                case ' ':
                    return true;
                case '!':
                    return true;
                case '"':
                    return true;
                case '#':
                    return true;
                case '\xa4':
                    return true;
                case '%':
                    return true;
                case '&':
                    return true;
                case '\'':
                    return true;
                case '(':
                    return true;
                case ')':
                    return true;
                case '*':
                    return true;
                case '+':
                    return true;
                case ',':
                    return true;
                case '-':
                    return true;
                case '.':
                    return true;
                case '/':
                    return true;
                case '0':
                    return true;
                case '1':
                    return true;
                case '2':
                    return true;
                case '3':
                    return true;
                case '4':
                    return true;
                case '5':
                    return true;
                case '6':
                    return true;
                case '7':
                    return true;
                case '8':
                    return true;
                case '9':
                    return true;
                case ':':
                    return true;
                case ';':
                    return true;
                case '<':
                    return true;
                case '=':
                    return true;
                case '>':
                    return true;
                case '?':
                    return true;
                case "İ":
                    return true;
                case 'A':
                    return true;
                case 'B':
                    return true;
                case 'C':
                    return true;
                case 'D':
                    return true;
                case 'E':
                    return true;
                case 'F':
                    return true;
                case 'G':
                    return true;
                case 'H':
                    return true;
                case 'I':
                    return true;
                case 'J':
                    return true;
                case 'K':
                    return true;
                case 'L':
                    return true;
                case 'M':
                    return true;
                case 'N':
                    return true;
                case 'O':
                    return true;
                case 'P':
                    return true;
                case 'Q':
                    return true;
                case 'R':
                    return true;
                case 'S':
                    return true;
                case 'T':
                    return true;
                case 'U':
                    return true;
                case 'V':
                    return true;
                case 'W':
                    return true;
                case 'X':
                    return true;
                case 'Y':
                    return true;
                case 'Z':
                    return true;
                case '\xc4':
                    return true;
                case '\xd6':
                    return true;
                case '\xd1':
                    return true;
                case '\xdc':
                    return true;
                case '\xa7':
                    return true;
                case '\xe7':
                    return true;
                case 'a':
                    return true;
                case 'b':
                    return true;
                case 'c':
                    return true;
                case 'd':
                    return true;
                case 'e':
                    return true;
                case 'f':
                    return true;
                case 'g':
                    return true;
                case 'h':
                    return true;
                case 'i':
                    return true;
                case 'j':
                    return true;
                case 'k':
                    return true;
                case 'l':
                    return true;
                case 'm':
                    return true;
                case 'n':
                    return true;
                case 'o':
                    return true;
                case 'p':
                    return true;
                case 'q':
                    return true;
                case 'r':
                    return true;
                case 's':
                    return true;
                case 't':
                    return true;
                case 'u':
                    return true;
                case 'v':
                    return true;
                case 'w':
                    return true;
                case 'x':
                    return true;
                case 'y':
                    return true;
                case 'z':
                    return true;
                case '\xe4':
                    return true;
                case '\xf6':
                    return true;
                case '\xf1':
                    return true;
                case '\xfc':
                    return true;
                case '\xe0':
                    return true;
                default:
                    return false;
            }
        };
        prototype.encode = function (c) {
            switch (c) {
                case '@':
                    return 0;
                case '\xa3':
                    return 1;
                case '$':
                    return 2;
                case '\xa5':
                    return 3;
                case "€":
                    return 4;
                case '\xe9':
                    return 5;
                case '\xf9':
                    return 6;
                case "ı":
                    return 7;
                case '\xf2':
                    return 8;
                case '\xc7':
                    return 9;
                case '\n':
                    return 10;
                case "Ğ":
                    return 11;
                case "ğ":
                    return 12;
                case '\r':
                    return 13;
                case '\xc5':
                    return 14;
                case '\xe5':
                    return 15;
                case "Δ":
                    return 16;
                case '_':
                    return 17;
                case "Φ":
                    return 18;
                case "Γ":
                    return 19;
                case "Λ":
                    return 20;
                case "Ω":
                    return 21;
                case "Π":
                    return 22;
                case "Ψ":
                    return 23;
                case "Σ":
                    return 24;
                case "Θ":
                    return 25;
                case "Ξ":
                    return 26;
                case "Ş":
                    return 28;
                case "ş":
                    return 29;
                case '\xdf':
                    return 30;
                case '\xc9':
                    return 31;
                case ' ':
                    return 32;
                case '!':
                    return 33;
                case '"':
                    return 34;
                case '#':
                    return 35;
                case '\xa4':
                    return 36;
                case '%':
                    return 37;
                case '&':
                    return 38;
                case '\'':
                    return 39;
                case '(':
                    return 40;
                case ')':
                    return 41;
                case '*':
                    return 42;
                case '+':
                    return 43;
                case ',':
                    return 44;
                case '-':
                    return 45;
                case '.':
                    return 46;
                case '/':
                    return 47;
                case '0':
                    return 48;
                case '1':
                    return 49;
                case '2':
                    return 50;
                case '3':
                    return 51;
                case '4':
                    return 52;
                case '5':
                    return 53;
                case '6':
                    return 54;
                case '7':
                    return 55;
                case '8':
                    return 56;
                case '9':
                    return 57;
                case ':':
                    return 58;
                case ';':
                    return 59;
                case '<':
                    return 60;
                case '=':
                    return 61;
                case '>':
                    return 62;
                case '?':
                    return 63;
                case "İ":
                    return 64;
                case 'A':
                    return 65;
                case 'B':
                    return 66;
                case 'C':
                    return 67;
                case 'D':
                    return 68;
                case 'E':
                    return 69;
                case 'F':
                    return 70;
                case 'G':
                    return 71;
                case 'H':
                    return 72;
                case 'I':
                    return 73;
                case 'J':
                    return 74;
                case 'K':
                    return 75;
                case 'L':
                    return 76;
                case 'M':
                    return 77;
                case 'N':
                    return 78;
                case 'O':
                    return 79;
                case 'P':
                    return 80;
                case 'Q':
                    return 81;
                case 'R':
                    return 82;
                case 'S':
                    return 83;
                case 'T':
                    return 84;
                case 'U':
                    return 85;
                case 'V':
                    return 86;
                case 'W':
                    return 87;
                case 'X':
                    return 88;
                case 'Y':
                    return 89;
                case 'Z':
                    return 90;
                case '\xc4':
                    return 91;
                case '\xd6':
                    return 92;
                case '\xd1':
                    return 93;
                case '\xdc':
                    return 94;
                case '\xa7':
                    return 95;
                case '\xe7':
                    return 96;
                case 'a':
                    return 97;
                case 'b':
                    return 98;
                case 'c':
                    return 99;
                case 'd':
                    return 100;
                case 'e':
                    return 101;
                case 'f':
                    return 102;
                case 'g':
                    return 103;
                case 'h':
                    return 104;
                case 'i':
                    return 105;
                case 'j':
                    return 106;
                case 'k':
                    return 107;
                case 'l':
                    return 108;
                case 'm':
                    return 109;
                case 'n':
                    return 110;
                case 'o':
                    return 111;
                case 'p':
                    return 112;
                case 'q':
                    return 113;
                case 'r':
                    return 114;
                case 's':
                    return 115;
                case 't':
                    return 116;
                case 'u':
                    return 117;
                case 'v':
                    return 118;
                case 'w':
                    return 119;
                case 'x':
                    return 120;
                case 'y':
                    return 121;
                case 'z':
                    return 122;
                case '\xe4':
                    return 123;
                case '\xf6':
                    return 124;
                case '\xf1':
                    return 125;
                case '\xfc':
                    return 126;
                case '\xe0':
                    return 127;
                default:
                    return -1;
            }
        };
        prototype.decode = function (bajt) {
            switch (bajt) {
                case 0:
                    return '@';
                case 1:
                    return '\xa3';
                case 2:
                    return '$';
                case 3:
                    return '\xa5';
                case 4:
                    return "€";
                case 5:
                    return '\xe9';
                case 6:
                    return '\xf9';
                case 7:
                    return "ı";
                case 8:
                    return '\xf2';
                case 9:
                    return '\xc7';
                case 10:
                    return '\n';
                case 11:
                    return "Ğ";
                case 12:
                    return "ğ";
                case 13:
                    return '\r';
                case 14:
                    return '\xc5';
                case 15:
                    return '\xe5';
                case 16:
                    return "Δ";
                case 17:
                    return '_';
                case 18:
                    return "Φ";
                case 19:
                    return "Γ";
                case 20:
                    return "Λ";
                case 21:
                    return "Ω";
                case 22:
                    return "Π";
                case 23:
                    return "Ψ";
                case 24:
                    return "Σ";
                case 25:
                    return "Θ";
                case 26:
                    return "Ξ";
                case 28:
                    return "Ş";
                case 29:
                    return "ş";
                case 30:
                    return '\xdf';
                case 31:
                    return '\xc9';
                case 32:
                    return ' ';
                case 33:
                    return '!';
                case 34:
                    return '"';
                case 35:
                    return '#';
                case 36:
                    return '\xa4';
                case 37:
                    return '%';
                case 38:
                    return '&';
                case 39:
                    return '\'';
                case 40:
                    return '(';
                case 41:
                    return ')';
                case 42:
                    return '*';
                case 43:
                    return '+';
                case 44:
                    return ',';
                case 45:
                    return '-';
                case 46:
                    return '.';
                case 47:
                    return '/';
                case 48:
                    return '0';
                case 49:
                    return '1';
                case 50:
                    return '2';
                case 51:
                    return '3';
                case 52:
                    return '4';
                case 53:
                    return '5';
                case 54:
                    return '6';
                case 55:
                    return '7';
                case 56:
                    return '8';
                case 57:
                    return '9';
                case 58:
                    return ':';
                case 59:
                    return ';';
                case 60:
                    return '<';
                case 61:
                    return '=';
                case 62:
                    return '>';
                case 63:
                    return '?';
                case 64:
                    return "İ";
                case 65:
                    return 'A';
                case 66:
                    return 'B';
                case 67:
                    return 'C';
                case 68:
                    return 'D';
                case 69:
                    return 'E';
                case 70:
                    return 'F';
                case 71:
                    return 'G';
                case 72:
                    return 'H';
                case 73:
                    return 'I';
                case 74:
                    return 'J';
                case 75:
                    return 'K';
                case 76:
                    return 'L';
                case 77:
                    return 'M';
                case 78:
                    return 'N';
                case 79:
                    return 'O';
                case 80:
                    return 'P';
                case 81:
                    return 'Q';
                case 82:
                    return 'R';
                case 83:
                    return 'S';
                case 84:
                    return 'T';
                case 85:
                    return 'U';
                case 86:
                    return 'V';
                case 87:
                    return 'W';
                case 88:
                    return 'X';
                case 89:
                    return 'Y';
                case 90:
                    return 'Z';
                case 91:
                    return '\xc4';
                case 92:
                    return '\xd6';
                case 93:
                    return '\xd1';
                case 94:
                    return '\xdc';
                case 95:
                    return '\xa7';
                case 96:
                    return '\xe7';
                case 97:
                    return 'a';
                case 98:
                    return 'b';
                case 99:
                    return 'c';
                case 100:
                    return 'd';
                case 101:
                    return 'e';
                case 102:
                    return 'f';
                case 103:
                    return 'g';
                case 104:
                    return 'h';
                case 105:
                    return 'i';
                case 106:
                    return 'j';
                case 107:
                    return 'k';
                case 108:
                    return 'l';
                case 109:
                    return 'm';
                case 110:
                    return 'n';
                case 111:
                    return 'o';
                case 112:
                    return 'p';
                case 113:
                    return 'q';
                case 114:
                    return 'r';
                case 115:
                    return 's';
                case 116:
                    return 't';
                case 117:
                    return 'u';
                case 118:
                    return 'v';
                case 119:
                    return 'w';
                case 120:
                    return 'x';
                case 121:
                    return 'y';
                case 122:
                    return 'z';
                case 123:
                    return '\xe4';
                case 124:
                    return '\xf6';
                case 125:
                    return '\xf1';
                case 126:
                    return '\xfc';
                case 127:
                    return '\xe0';
                default:
                    return null;
            }
        };
    }, {}, {});
    /**
     * This is generated class. Don't remove or change it. This class is generated in pre-compile maven phase.
     *  Check infobip-data-coding-generator module.
     */var PortugueseSingleShiftCharacterSet = function PortugueseSingleShiftCharacterSet() {
    };
    PortugueseSingleShiftCharacterSet = stjs.extend(PortugueseSingleShiftCharacterSet, null, [CharacterSet], function (constructor, prototype) {
        prototype.getUdhIdentifier = function () {
            return 3;
        };
        prototype.canRepresentCharacter = function (c) {
            switch (c) {
                case '\xea':
                    return true;
                case '\xe7':
                    return true;
                case '\xd4':
                    return true;
                case '\xf4':
                    return true;
                case '\xc1':
                    return true;
                case '\xe1':
                    return true;
                case "Φ":
                    return true;
                case "Γ":
                    return true;
                case '^':
                    return true;
                case "Ω":
                    return true;
                case "Π":
                    return true;
                case "Ψ":
                    return true;
                case "Σ":
                    return true;
                case "Θ":
                    return true;
                case '\xca':
                    return true;
                case '{':
                    return true;
                case '}':
                    return true;
                case '\\':
                    return true;
                case '[':
                    return true;
                case '~':
                    return true;
                case ']':
                    return true;
                case '|':
                    return true;
                case '\xc0':
                    return true;
                case '\xcd':
                    return true;
                case '\xd3':
                    return true;
                case '\xda':
                    return true;
                case '\xc3':
                    return true;
                case '\xd5':
                    return true;
                case '\xc2':
                    return true;
                case "€":
                    return true;
                case '\xed':
                    return true;
                case '\xf3':
                    return true;
                case '\xfa':
                    return true;
                case '\xe3':
                    return true;
                case '\xf5':
                    return true;
                case '\xe2':
                    return true;
                default:
                    return false;
            }
        };
        prototype.encode = function (c) {
            switch (c) {
                case '\xea':
                    return 5;
                case '\xe7':
                    return 9;
                case '\xd4':
                    return 11;
                case '\xf4':
                    return 12;
                case '\xc1':
                    return 14;
                case '\xe1':
                    return 15;
                case "Φ":
                    return 18;
                case "Γ":
                    return 19;
                case '^':
                    return 20;
                case "Ω":
                    return 21;
                case "Π":
                    return 22;
                case "Ψ":
                    return 23;
                case "Σ":
                    return 24;
                case "Θ":
                    return 25;
                case '\xca':
                    return 31;
                case '{':
                    return 40;
                case '}':
                    return 41;
                case '\\':
                    return 47;
                case '[':
                    return 60;
                case '~':
                    return 61;
                case ']':
                    return 62;
                case '|':
                    return 64;
                case '\xc0':
                    return 65;
                case '\xcd':
                    return 73;
                case '\xd3':
                    return 79;
                case '\xda':
                    return 85;
                case '\xc3':
                    return 91;
                case '\xd5':
                    return 92;
                case '\xc2':
                    return 97;
                case "€":
                    return 101;
                case '\xed':
                    return 105;
                case '\xf3':
                    return 111;
                case '\xfa':
                    return 117;
                case '\xe3':
                    return 123;
                case '\xf5':
                    return 124;
                case '\xe2':
                    return 127;
                default:
                    return -1;
            }
        };
        prototype.decode = function (bajt) {
            switch (bajt) {
                case 5:
                    return '\xea';
                case 9:
                    return '\xe7';
                case 11:
                    return '\xd4';
                case 12:
                    return '\xf4';
                case 14:
                    return '\xc1';
                case 15:
                    return '\xe1';
                case 18:
                    return "Φ";
                case 19:
                    return "Γ";
                case 20:
                    return '^';
                case 21:
                    return "Ω";
                case 22:
                    return "Π";
                case 23:
                    return "Ψ";
                case 24:
                    return "Σ";
                case 25:
                    return "Θ";
                case 31:
                    return '\xca';
                case 40:
                    return '{';
                case 41:
                    return '}';
                case 47:
                    return '\\';
                case 60:
                    return '[';
                case 61:
                    return '~';
                case 62:
                    return ']';
                case 64:
                    return '|';
                case 65:
                    return '\xc0';
                case 73:
                    return '\xcd';
                case 79:
                    return '\xd3';
                case 85:
                    return '\xda';
                case 91:
                    return '\xc3';
                case 92:
                    return '\xd5';
                case 97:
                    return '\xc2';
                case 101:
                    return "€";
                case 105:
                    return '\xed';
                case 111:
                    return '\xf3';
                case 117:
                    return '\xfa';
                case 123:
                    return '\xe3';
                case 124:
                    return '\xf5';
                case 127:
                    return '\xe2';
                default:
                    return null;
            }
        };
    }, {}, {});
    /**
     * This is generated class. Don't remove or change it. This class is generated in pre-compile maven phase.
     *  Check infobip-data-coding-generator module.
     */var BasicLockingShiftCharacterSet = function BasicLockingShiftCharacterSet() {
    };
    BasicLockingShiftCharacterSet = stjs.extend(BasicLockingShiftCharacterSet, null, [CharacterSet], function (constructor, prototype) {
        prototype.getUdhIdentifier = function () {
            return 0;
        };
        prototype.canRepresentCharacter = function (c) {
            switch (c) {
                case '@':
                    return true;
                case '\xa3':
                    return true;
                case '$':
                    return true;
                case '\xa5':
                    return true;
                case '\xe8':
                    return true;
                case '\xe9':
                    return true;
                case '\xf9':
                    return true;
                case '\xec':
                    return true;
                case '\xf2':
                    return true;
                case '\xc7':
                    return true;
                case '\n':
                    return true;
                case '\xd8':
                    return true;
                case '\xf8':
                    return true;
                case '\r':
                    return true;
                case '\xc5':
                    return true;
                case '\xe5':
                    return true;
                case "Δ":
                    return true;
                case '_':
                    return true;
                case "Φ":
                    return true;
                case "Γ":
                    return true;
                case "Λ":
                    return true;
                case "Ω":
                    return true;
                case "Π":
                    return true;
                case "Ψ":
                    return true;
                case "Σ":
                    return true;
                case "Θ":
                    return true;
                case "Ξ":
                    return true;
                case '\xc6':
                    return true;
                case '\xe6':
                    return true;
                case '\xdf':
                    return true;
                case '\xc9':
                    return true;
                case ' ':
                    return true;
                case '!':
                    return true;
                case '"':
                    return true;
                case '#':
                    return true;
                case '\xa4':
                    return true;
                case '%':
                    return true;
                case '&':
                    return true;
                case '\'':
                    return true;
                case '(':
                    return true;
                case ')':
                    return true;
                case '*':
                    return true;
                case '+':
                    return true;
                case ',':
                    return true;
                case '-':
                    return true;
                case '.':
                    return true;
                case '/':
                    return true;
                case '0':
                    return true;
                case '1':
                    return true;
                case '2':
                    return true;
                case '3':
                    return true;
                case '4':
                    return true;
                case '5':
                    return true;
                case '6':
                    return true;
                case '7':
                    return true;
                case '8':
                    return true;
                case '9':
                    return true;
                case ':':
                    return true;
                case ';':
                    return true;
                case '<':
                    return true;
                case '=':
                    return true;
                case '>':
                    return true;
                case '?':
                    return true;
                case '\xa1':
                    return true;
                case 'A':
                    return true;
                case 'B':
                    return true;
                case 'C':
                    return true;
                case 'D':
                    return true;
                case 'E':
                    return true;
                case 'F':
                    return true;
                case 'G':
                    return true;
                case 'H':
                    return true;
                case 'I':
                    return true;
                case 'J':
                    return true;
                case 'K':
                    return true;
                case 'L':
                    return true;
                case 'M':
                    return true;
                case 'N':
                    return true;
                case 'O':
                    return true;
                case 'P':
                    return true;
                case 'Q':
                    return true;
                case 'R':
                    return true;
                case 'S':
                    return true;
                case 'T':
                    return true;
                case 'U':
                    return true;
                case 'V':
                    return true;
                case 'W':
                    return true;
                case 'X':
                    return true;
                case 'Y':
                    return true;
                case 'Z':
                    return true;
                case '\xc4':
                    return true;
                case '\xd6':
                    return true;
                case '\xd1':
                    return true;
                case '\xdc':
                    return true;
                case '\xa7':
                    return true;
                case '\xbf':
                    return true;
                case 'a':
                    return true;
                case 'b':
                    return true;
                case 'c':
                    return true;
                case 'd':
                    return true;
                case 'e':
                    return true;
                case 'f':
                    return true;
                case 'g':
                    return true;
                case 'h':
                    return true;
                case 'i':
                    return true;
                case 'j':
                    return true;
                case 'k':
                    return true;
                case 'l':
                    return true;
                case 'm':
                    return true;
                case 'n':
                    return true;
                case 'o':
                    return true;
                case 'p':
                    return true;
                case 'q':
                    return true;
                case 'r':
                    return true;
                case 's':
                    return true;
                case 't':
                    return true;
                case 'u':
                    return true;
                case 'v':
                    return true;
                case 'w':
                    return true;
                case 'x':
                    return true;
                case 'y':
                    return true;
                case 'z':
                    return true;
                case '\xe4':
                    return true;
                case '\xf6':
                    return true;
                case '\xf1':
                    return true;
                case '\xfc':
                    return true;
                case '\xe0':
                    return true;
                default:
                    return false;
            }
        };
        prototype.encode = function (c) {
            switch (c) {
                case '@':
                    return 0;
                case '\xa3':
                    return 1;
                case '$':
                    return 2;
                case '\xa5':
                    return 3;
                case '\xe8':
                    return 4;
                case '\xe9':
                    return 5;
                case '\xf9':
                    return 6;
                case '\xec':
                    return 7;
                case '\xf2':
                    return 8;
                case '\xc7':
                    return 9;
                case '\n':
                    return 10;
                case '\xd8':
                    return 11;
                case '\xf8':
                    return 12;
                case '\r':
                    return 13;
                case '\xc5':
                    return 14;
                case '\xe5':
                    return 15;
                case "Δ":
                    return 16;
                case '_':
                    return 17;
                case "Φ":
                    return 18;
                case "Γ":
                    return 19;
                case "Λ":
                    return 20;
                case "Ω":
                    return 21;
                case "Π":
                    return 22;
                case "Ψ":
                    return 23;
                case "Σ":
                    return 24;
                case "Θ":
                    return 25;
                case "Ξ":
                    return 26;
                case '\xc6':
                    return 28;
                case '\xe6':
                    return 29;
                case '\xdf':
                    return 30;
                case '\xc9':
                    return 31;
                case ' ':
                    return 32;
                case '!':
                    return 33;
                case '"':
                    return 34;
                case '#':
                    return 35;
                case '\xa4':
                    return 36;
                case '%':
                    return 37;
                case '&':
                    return 38;
                case '\'':
                    return 39;
                case '(':
                    return 40;
                case ')':
                    return 41;
                case '*':
                    return 42;
                case '+':
                    return 43;
                case ',':
                    return 44;
                case '-':
                    return 45;
                case '.':
                    return 46;
                case '/':
                    return 47;
                case '0':
                    return 48;
                case '1':
                    return 49;
                case '2':
                    return 50;
                case '3':
                    return 51;
                case '4':
                    return 52;
                case '5':
                    return 53;
                case '6':
                    return 54;
                case '7':
                    return 55;
                case '8':
                    return 56;
                case '9':
                    return 57;
                case ':':
                    return 58;
                case ';':
                    return 59;
                case '<':
                    return 60;
                case '=':
                    return 61;
                case '>':
                    return 62;
                case '?':
                    return 63;
                case '\xa1':
                    return 64;
                case 'A':
                    return 65;
                case 'B':
                    return 66;
                case 'C':
                    return 67;
                case 'D':
                    return 68;
                case 'E':
                    return 69;
                case 'F':
                    return 70;
                case 'G':
                    return 71;
                case 'H':
                    return 72;
                case 'I':
                    return 73;
                case 'J':
                    return 74;
                case 'K':
                    return 75;
                case 'L':
                    return 76;
                case 'M':
                    return 77;
                case 'N':
                    return 78;
                case 'O':
                    return 79;
                case 'P':
                    return 80;
                case 'Q':
                    return 81;
                case 'R':
                    return 82;
                case 'S':
                    return 83;
                case 'T':
                    return 84;
                case 'U':
                    return 85;
                case 'V':
                    return 86;
                case 'W':
                    return 87;
                case 'X':
                    return 88;
                case 'Y':
                    return 89;
                case 'Z':
                    return 90;
                case '\xc4':
                    return 91;
                case '\xd6':
                    return 92;
                case '\xd1':
                    return 93;
                case '\xdc':
                    return 94;
                case '\xa7':
                    return 95;
                case '\xbf':
                    return 96;
                case 'a':
                    return 97;
                case 'b':
                    return 98;
                case 'c':
                    return 99;
                case 'd':
                    return 100;
                case 'e':
                    return 101;
                case 'f':
                    return 102;
                case 'g':
                    return 103;
                case 'h':
                    return 104;
                case 'i':
                    return 105;
                case 'j':
                    return 106;
                case 'k':
                    return 107;
                case 'l':
                    return 108;
                case 'm':
                    return 109;
                case 'n':
                    return 110;
                case 'o':
                    return 111;
                case 'p':
                    return 112;
                case 'q':
                    return 113;
                case 'r':
                    return 114;
                case 's':
                    return 115;
                case 't':
                    return 116;
                case 'u':
                    return 117;
                case 'v':
                    return 118;
                case 'w':
                    return 119;
                case 'x':
                    return 120;
                case 'y':
                    return 121;
                case 'z':
                    return 122;
                case '\xe4':
                    return 123;
                case '\xf6':
                    return 124;
                case '\xf1':
                    return 125;
                case '\xfc':
                    return 126;
                case '\xe0':
                    return 127;
                default:
                    return -1;
            }
        };
        prototype.decode = function (bajt) {
            switch (bajt) {
                case 0:
                    return '@';
                case 1:
                    return '\xa3';
                case 2:
                    return '$';
                case 3:
                    return '\xa5';
                case 4:
                    return '\xe8';
                case 5:
                    return '\xe9';
                case 6:
                    return '\xf9';
                case 7:
                    return '\xec';
                case 8:
                    return '\xf2';
                case 9:
                    return '\xc7';
                case 10:
                    return '\n';
                case 11:
                    return '\xd8';
                case 12:
                    return '\xf8';
                case 13:
                    return '\r';
                case 14:
                    return '\xc5';
                case 15:
                    return '\xe5';
                case 16:
                    return "Δ";
                case 17:
                    return '_';
                case 18:
                    return "Φ";
                case 19:
                    return "Γ";
                case 20:
                    return "Λ";
                case 21:
                    return "Ω";
                case 22:
                    return "Π";
                case 23:
                    return "Ψ";
                case 24:
                    return "Σ";
                case 25:
                    return "Θ";
                case 26:
                    return "Ξ";
                case 28:
                    return '\xc6';
                case 29:
                    return '\xe6';
                case 30:
                    return '\xdf';
                case 31:
                    return '\xc9';
                case 32:
                    return ' ';
                case 33:
                    return '!';
                case 34:
                    return '"';
                case 35:
                    return '#';
                case 36:
                    return '\xa4';
                case 37:
                    return '%';
                case 38:
                    return '&';
                case 39:
                    return '\'';
                case 40:
                    return '(';
                case 41:
                    return ')';
                case 42:
                    return '*';
                case 43:
                    return '+';
                case 44:
                    return ',';
                case 45:
                    return '-';
                case 46:
                    return '.';
                case 47:
                    return '/';
                case 48:
                    return '0';
                case 49:
                    return '1';
                case 50:
                    return '2';
                case 51:
                    return '3';
                case 52:
                    return '4';
                case 53:
                    return '5';
                case 54:
                    return '6';
                case 55:
                    return '7';
                case 56:
                    return '8';
                case 57:
                    return '9';
                case 58:
                    return ':';
                case 59:
                    return ';';
                case 60:
                    return '<';
                case 61:
                    return '=';
                case 62:
                    return '>';
                case 63:
                    return '?';
                case 64:
                    return '\xa1';
                case 65:
                    return 'A';
                case 66:
                    return 'B';
                case 67:
                    return 'C';
                case 68:
                    return 'D';
                case 69:
                    return 'E';
                case 70:
                    return 'F';
                case 71:
                    return 'G';
                case 72:
                    return 'H';
                case 73:
                    return 'I';
                case 74:
                    return 'J';
                case 75:
                    return 'K';
                case 76:
                    return 'L';
                case 77:
                    return 'M';
                case 78:
                    return 'N';
                case 79:
                    return 'O';
                case 80:
                    return 'P';
                case 81:
                    return 'Q';
                case 82:
                    return 'R';
                case 83:
                    return 'S';
                case 84:
                    return 'T';
                case 85:
                    return 'U';
                case 86:
                    return 'V';
                case 87:
                    return 'W';
                case 88:
                    return 'X';
                case 89:
                    return 'Y';
                case 90:
                    return 'Z';
                case 91:
                    return '\xc4';
                case 92:
                    return '\xd6';
                case 93:
                    return '\xd1';
                case 94:
                    return '\xdc';
                case 95:
                    return '\xa7';
                case 96:
                    return '\xbf';
                case 97:
                    return 'a';
                case 98:
                    return 'b';
                case 99:
                    return 'c';
                case 100:
                    return 'd';
                case 101:
                    return 'e';
                case 102:
                    return 'f';
                case 103:
                    return 'g';
                case 104:
                    return 'h';
                case 105:
                    return 'i';
                case 106:
                    return 'j';
                case 107:
                    return 'k';
                case 108:
                    return 'l';
                case 109:
                    return 'm';
                case 110:
                    return 'n';
                case 111:
                    return 'o';
                case 112:
                    return 'p';
                case 113:
                    return 'q';
                case 114:
                    return 'r';
                case 115:
                    return 's';
                case 116:
                    return 't';
                case 117:
                    return 'u';
                case 118:
                    return 'v';
                case 119:
                    return 'w';
                case 120:
                    return 'x';
                case 121:
                    return 'y';
                case 122:
                    return 'z';
                case 123:
                    return '\xe4';
                case 124:
                    return '\xf6';
                case 125:
                    return '\xf1';
                case 126:
                    return '\xfc';
                case 127:
                    return '\xe0';
                default:
                    return null;
            }
        };
    }, {}, {});
    var KoreanMessageLengthTypeUtils = function KoreanMessageLengthTypeUtils() {
    };
    KoreanMessageLengthTypeUtils = stjs.extend(KoreanMessageLengthTypeUtils, null, [], function (constructor, prototype) {
        constructor.getId = function (characterCount, unicode) {
            return KoreanMessageLengthTypeUtils.getType(characterCount, unicode).ordinal() + 1;
        };
        constructor.getType = function (characterCount, unicode) {
            if (unicode) return characterCount > 45 ? KoreanMessageLengthType.LONG : KoreanMessageLengthType.SHORT;
            return characterCount > 90 ? KoreanMessageLengthType.LONG : KoreanMessageLengthType.SHORT;
        };
    }, {}, {});
    var SmsCountReportJs = function SmsCountReportJs() {
        SmsCountReportCommon.call(this);
    };
    SmsCountReportJs = stjs.extend(SmsCountReportJs, SmsCountReportCommon, [], function (constructor, prototype) {
        prototype.dataCodingReport = null;
        prototype.encodedText = null;
        prototype.getEncodedText = function () {
            return this.encodedText;
        };
        prototype.setEncodedText = function (encodedText) {
            this.encodedText = encodedText;
        };
        prototype.getDataCodingReport = function () {
            return this.dataCodingReport;
        };
        prototype.setDataCodingReport = function (dataCodingReport) {
            this.dataCodingReport = dataCodingReport;
        };
    }, {
        dataCodingReport: "DataCodingReport",
        encodedText: {name: "Array", arguments: [null]},
        koreanMessageLengthType: {name: "Enum", arguments: ["KoreanMessageLengthType"]}
    }, {});
    var DataCodingReport = function DataCodingReport() {
        this.nationalLanguageInfo = new NationalLanguageInfoJs();
    };
    DataCodingReport = stjs.extend(DataCodingReport, null, [], function (constructor, prototype) {
        prototype.text = null;
        prototype.dataCoding = 0;
        prototype.nationalLanguageInfo = null;
        prototype.getText = function () {
            return this.text;
        };
        prototype.setText = function (text) {
            this.text = text;
        };
        prototype.getDataCoding = function () {
            return this.dataCoding;
        };
        prototype.setDataCoding = function (dataCoding) {
            this.dataCoding = dataCoding;
        };
        prototype.getNationalLanguageInfo = function () {
            return this.nationalLanguageInfo;
        };
        prototype.setNationalLanguageInfo = function (nationalLanguageInfo) {
            this.nationalLanguageInfo = nationalLanguageInfo;
        };
    }, {nationalLanguageInfo: "NationalLanguageInfoJs"}, {});
    var UDHLengthCalculatorJs = function UDHLengthCalculatorJs() {
    };
    UDHLengthCalculatorJs = stjs.extend(UDHLengthCalculatorJs, null, [], function (constructor, prototype) {
        constructor.MAX_BYTES_PER_SMS = 140;
        constructor.NLI_UDH_LENGTH = 3;
        constructor.CONCATENATED_UDH_LENGTH = 5;
        constructor.GSM7_BITS_PER_CHARACTER = 7;
        constructor.UNICODE_BITS_PER_CHARACTER = 16;
        prototype.getMaxBytesCount = function (udhLength, is8BitPaked, maxBytesForSms) {
            return stjs.trunc(stjs.trunc(maxBytesForSms * 8 - udhLength * 8) / (is8BitPaked ? 8 : 7));
        };
        prototype.getMaxLengthInBytes = function (udhLength, is8BitPaked, isUnicode, maxBytesForSms) {
            var len = stjs.trunc(stjs.trunc(maxBytesForSms * 8 - udhLength * 8) / (is8BitPaked ? 8 : 7));
            if (isUnicode && this.isOdd(len)) len -= 1;
            return len;
        };
        prototype.isOdd = function (value) {
            return value % 2 != 0;
        };
        prototype.getMaxCharactersCount = function (udhLength, bitsPerCharacter, maxBytesForSms) {
            return stjs.trunc(stjs.trunc(maxBytesForSms * 8 - udhLength * 8) / bitsPerCharacter);
        };
        prototype.getUdh = function (scc) {
            var udhLengthReport = new UdhLengthReportJs();
            var characterCount = scc.getCharacterCount();
            if (characterCount == 0) return udhLengthReport;
            var udhContext = scc.getUdhContext();
            this.handleUdhFromContext(udhContext, udhLengthReport);
            this.handleUdhNli(udhLengthReport, udhContext, scc.getnInfo());
            var udhLenth = udhLengthReport.getTotalLength() == 0 ? 0 : udhLengthReport.getTotalLength() + 1;
            if (characterCount > this.getMaxCharactersCount(udhLenth, scc.getBitsPerCharacter(), scc.getMaxBytesForSms()) && (udhContext == null || !udhContext.isHasConcatenatedPart())) {
                udhLengthReport.setTotalLength(udhLengthReport.getTotalLength() + UDHLengthCalculatorJs.CONCATENATED_UDH_LENGTH);
                udhLengthReport.getUdhParts().push(UDHPartTypes.CONCATENATED_SHORT_MESSAGES_8BIT);
            }
            if (udhLengthReport.getTotalLength() > 0) udhLengthReport.setTotalLength(udhLengthReport.getTotalLength() + 1);
            return udhLengthReport;
        };
        prototype.handleUdhFromContext = function (udhContext, udhLengthReport) {
            if (udhContext != null) {
                udhLengthReport.setTotalLength(udhContext.getUdhLen() - 1);
            }
        };
        prototype.handleUdhNli = function (udhLengthReport, udhContext, nInfo) {
            if (udhContext != null && udhContext.isHasNliPart()) {
                return;
            }
            if (nInfo == null) return;
            var udhLength = udhLengthReport.getTotalLength();
            if (nInfo.getLockingShiftCharacterSet() != null) {
                udhLength += UDHLengthCalculatorJs.NLI_UDH_LENGTH;
                udhLengthReport.getUdhParts().push(UDHPartTypes.NATIONAL_LANGUAGE_LOCKING_SHIFT);
            }
            if (nInfo.getSingleShiftCharacterSet() != null) {
                udhLength += UDHLengthCalculatorJs.NLI_UDH_LENGTH;
                udhLengthReport.getUdhParts().push(UDHPartTypes.NATIONAL_LANGUAGE_SINGLE_SHIFT);
            }
            udhLengthReport.setTotalLength(udhLength);
        };
    }, {}, {});
    var CharacterSetUtilsJs = function CharacterSetUtilsJs() {
    };
    CharacterSetUtilsJs = stjs.extend(CharacterSetUtilsJs, null, [], function (constructor, prototype) {
        constructor.SINGLE_SHIFT_CHARACTER_SETS = {};
        constructor.LOCKING_SHIFT_CHARACTER_SETS = {};
        prototype.decodeUsingNli = function (bytes, nInfo) {
            return this.decode(bytes, nInfo.getLockingShiftCharacterSet(), nInfo.getSingleShiftCharacterSet());
        };
        prototype.decode = function (bytes, lockingShiftSet, singleShiftSet) {
            if (bytes == null || bytes.length == 0) return null;
            var lockingShift = this.getLockingShiftCharacterSet(lockingShiftSet);
            if (lockingShift == null) {
                lockingShift = this.getLockingShiftCharacterSet(LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT);
            }
            var singleShift = this.getSingleShiftCharacterSet(singleShiftSet);
            if (singleShift == null) {
                singleShift = this.getSingleShiftCharacterSet(SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT);
            }
            var decoded = new String();
            var escape = false;
            for (var i = 0; i < bytes.length; i++) {
                var bajt = bytes[i];
                if (bajt < 0) continue;
                if (lockingShift.getEscapeCharacter() == bajt) {
                    escape = true;
                    continue;
                }
                if (escape) {
                    var character = singleShift.decode(bajt);
                    if (character != null) decoded += character;
                    escape = false;
                    continue;
                }
                var character = lockingShift.decode(bajt);
                if (character != null) decoded += character;
            }
            return decoded;
        };
        prototype.encodeUsingNLI = function (text, nationalLanguageInfo) {
            return this.encode(text, nationalLanguageInfo.getLockingShiftCharacterSet(), nationalLanguageInfo.getSingleShiftCharacterSet());
        };
        prototype.encode = function (text, lockingShiftSet, singleShiftSet) {
            if (text == null) return new Array();
            var lockingShift = this.getLockingShiftCharacterSet(lockingShiftSet);
            if (lockingShift == null) {
                lockingShift = this.getLockingShiftCharacterSet(LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT);
            }
            var singleShift = this.getSingleShiftCharacterSet(singleShiftSet);
            if (singleShift == null) {
                singleShift = this.getSingleShiftCharacterSet(SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT);
            }
            var encoded = new Array(text.length);
            var index = 0;
            for (var i = 0; i < text.length; i++) {
                var c = text.charAt(i);
                var encodedChar = lockingShift.encode(c);
                if (encodedChar >= 0) {
                    encoded[index] = stjs.trunc(encodedChar);
                    index++;
                    continue;
                }
                encodedChar = singleShift.encode(c);
                if (encodedChar > 0) {
                    encoded[index] = lockingShift.getEscapeCharacter();
                    index++;
                    encoded[index] = stjs.trunc(encodedChar);
                    index++;
                    continue;
                }
                encoded[index] = CharacterSet.REPLACE_CHARACTER;
                index++;
            }
            return encoded;
        };
        prototype.encodeToUnicode = function (text) {
            var result = new Array();
            for (var i = 0; i < text.length; i++) {
                var codePoint = text.codePointAt(i);
                var second = stjs.trunc(codePoint);
                codePoint >>= 8;
                var first = stjs.trunc(codePoint);
                result.push(first);
                result.push(second);
            }
            return result;
        };
        /**
         *
         *  @param text
         *             -
         *  @param lockingShiftCharacterSet
         *             - if null returns false
         *  @param singleShiftCharacterSet
         *             -if null returns false
         *  @return
         */prototype.canRepresent = function (text, lockingShiftCharacterSet, singleShiftCharacterSet) {
            if (lockingShiftCharacterSet == null && singleShiftCharacterSet == null) return false;
            var lockingShift = this.getLockingShiftCharacterSet(lockingShiftCharacterSet);
            var singleShift = this.getSingleShiftCharacterSet(singleShiftCharacterSet);
            for (var i = 0; i < text.length; i++) {
                var c = text.charAt(i);
                if (lockingShift != null && lockingShift.canRepresentCharacter(c)) continue;
                if (singleShift != null && singleShift.canRepresentCharacter(c)) continue;
                return false;
            }
            return true;
        };
        prototype.getSingleShiftCharacterSet = function (characterSet) {
            if (characterSet == null) return null;
            return CharacterSetUtilsJs.getSingleShiftRemaps()[characterSet.toString()];
        };
        prototype.getLockingShiftCharacterSet = function (lockingShiftCharacterSet) {
            if (lockingShiftCharacterSet == null) return null;
            return CharacterSetUtilsJs.getLockingShiftRemaps()[lockingShiftCharacterSet.toString()];
        };
        constructor.getSingleShiftRemaps = function () {
            return CharacterSetUtilsJs.SINGLE_SHIFT_CHARACTER_SETS;
        };
        constructor.getLockingShiftRemaps = function () {
            return CharacterSetUtilsJs.LOCKING_SHIFT_CHARACTER_SETS;
        };
        prototype.getLockingShiftCharacterSetByPduIdentificator = function (value) {
            var key = this.findByUdhIdentificator(value, CharacterSetUtilsJs.LOCKING_SHIFT_CHARACTER_SETS);
            if (key == null) return null;
            return LockingShiftCharacterSetJs.valueOf(key);
        };
        prototype.getSingleShiftCharacterSetByPduIdentificator = function (value) {
            var key = this.findByUdhIdentificator(value, CharacterSetUtilsJs.SINGLE_SHIFT_CHARACTER_SETS);
            if (key == null) return null;
            return SingleShiftCharacterSetJs.valueOf(key);
        };
        prototype.findByUdhIdentificator = function (value, remaps) {
            for (var key in remaps) {
                var characterSet = remaps[key];
                if (value == characterSet.getUdhIdentifier()) return key;
            }
            return null;
        };
    }, {
        SINGLE_SHIFT_CHARACTER_SETS: {name: "Map", arguments: [null, "CharacterSet"]},
        LOCKING_SHIFT_CHARACTER_SETS: {name: "Map", arguments: [null, "CharacterSet"]}
    }, {});
    (function () {
        CharacterSetUtilsJs.SINGLE_SHIFT_CHARACTER_SETS[SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT.name()] = new BasicSingleShiftCharacterSet();
        CharacterSetUtilsJs.SINGLE_SHIFT_CHARACTER_SETS[SingleShiftCharacterSetJs.TURKISH_SINGLE_SHIFT.name()] = new TurkishSingleShiftCharacterSet();
        CharacterSetUtilsJs.SINGLE_SHIFT_CHARACTER_SETS[SingleShiftCharacterSetJs.PORTUGUESE_SINGLE_SHIFT.name()] = new PortugueseSingleShiftCharacterSet();
        CharacterSetUtilsJs.SINGLE_SHIFT_CHARACTER_SETS[SingleShiftCharacterSetJs.SPANISH_SINGLE_SHIFT.name()] = new SpanishSingleShiftCharacterSet();
        CharacterSetUtilsJs.LOCKING_SHIFT_CHARACTER_SETS[LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT.name()] = new BasicLockingShiftCharacterSet();
        CharacterSetUtilsJs.LOCKING_SHIFT_CHARACTER_SETS[LockingShiftCharacterSetJs.TURKISH_LOCKING_SHIFT.name()] = new TurkishLockingShiftCharacterSet();
        CharacterSetUtilsJs.LOCKING_SHIFT_CHARACTER_SETS[LockingShiftCharacterSetJs.PORTUGUESE_LOCKING_SHIFT.name()] = new PortugueseLockingShiftCharacterSet();
    })();
    var SmsCountContext = function SmsCountContext() {
        this.maxBytesForSms = UDHLengthCalculatorJs.MAX_BYTES_PER_SMS;
    };
    SmsCountContext = stjs.extend(SmsCountContext, null, [], function (constructor, prototype) {
        /**
         *  Total character count without UDH
         */prototype.characterCount = 0;
        /**
         *
         */prototype.bitsPerCharacter = 0;
        /**
         *  Used for custom messages length
         */prototype.maxBytesForSms = 0;
        /**
         *  Provided UDH info
         */prototype.udhContext = null;
        prototype.nInfo = null;
        prototype.unicode = false;
        prototype.binJs = null;
        prototype.gsm7Encoded = false;
        prototype.eightBit = false;
        prototype.getCharacterCount = function () {
            return this.characterCount;
        };
        prototype.setCharacterCount = function (characterCount) {
            this.characterCount = characterCount;
        };
        prototype.getnInfo = function () {
            return this.nInfo;
        };
        prototype.setnInfo = function (nInfo) {
            this.nInfo = nInfo;
        };
        prototype.getMaxBytesForSms = function () {
            return this.maxBytesForSms;
        };
        prototype.setMaxBytesForSms = function (maxBytesForSms) {
            this.maxBytesForSms = maxBytesForSms;
        };
        prototype.getBitsPerCharacter = function () {
            return this.bitsPerCharacter;
        };
        prototype.setBitsPerCharacter = function (bitsPerCharacter) {
            this.bitsPerCharacter = bitsPerCharacter;
        };
        prototype.getUdhContext = function () {
            return this.udhContext;
        };
        prototype.setUdhContext = function (udhContext) {
            this.udhContext = udhContext;
        };
        prototype.isUnicode = function () {
            return this.unicode;
        };
        prototype.setUnicode = function (unicode) {
            this.unicode = unicode;
        };
        prototype.getBinJs = function () {
            return this.binJs;
        };
        prototype.setBinJs = function (binJs) {
            this.binJs = binJs;
        };
        prototype.isGsm7Encoded = function () {
            return this.gsm7Encoded;
        };
        prototype.setGsm7Encoded = function (gsm7Encoded) {
            this.gsm7Encoded = gsm7Encoded;
        };
        prototype.isEightBit = function () {
            return this.eightBit;
        };
        prototype.setEightBit = function (eightBit) {
            this.eightBit = eightBit;
        };
    }, {udhContext: "UdhContext", nInfo: "NationalLanguageInfoJs", binJs: {name: "Array", arguments: [null]}}, {});
    var DataCodingCalculatorJs = function DataCodingCalculatorJs() {
        this.characterSetUtils = new CharacterSetUtilsJs();
    };
    DataCodingCalculatorJs = stjs.extend(DataCodingCalculatorJs, null, [], function (constructor, prototype) {
        constructor.DATA_CODING_GSM7 = 0;
        constructor.DATA_CODING_UNICODE = 8;
        prototype.characterSetUtils = null;
        prototype.calculateUsingGSM7Basic = function (text) {
            return this.calculateUsingGSM7BasicWithUnicodeFlag(text, true);
        };
        prototype.calculateUsingGSM7BasicWithUnicodeFlag = function (text, ignoreUnicodeChars) {
            var dataCodingResult = this.createDataCodingResult(text);
            if (this.canRepresent(dataCodingResult, LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT, SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT)) {
                dataCodingResult.getNationalLanguageInfo().setLockingShiftCharacterSet(LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT);
                dataCodingResult.getNationalLanguageInfo().setSingleShiftCharacterSet(SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT);
                dataCodingResult.setDataCoding(DataCodingCalculatorJs.DATA_CODING_GSM7);
            } else if (ignoreUnicodeChars) {
                dataCodingResult.setDataCoding(DataCodingCalculatorJs.DATA_CODING_GSM7);
            } else {
                dataCodingResult.setDataCoding(DataCodingCalculatorJs.DATA_CODING_UNICODE);
                dataCodingResult.getNationalLanguageInfo().setLockingShiftCharacterSet(null);
                dataCodingResult.getNationalLanguageInfo().setSingleShiftCharacterSet(null);
            }
            return dataCodingResult;
        };
        prototype.calculateUsingNLI = function (text, nInfo, ignoreUnicodeChars) {
            var dataCodingResult = this.createDataCodingResult(text);
            if (this.canRepresent(dataCodingResult, nInfo.getLockingShiftCharacterSet(), nInfo.getSingleShiftCharacterSet())) {
                dataCodingResult.getNationalLanguageInfo().setLockingShiftCharacterSet(nInfo.getLockingShiftCharacterSet());
                dataCodingResult.getNationalLanguageInfo().setSingleShiftCharacterSet(nInfo.getSingleShiftCharacterSet());
                dataCodingResult.setDataCoding(DataCodingCalculatorJs.DATA_CODING_GSM7);
                return dataCodingResult;
            } else {
                var dataCodingReport = this.calculateUsingGSM7BasicWithUnicodeFlag(text, ignoreUnicodeChars);
                if (ignoreUnicodeChars) {
                    dataCodingReport.getNationalLanguageInfo().setLockingShiftCharacterSet(nInfo.getLockingShiftCharacterSet());
                    dataCodingReport.getNationalLanguageInfo().setSingleShiftCharacterSet(nInfo.getSingleShiftCharacterSet());
                }
                return dataCodingReport;
            }
        };
        prototype.findBestMatch = function (text) {
            return this.findBestMatchWithBasicNliFlag(text, false);
        };
        prototype.findBestMatchWithBasicNliFlag = function (text, useOnlyBasicNli) {
            var result = this.createDataCodingResult(text);
            this.findCharacterSet(result, useOnlyBasicNli);
            return result;
        };
        prototype.findCharacterSet = function (result, useOnlyBasicNli) {
            if (this.canRepresent(result, LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT, SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT)) return;
            if (!useOnlyBasicNli) {
                var lockingShiftCharacterSets = CharacterSetUtilsJs.getLockingShiftRemaps();
                for (var string in lockingShiftCharacterSets) {
                    if (this.canRepresent(result, LockingShiftCharacterSetJs.valueOf(string), SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT)) return;
                }
                for (var lockingShift in lockingShiftCharacterSets) {
                    for (var singleShift in CharacterSetUtilsJs.getSingleShiftRemaps()) {
                        if (this.canRepresent(result, LockingShiftCharacterSetJs.valueOf(lockingShift), SingleShiftCharacterSetJs.valueOf(singleShift))) return;
                    }
                }
            }
            result.setDataCoding(DataCodingCalculatorJs.DATA_CODING_UNICODE);
        };
        prototype.canRepresent = function (result, lockingShiftCharacterSet, singleShiftCharacterSet) {
            if (this.characterSetUtils.canRepresent(result.getText(), lockingShiftCharacterSet, singleShiftCharacterSet)) {
                result.getNationalLanguageInfo().setLockingShiftCharacterSet(lockingShiftCharacterSet);
                result.getNationalLanguageInfo().setSingleShiftCharacterSet(singleShiftCharacterSet);
                result.setDataCoding(DataCodingCalculatorJs.DATA_CODING_GSM7);
                return true;
            }
            return false;
        };
        prototype.createDataCodingResult = function (text) {
            var result = new DataCodingReport();
            result.setText(text);
            return result;
        };
    }, {characterSetUtils: "CharacterSetUtilsJs"}, {});
    /**
     *  mapping of characters according to GSM 7 bit charset. There is a default
     *  mapper which maps all possible ascii characters to GSM 7 bit encoding, and
     *  then there are extension, for example for greek, where greek characters are
     *  mapped to their ascii counterparts
     *
     *  @author draganbencic
     */var AbstractCharMapper = function AbstractCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet, mappableChars) {
        this.mappableChars = mappableChars;
        this.lockingShiftCharacterSet = CharacterSetUtilsJs.getLockingShiftRemaps()[lockingShiftCharacterSet.toString()];
        this.singleShiftCharacterSet = CharacterSetUtilsJs.getSingleShiftRemaps()[singleShiftCharacterSet.toString()];
    };
    AbstractCharMapper = stjs.extend(AbstractCharMapper, null, [CharRemapperJs], function (constructor, prototype) {
        constructor.REPLACEMENT_CHAR = ".";
        constructor.chars = "„“‘’‚‛“”„‟′″`´῾`᾽᾿׳״΄";
        constructor.replaceChars = "\"\"'','\"\"\"\"'\"''''''\"''";
        prototype.lockingShiftCharacterSet = null;
        prototype.singleShiftCharacterSet = null;
        prototype.mappableChars = null;
        prototype.cleanup = function (text) {
            for (var i = 0; i < AbstractCharMapper.chars.length; i++) {
                text = text.replace(AbstractCharMapper.chars.charAt(i), AbstractCharMapper.replaceChars.charAt(i));
            }
            return text.replace("\r\n", "\n").replace("\n\r", "\n").replace('\xa0', ' ');
        };
        constructor.combine = function (ret, first, second) {
            for (var key in first) ret[key] = first[key];
            for (var key in second) ret[key] = second[key];
        };
        /**
         *  {@inheritDoc}
         */prototype.map = function (text) {
            return this.mapInternal(text, true);
        };
        /**
         *  {@inheritDoc}
         */prototype.mapWithNoCleanup = function (text) {
            return this.mapInternal(text, false);
        };
        prototype.mapInternal = function (text, cleanupText) {
            if (text == null) {
                text = "";
            }
            var clean = text;
            if (cleanupText) clean = this.cleanup(text);
            var resume = new CharRemapResumeJs();
            resume.remappedText = "";
            for (var i = 0; i < clean.length; i++) {
                var mcc = this.mapSingleCharacter(clean, i);
                if (!mcc.isMapped) {
                    resume.requiresUnicode = true;
                    resume.remappedText += AbstractCharMapper.REPLACEMENT_CHAR;
                    resume.bytesCount += 1;
                } else {
                    resume.remappedText += mcc.mappedIntoChars;
                    resume.bytesCount += mcc.bytesCount;
                }
            }
            if (resume.requiresUnicode) {
                resume.bytesCountNoUnicode = resume.bytesCount;
                resume.bytesCount = clean.length * 2;
                resume.remappedTextNoUnicode = resume.remappedText;
                resume.remappedText = clean;
            } else {
                resume.bytesCountNoUnicode = resume.bytesCount;
                resume.remappedTextNoUnicode = resume.remappedText;
            }
            return resume;
        };
        /**
         *  invokes default behaviour
         */prototype.mapSingleCharacter = function (originalText, charPosition) {
            return this.mapCharFromMappings(originalText.charAt(charPosition), this.mappableChars);
        };
        prototype.mapCharFromMappings = function (unicodeChar, mapedChars) {
            var str = String.valueOf(unicodeChar);
            var gsm7ByteLen = this.getGsm7ByteLen(unicodeChar);
            if (gsm7ByteLen != 0) {
                return new MappedCharAndBytesCount(true, str, gsm7ByteLen);
            }
            var mappedChar = mapedChars[str];
            if (mappedChar != null) {
                var length = 0;
                for (var i = 0; i < mappedChar.length; i++) {
                    length += this.getGsm7ByteLen(mappedChar.charAt(i));
                }
                return new MappedCharAndBytesCount(true, mappedChar, length);
            }
            return new MappedCharAndBytesCount(false, str, 2);
        };
        /**
         *  @return Returns number of bytes required to represt the passed character
         *  in GSM7 encoding. Or zero is the character is not representable
         */prototype.getGsm7ByteLen = function (c) {
            if (this.lockingShiftCharacterSet.canRepresentCharacter(c)) return 1;
            if (this.singleShiftCharacterSet.canRepresentCharacter(c)) return 2;
            return 0;
        };
    }, {
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    var SmsCountCalculatorJs = function SmsCountCalculatorJs() {
        this.dataCodingCalculator = new DataCodingCalculatorJs();
        this.udhLengthCalculator = new UDHLengthCalculatorJs();
        this.characterSetUtils = new CharacterSetUtilsJs();
    };
    SmsCountCalculatorJs = stjs.extend(SmsCountCalculatorJs, null, [], function (constructor, prototype) {
        constructor.GSM_CHARSET_ESCAPE = 27;
        prototype.dataCodingCalculator = null;
        prototype.udhLengthCalculator = null;
        prototype.characterSetUtils = null;
        /**
         *  Calculates dataCoding and NLI configuration for text
         *
         *  @param text
         *  @return
         *
         *  @see #calculateOptimalWithBasicNliFlag(String, boolean)
         */prototype.calculateOptimal = function (text) {
            return this.calculateOptimalWithBasicNliFlag(text, false);
        };
        /**
         *  Calculates dataCoding and NLI configuration for text
         *
         *  @param text
         *  @param useOnlyBasicNli
         *             if set to <code>true</code>, only Basic NLI (
         *             {@link LockingShiftCharacterSetJs#BASIC_LOCKING_SHIFT} and
         *             {@link SingleShiftCharacterSetJs#BASIC_SINGLE_SHIFT} ) will be
         *             used.
         *             <p>
         *             For example, when you send text=ç and
         *             useOnlyBasicNli=false, the resulting dataCoding will be {@link DataCodingCalculatorJs#DATA_CODING_GSM7}, but
         *             when you send text=ç and useOnlyBasicNli=true, the resulting
         *             dataCoding will be {@link DataCodingCalculatorJs#DATA_CODING_UNICODE}.
         *  @return
         */prototype.calculateOptimalWithBasicNliFlag = function (text, useOnlyBasicNli) {
            var dataCodingReport = this.dataCodingCalculator.findBestMatchWithBasicNliFlag(text, useOnlyBasicNli);
            var ninfo = dataCodingReport.getNationalLanguageInfo();
            if (ninfo != null && ninfo.getLockingShiftCharacterSet() == LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT) {
                ninfo.setLockingShiftCharacterSet(null);
            }
            if (ninfo != null && ninfo.getSingleShiftCharacterSet() == SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT) {
                ninfo.setSingleShiftCharacterSet(null);
            }
            return this.calculateInternal(dataCodingReport);
        };
        prototype.calculate = function (text, lockingShiftSet, singleShiftSet) {
            return this.calculateWithIgnoreUnicodeFlag(text, lockingShiftSet, singleShiftSet, true);
        };
        /**
         *
         *  @param text
         *  @param lockingShiftSet
         *             if null using default
         *  @param singleShiftSet
         *             if null using default
         *  @param ignoreUnicodeChars if set to false, unicode chars will be replaced with {@link AbstractCharacterSet#REPLACE_CHARACTER}
         *  @return
         */prototype.calculateWithIgnoreUnicodeFlag = function (text, lockingShiftSet, singleShiftSet, ignoreUnicodeChars) {
            var nInfo = new NationalLanguageInfoJs();
            nInfo.setLockingShiftCharacterSet(lockingShiftSet);
            nInfo.setSingleShiftCharacterSet(singleShiftSet);
            return this.calculateUsingNLIWithIgnoreUnicodeFlag(text, nInfo, ignoreUnicodeChars);
        };
        prototype.calculateUsingNLI = function (text, nInfo) {
            return this.calculateUsingNLIWithIgnoreUnicodeFlag(text, nInfo, true);
        };
        /**
         *
         *  @param text
         *  @param nInfo
         *             if null using default
         *
         *             Notice: Data coding is calculated, based on NLI - if the given
         *             NLI can represent the whole text, data coding is gsm7,
         *             otherwise is unicode if flag ignoreUnicodeChars is set to false.
         *
         *  @return
         */prototype.calculateUsingNLIWithIgnoreUnicodeFlag = function (text, nInfo, ignoreUnicodeChars) {
            if (nInfo == null) {
                nInfo = new NationalLanguageInfoJs();
            }
            if (nInfo.getLockingShiftCharacterSet() == null) {
                nInfo.setLockingShiftCharacterSet(LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT);
            }
            if (nInfo.getSingleShiftCharacterSet() == null) {
                nInfo.setSingleShiftCharacterSet(SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT);
            }
            var dataCodingReport = this.dataCodingCalculator.calculateUsingNLI(text, nInfo, ignoreUnicodeChars);
            if (dataCodingReport.getNationalLanguageInfo() != null) {
                if (LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT == dataCodingReport.getNationalLanguageInfo().getLockingShiftCharacterSet()) {
                    dataCodingReport.getNationalLanguageInfo().setLockingShiftCharacterSet(null);
                }
                if (SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT == dataCodingReport.getNationalLanguageInfo().getSingleShiftCharacterSet()) {
                    dataCodingReport.getNationalLanguageInfo().setSingleShiftCharacterSet(null);
                }
            }
            return this.calculateInternal(dataCodingReport);
        };
        prototype.calculateInternal = function (dataCodingReport) {
            var smsCountReport = new SmsCountReportJs();
            smsCountReport.setDataCodingReport(dataCodingReport);
            var unicode = this.isUnicode(dataCodingReport.getDataCoding());
            var bin = this.convertTextToJsByteArray(dataCodingReport.getText(), unicode, dataCodingReport.getNationalLanguageInfo());
            smsCountReport.setEncodedText(bin);
            var scc = new SmsCountContext();
            scc.setBinJs(bin);
            scc.setBitsPerCharacter(unicode ? UDHLengthCalculatorJs.UNICODE_BITS_PER_CHARACTER : UDHLengthCalculatorJs.GSM7_BITS_PER_CHARACTER);
            scc.setCharacterCount(unicode ? stjs.trunc(bin.length / 2) : bin.length);
            scc.setUnicode(unicode);
            scc.setEightBit(unicode);
            scc.setGsm7Encoded(!unicode);
            scc.setnInfo(dataCodingReport.getNationalLanguageInfo());
            this.calculateAll(scc, smsCountReport);
            return smsCountReport;
        };
        prototype.convertTextToJsByteArray = function (text, unicode, nationalLanguageInfo) {
            if (text == null || text.length == 0) return new Array();
            if (unicode) return this.characterSetUtils.encodeToUnicode(text);
            return this.characterSetUtils.encode(text, nationalLanguageInfo.getLockingShiftCharacterSet(), nationalLanguageInfo.getSingleShiftCharacterSet());
        };
        prototype.calculateAll = function (scc, result) {
            var udhLength = this.udhLengthCalculator.getUdh(scc).getTotalLength();
            var maxBytesCount = this.udhLengthCalculator.getMaxLengthInBytes(udhLength, scc.isEightBit(), scc.isUnicode(), scc.getMaxBytesForSms());
            if (maxBytesCount <= 0) return;
            var messageCount = 1;
            var lastMessageBytesLengthCounter = 0;
            var esc = false;
            var bin = scc.getBinJs() != null ? scc.getBinJs() : new Array();
            for (var i = 0; i < bin.length; i++) {
                var encodedLength = 1;
                if (scc.isGsm7Encoded()) {
                    if (bin[i].byteValue() == SmsCountCalculatorJs.GSM_CHARSET_ESCAPE) {
                        esc = true;
                        continue;
                    } else if (esc) {
                        encodedLength = 2;
                        esc = false;
                    }
                }
                if (lastMessageBytesLengthCounter + encodedLength > maxBytesCount) {
                    lastMessageBytesLengthCounter = 0;
                    messageCount++;
                }
                lastMessageBytesLengthCounter += encodedLength;
            }
            if (scc.isUnicode()) lastMessageBytesLengthCounter = stjs.trunc(lastMessageBytesLengthCounter / 2);
            var maxCharCount = this.udhLengthCalculator.getMaxCharactersCount(udhLength, scc.getBitsPerCharacter(), scc.getMaxBytesForSms());
            var remainingCharacterCount = maxCharCount - lastMessageBytesLengthCounter;
            result.setRemaingCharacterCount(remainingCharacterCount);
            result.setChararcterCount(lastMessageBytesLengthCounter);
            result.setMaxChararcterCount(maxCharCount);
            result.setMessageCount(messageCount);
            result.setUdhLength(udhLength);
            result.setKoreanMessageLengthType(KoreanMessageLengthTypeUtils.getType(scc.getCharacterCount(), scc.isUnicode()));
            var totalLengthInBits = this.calculateTotalLengthInBits(scc.getBitsPerCharacter(), udhLength, maxCharCount, messageCount, remainingCharacterCount);
            result.setTotalLengthInBits(totalLengthInBits);
        };
        prototype.calculateTotalLengthInBits = function (bitsPerCharacter, udhLength, maxCharacterCountForSms, messageCount, remainingCharacterCount) {
            var fullMessagesSize = maxCharacterCountForSms * (messageCount - 1) * bitsPerCharacter;
            var currentMessageSize = (maxCharacterCountForSms - remainingCharacterCount) * bitsPerCharacter;
            var totalLengthInBits = messageCount * udhLength * 8 + fullMessagesSize + currentMessageSize;
            return totalLengthInBits;
        };
        prototype.isUnicode = function (dataCoding) {
            return (dataCoding & 4) != 0 || (dataCoding & 8) != 0;
        };
    }, {
        dataCodingCalculator: "DataCodingCalculatorJs",
        udhLengthCalculator: "UDHLengthCalculatorJs",
        characterSetUtils: "CharacterSetUtilsJs"
    }, {});
    /**
     *  Maps PortugueseCharMapper charset
     */var _PortugueseCharMapper = function PortugueseCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        AbstractCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet, _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS);
    };
    _PortugueseCharMapper = stjs.extend(_PortugueseCharMapper, AbstractCharMapper, [], function (constructor, prototype) {
        constructor.MAPPABLE_PORTUGUESE_CHARS = {};
    }, {
        MAPPABLE_PORTUGUESE_CHARS: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    (function () {
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xc1"] = "A";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xc3"] = "A";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xc0"] = "A";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xc2"] = "A";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["Ā"] = "A";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xe1"] = "a";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xe3"] = "a";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xe0"] = "a";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xe2"] = "a";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["ā"] = "a";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xca"] = "E";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xea"] = "e";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xcd"] = "I";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xed"] = "i";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xd3"] = "O";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xd4"] = "O";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xd5"] = "O";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xf3"] = "o";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xf4"] = "o";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xf5"] = "o";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xda"] = "U";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xfa"] = "u";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xc7"] = "C";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xe7"] = "c";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xb0"] = "o";
        _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS["\xba"] = "o";
    })();
    /**
     *  class that maps default latin characters to GSM7 default alfabet standard
     */var _Latin1CharMapper = function Latin1CharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        AbstractCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet, _Latin1CharMapper.MAPPABLE_LATIN_CHARS);
    };
    _Latin1CharMapper = stjs.extend(_Latin1CharMapper, AbstractCharMapper, [], function (constructor, prototype) {
        /**
         *  chars that are mappable to gsm 7 default alfabet. Following charracters
         *  have the same code as in Ascii 32 to 35 (space, !, ", #) 37 ti 63
         *  (numbers and %&- etc) 65 to 90 (capital letters) 97 to 122 (lower case
         *  letters) so we dont check thees ranges
         */constructor.MAPPABLE_LATIN_CHARS = {};
    }, {
        MAPPABLE_LATIN_CHARS: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    (function () {
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xc3"] = "A";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xcb"] = "E";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xd9"] = "U";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xd0"] = "D";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xd3"] = "O";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xc8"] = "E";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xce"] = "I";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\x80"] = "€";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xfb"] = "u";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xff"] = "y";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xea"] = "e";
        _Latin1CharMapper.MAPPABLE_LATIN_CHARS["\xef"] = "i";
    })();
    /**
     *  Maps Turkish charset
     */var _TurkishCharMapper = function TurkishCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        AbstractCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet, _TurkishCharMapper.MAPPABLE_TURKISH_CHARS);
    };
    _TurkishCharMapper = stjs.extend(_TurkishCharMapper, AbstractCharMapper, [], function (constructor, prototype) {
        constructor.MAPPABLE_TURKISH_CHARS = {};
    }, {
        MAPPABLE_TURKISH_CHARS: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    (function () {
        _TurkishCharMapper.MAPPABLE_TURKISH_CHARS["\xe7"] = "c";
        _TurkishCharMapper.MAPPABLE_TURKISH_CHARS["Ğ"] = "G";
        _TurkishCharMapper.MAPPABLE_TURKISH_CHARS["ğ"] = "g";
        _TurkishCharMapper.MAPPABLE_TURKISH_CHARS["İ"] = "I";
        _TurkishCharMapper.MAPPABLE_TURKISH_CHARS["ı"] = "i";
        _TurkishCharMapper.MAPPABLE_TURKISH_CHARS["Ş"] = "S";
        _TurkishCharMapper.MAPPABLE_TURKISH_CHARS["ş"] = "s";
    })();
    var _CentralEuropeanCharMapper = function CentralEuropeanCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        AbstractCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet, _CentralEuropeanCharMapper.MAPPABLE_CHARS);
    };
    _CentralEuropeanCharMapper = stjs.extend(_CentralEuropeanCharMapper, AbstractCharMapper, [], function (constructor, prototype) {
        /**
         *  central european chars that are rappresented with appropriate latin 1
         *  codings thus con be part of long messages (160 chars)
         *  http://orwell.ru/test/CP/_?cp1250
         */constructor.MAPPABLE_CEC_CHARS = {};
        constructor.MAPPABLE_CHARS = {};
    }, {
        MAPPABLE_CEC_CHARS: {name: "Map", arguments: [null, null]},
        MAPPABLE_CHARS: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    (function () {
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Š"] = "S";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Š"] = "S";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ś"] = "S";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ť"] = "T";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ž"] = "Z";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ź"] = "Z";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["š"] = "s";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ś"] = "s";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ť"] = "t";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ž"] = "z";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ź"] = "z";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ł"] = "L";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ł"] = "l";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ą"] = "A";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ş"] = "S";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ż"] = "Z";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ą"] = "a";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ş"] = "s";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ľ"] = "L";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ľ"] = "l";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ż"] = "z";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ŕ"] = "R";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xc1"] = "A";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xc2"] = "A";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ă"] = "A";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ĺ"] = "L";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ć"] = "C";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Č"] = "C";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ę"] = "E";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xcb"] = "E";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ě"] = "E";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xcd"] = "I";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xce"] = "I";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ď"] = "D";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Đ"] = "D";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ń"] = "N";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ň"] = "N";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xd3"] = "O";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xd4"] = "O";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ő"] = "O";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ř"] = "R";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ů"] = "U";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xda"] = "U";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ű"] = "U";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xdd"] = "Y";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ţ"] = "T";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ŕ"] = "r";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xe1"] = "a";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xe2"] = "a";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ă"] = "a";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ĺ"] = "l";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ć"] = "c";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xe7"] = "c";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["č"] = "c";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ę"] = "e";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xeb"] = "e";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ě"] = "e";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xed"] = "i";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xee"] = "i";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ď"] = "d";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["đ"] = "d";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ń"] = "n";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ň"] = "n";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xf3"] = "o";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xf4"] = "o";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ő"] = "o";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ř"] = "r";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ů"] = "u";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xfa"] = "u";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ű"] = "u";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["\xfd"] = "y";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ţ"] = "t";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ǌ"] = "NJ";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ǋ"] = "NJ";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ǌ"] = "nj";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ǉ"] = "LJ";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ǈ"] = "Lj";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ǉ"] = "lj";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["Ǆ"] = "DZ";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ǅ"] = "Dz";
        _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS["ǆ"] = "dz";
        AbstractCharMapper.combine(_CentralEuropeanCharMapper.MAPPABLE_CHARS, _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS, _Latin1CharMapper.MAPPABLE_LATIN_CHARS);
    })();
    /**
     *  mapps greek charset
     *
     *  @author draganbencic
     */var _CyrillicCharMapper = function CyrillicCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        AbstractCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet, _CyrillicCharMapper.MAPPABLE_CHARS);
    };
    _CyrillicCharMapper = stjs.extend(_CyrillicCharMapper, AbstractCharMapper, [], function (constructor, prototype) {
        /**
         *  greek chars that are rappresented with appropriate codes in range 0 to
         *  127 which means that are mappable to gsm 7 standard codings thus con be
         *  part of long messages (160 chars)
         */constructor.MAPPABLE_CYRILLIC_CHARS = {};
        constructor.MAPPABLE_CHARS = {};
    }, {
        MAPPABLE_CYRILLIC_CHARS: {name: "Map", arguments: [null, null]},
        MAPPABLE_CHARS: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    (function () {
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["а"] = "a";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["А"] = "A";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Б"] = "B";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["б"] = "b";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["В"] = "V";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["в"] = "v";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Г"] = "G";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["г"] = "g";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Д"] = "D";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["д"] = "d";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Е"] = "E";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["е"] = "e";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ё"] = "E";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ё"] = "e";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ж"] = "ZH";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ж"] = "zh";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["З"] = "Z";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["з"] = "z";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["И"] = "I";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["и"] = "i";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Й"] = "J";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["й"] = "j";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["К"] = "K";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["к"] = "k";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Л"] = "L";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["л"] = "l";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["М"] = "M";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["м"] = "m";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Н"] = "N";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["н"] = "n";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["О"] = "O";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["о"] = "o";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["П"] = "P";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["п"] = "p";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Р"] = "R";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["р"] = "r";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["С"] = "S";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["с"] = "s";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Т"] = "T";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["т"] = "t";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["У"] = "U";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["у"] = "u";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ф"] = "F";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ф"] = "f";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Х"] = "KH";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["х"] = "kh";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ц"] = "TS";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ц"] = "ts";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ч"] = "CH";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ч"] = "ch";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ш"] = "SH";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ш"] = "sh";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Щ"] = "SHCH";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["щ"] = "shch";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ъ"] = "\"";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ъ"] = "\"";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ы"] = "Y";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ы"] = "y";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ь"] = "'";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ь"] = "'";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Э"] = "E";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["э"] = "e";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ю"] = "YU";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ю"] = "yu";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Я"] = "YA";
        _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["я"] = "ya";
        AbstractCharMapper.combine(_CyrillicCharMapper.MAPPABLE_CHARS, _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS, _Latin1CharMapper.MAPPABLE_LATIN_CHARS);
    })();
    /**
     *  Maps  Serbian cyrillic charset
     */var _SerbianCyrillicCharMapper = function SerbianCyrillicCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        AbstractCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet, _SerbianCyrillicCharMapper.MAPPABLE_CHARS);
    };
    _SerbianCyrillicCharMapper = stjs.extend(_SerbianCyrillicCharMapper, AbstractCharMapper, [], function (constructor, prototype) {
        constructor.MAPPABLE_CYRILLIC_CHARS = {};
        constructor.MAPPABLE_CHARS = {};
    }, {
        MAPPABLE_CYRILLIC_CHARS: {name: "Map", arguments: [null, null]},
        MAPPABLE_CHARS: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    (function () {
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["а"] = "a";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["А"] = "A";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Б"] = "B";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["б"] = "b";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["В"] = "V";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["в"] = "v";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Г"] = "G";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["г"] = "g";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Д"] = "D";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["д"] = "d";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ђ"] = "DJ";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ђ"] = "dj";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Е"] = "E";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["е"] = "e";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ё"] = "E";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ё"] = "e";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ж"] = "Z";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ж"] = "z";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["З"] = "Z";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["з"] = "z";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["И"] = "I";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["и"] = "i";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ј"] = "J";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ј"] = "j";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["К"] = "K";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["к"] = "k";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Л"] = "L";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["л"] = "l";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Љ"] = "LJ";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["љ"] = "lj";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["М"] = "M";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["м"] = "m";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Н"] = "N";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["н"] = "n";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Њ"] = "NJ";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["њ"] = "nj";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["О"] = "O";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["о"] = "o";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["П"] = "P";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["п"] = "p";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Р"] = "R";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["р"] = "r";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["С"] = "S";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["с"] = "s";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Т"] = "T";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["т"] = "t";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ћ"] = "C";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ћ"] = "c";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["У"] = "U";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["у"] = "u";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ф"] = "F";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ф"] = "f";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Х"] = "H";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["х"] = "h";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ц"] = "C";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ц"] = "c";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ч"] = "C";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ч"] = "c";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Џ"] = "DZ";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["џ"] = "dz";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["Ш"] = "S";
        _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS["ш"] = "s";
        AbstractCharMapper.combine(_SerbianCyrillicCharMapper.MAPPABLE_CHARS, _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS, _Latin1CharMapper.MAPPABLE_LATIN_CHARS);
    })();
    /**
     *  Maps baltic charset
     */var _BalticCharMapper = function BalticCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        AbstractCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet, _BalticCharMapper.MAPPABLE_CHARS);
    };
    _BalticCharMapper = stjs.extend(_BalticCharMapper, AbstractCharMapper, [], function (constructor, prototype) {
        constructor.MAPPABLE_BALTIC_CHARS = {};
        constructor.MAPPABLE_CHARS = {};
    }, {
        MAPPABLE_BALTIC_CHARS: {name: "Map", arguments: [null, null]},
        MAPPABLE_CHARS: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    (function () {
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Š"] = "S";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["š"] = "s";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ž"] = "Z";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ž"] = "z";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["\xd5"] = "O";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["\xf5"] = "\xf2";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ā"] = "A";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ā"] = "a";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Č"] = "C";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["č"] = "c";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ē"] = "E";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ē"] = "e";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ģ"] = "G";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ģ"] = "g";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ī"] = "I";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ī"] = "i";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ķ"] = "K";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ķ"] = "k";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ļ"] = "L";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ļ"] = "l";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ņ"] = "N";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ņ"] = "n";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ū"] = "U";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ū"] = "u";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ŗ"] = "R";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["\xb5"] = "m";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ą"] = "A";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Į"] = "I";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ć"] = "C";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ę"] = "E";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ź"] = "Z";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ė"] = "E";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ń"] = "N";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["\xd3"] = "O";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ō"] = "O";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ų"] = "U";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ł"] = "L";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ś"] = "S";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["Ż"] = "Z";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ŗ"] = "r";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ą"] = "a";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["į"] = "i";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ć"] = "c";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ę"] = "e";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ź"] = "z";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ė"] = "e";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ń"] = "n";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["\xf3"] = "o";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ō"] = "o";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ų"] = "u";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ł"] = "l";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ś"] = "s";
        _BalticCharMapper.MAPPABLE_BALTIC_CHARS["ż"] = "z";
        AbstractCharMapper.combine(_BalticCharMapper.MAPPABLE_CHARS, _BalticCharMapper.MAPPABLE_BALTIC_CHARS, _Latin1CharMapper.MAPPABLE_LATIN_CHARS);
    })();
    /**
     *  mapps greek charset
     *
     *  @author draganbencic
     */var _GreekCharMapper = function GreekCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        AbstractCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet, _GreekCharMapper.MAPPABLE_CHARS);
    };
    _GreekCharMapper = stjs.extend(_GreekCharMapper, AbstractCharMapper, [], function (constructor, prototype) {
        /**
         *  greek chars that are rappresented with appropriate codes in range 0 to
         *  127 which means that are mappable to gsm 7 standard codings thus con be
         *  part of long messages (160 chars)
         */constructor.MAPPABLE_GREEK_CHARS = {};
        constructor.MAPPABLE_CHARS = {};
    }, {
        MAPPABLE_GREEK_CHARS: {name: "Map", arguments: [null, null]},
        MAPPABLE_CHARS: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    (function () {
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ά"] = "A";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Έ"] = "E";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ή"] = "H";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ί"] = "I";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ό"] = "O";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ύ"] = "Y";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ώ"] = "Ω";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ΐ"] = "I";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Α"] = "A";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Β"] = "B";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ε"] = "E";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ζ"] = "Z";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Η"] = "H";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ι"] = "I";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Κ"] = "K";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Μ"] = "M";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ν"] = "N";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ο"] = "O";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ρ"] = "P";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Τ"] = "T";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Υ"] = "Y";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Χ"] = "X";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ϊ"] = "I";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["Ϋ"] = "Y";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ά"] = "A";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["έ"] = "E";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ή"] = "H";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ί"] = "I";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ΰ"] = "Y";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["α"] = "A";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["β"] = "B";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["γ"] = "Γ";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["δ"] = "Δ";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ε"] = "E";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ζ"] = "Z";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["η"] = "H";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["θ"] = "Θ";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ι"] = "I";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["κ"] = "K";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["λ"] = "Λ";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["μ"] = "M";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ν"] = "N";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ξ"] = "Ξ";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ο"] = "O";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["π"] = "Π";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ρ"] = "P";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ς"] = "Σ";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["σ"] = "Σ";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["τ"] = "T";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["υ"] = "Y";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["φ"] = "Φ";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["χ"] = "X";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ψ"] = "Ψ";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ω"] = "Ω";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ϊ"] = "I";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ϋ"] = "Y";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ό"] = "O";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ύ"] = "Y";
        _GreekCharMapper.MAPPABLE_GREEK_CHARS["ώ"] = "Ω";
        AbstractCharMapper.combine(_GreekCharMapper.MAPPABLE_CHARS, _GreekCharMapper.MAPPABLE_GREEK_CHARS, _Latin1CharMapper.MAPPABLE_LATIN_CHARS);
    })();
    var ColombianCharMapper = function ColombianCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        _CentralEuropeanCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet);
    };
    ColombianCharMapper = stjs.extend(ColombianCharMapper, _CentralEuropeanCharMapper, [], function (constructor, prototype) {
        prototype.mapSingleCharacter = function (originalText, charPosition) {
            var map = AbstractCharMapper.prototype.mapSingleCharacter.call(this, originalText, charPosition);
            if (!map.isMapped) map = new MappedCharAndBytesCount(true, " ", 1);
            return map;
        };
    }, {
        MAPPABLE_CEC_CHARS: {name: "Map", arguments: [null, null]},
        MAPPABLE_CHARS: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    /**
     *  Maps all charsets together
     */var _CompositeCharMapper = function CompositeCharMapper(lockingShiftCharacterSet, singleShiftCharacterSet) {
        AbstractCharMapper.call(this, lockingShiftCharacterSet, singleShiftCharacterSet, _CompositeCharMapper.compositeMapping);
    };
    _CompositeCharMapper = stjs.extend(_CompositeCharMapper, AbstractCharMapper, [], function (constructor, prototype) {
        constructor.all = new Array(_GreekCharMapper.MAPPABLE_GREEK_CHARS, _CyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS, _SerbianCyrillicCharMapper.MAPPABLE_CYRILLIC_CHARS, _Latin1CharMapper.MAPPABLE_LATIN_CHARS, _TurkishCharMapper.MAPPABLE_TURKISH_CHARS, _BalticCharMapper.MAPPABLE_BALTIC_CHARS, _PortugueseCharMapper.MAPPABLE_PORTUGUESE_CHARS, _CentralEuropeanCharMapper.MAPPABLE_CEC_CHARS);
        constructor.compositeMapping = {};
    }, {
        all: {name: "Array", arguments: [{name: "Map", arguments: [null, null]}]},
        compositeMapping: {name: "Map", arguments: [null, null]},
        lockingShiftCharacterSet: "CharacterSet",
        singleShiftCharacterSet: "CharacterSet",
        mappableChars: {name: "Map", arguments: [null, null]}
    }, {});
    (function () {
        for (var _key in _CompositeCharMapper.all) {
            if (!_CompositeCharMapper.all.hasOwnProperty(_key)) continue;
            var map = _CompositeCharMapper.all[_key];
            for (var mapKey in map) _CompositeCharMapper.compositeMapping[mapKey] = map[mapKey];
        }
    })();
    /**
     *  @author mmimica
     *
     */var GsmCharMapperFactoryJs = function GsmCharMapperFactoryJs() {
    };
    GsmCharMapperFactoryJs = stjs.extend(GsmCharMapperFactoryJs, null, [], function (constructor, prototype) {
        /**
         *  creates instance which maps characters to GSM7 charset
         *
         *  @param charset
         *             which charset to map
         *  @return instance to handle mapping of characters. Default maper is latin1
         *          to GSM7
         *  @throws RuntimeException
         *              if mapping for desired charset is not supported
         */constructor.getInstance = function (charset, ls, ss) {
            if (ls == null) ls = LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT;
            if (ss == null) ss = SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT;
            if (charset == TransliterationJs.Greek) {
                return new _GreekCharMapper(ls, ss);
            } else if (charset == TransliterationJs.Cyrillic) {
                return new _CyrillicCharMapper(ls, ss);
            } else if (charset == TransliterationJs.CentralEuropean) {
                return new _CentralEuropeanCharMapper(ls, ss);
            } else if (charset == TransliterationJs.Default) {
                return new _Latin1CharMapper(ls, ss);
            } else if (charset == TransliterationJs.Turkish) {
                return new _TurkishCharMapper(ls, ss);
            } else if (charset == TransliterationJs.SerbianCyrillic) {
                return new _SerbianCyrillicCharMapper(ls, ss);
            } else if (charset == TransliterationJs.Baltic) {
                return new _BalticCharMapper(ls, ss);
            } else if (charset == TransliterationJs.Portuguese) {
                return new _PortugueseCharMapper(ls, ss);
            } else if (charset == TransliterationJs.Colombian) {
                return new ColombianCharMapper(ls, ss);
            } else if (charset == TransliterationJs.All) {
                return new _CompositeCharMapper(ls, ss);
            } else {
                throw new RuntimeException("Dont have mapper for " + charset + " charset");
            }
        };
        /**
         *  creates default mapper instance
         *
         *  @return instance to handle mapping and check
         */constructor.getDefaultInstance = function () {
            return new _Latin1CharMapper(LockingShiftCharacterSetJs.BASIC_LOCKING_SHIFT, SingleShiftCharacterSetJs.BASIC_SINGLE_SHIFT);
        };
    }, {}, {}); //# sourceMappingURL=infobip-data-coding.map
    return {
        UdhContext: UdhContext,
        UDHPartTypes: UDHPartTypes,
        UdhLengthReportJs: UdhLengthReportJs,
        NationalLanguageInfoJs: NationalLanguageInfoJs,
        SingleShiftCharacterSetJs: SingleShiftCharacterSetJs,
        LockingShiftCharacterSetJs: LockingShiftCharacterSetJs,
        SmsCountReportCommon: SmsCountReportCommon,
        KoreanMessageLengthType: KoreanMessageLengthType,
        CharRemapResumeJs: CharRemapResumeJs,
        CharacterSet: CharacterSet,
        MappedCharAndBytesCount: MappedCharAndBytesCount,
        CharRemapperJs: CharRemapperJs,
        TransliterationJs: TransliterationJs,
        UDHLengthCalculatorJs: UDHLengthCalculatorJs,
        DataCodingReport: DataCodingReport,
        SmsCountReportJs: SmsCountReportJs,
        KoreanMessageLengthTypeUtils: KoreanMessageLengthTypeUtils,
        PortugueseLockingShiftCharacterSet: PortugueseLockingShiftCharacterSet,
        SpanishSingleShiftCharacterSet: SpanishSingleShiftCharacterSet,
        BasicLockingShiftCharacterSet: BasicLockingShiftCharacterSet,
        BasicSingleShiftCharacterSet: BasicSingleShiftCharacterSet,
        PortugueseSingleShiftCharacterSet: PortugueseSingleShiftCharacterSet,
        TurkishLockingShiftCharacterSet: TurkishLockingShiftCharacterSet,
        TurkishSingleShiftCharacterSet: TurkishSingleShiftCharacterSet,
        SmsCountContext: SmsCountContext,
        CharacterSetUtilsJs: CharacterSetUtilsJs,
        AbstractCharMapper: AbstractCharMapper,
        DataCodingCalculatorJs: DataCodingCalculatorJs,
        TurkishCharMapper: _TurkishCharMapper,
        Latin1CharMapper: _Latin1CharMapper,
        PortugueseCharMapper: _PortugueseCharMapper,
        SmsCountCalculatorJs: SmsCountCalculatorJs,
        SerbianCyrillicCharMapper: _SerbianCyrillicCharMapper,
        CentralEuropeanCharMapper: _CentralEuropeanCharMapper,
        GreekCharMapper: _GreekCharMapper,
        BalticCharMapper: _BalticCharMapper,
        CyrillicCharMapper: _CyrillicCharMapper,
        CompositeCharMapper: _CompositeCharMapper,
        GsmCharMapperFactoryJs: GsmCharMapperFactoryJs
    };
});