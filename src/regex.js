module.exports = {
    containsNumber : function(str) {
        for (let char of str) {
            if (parseInt(char, 10)) {
                return true;
            }
        }

        return false;
    },

    containsRepeatingLetter : function(str) {
        const strArray = Array.from(str).sort();

        for (let i = 0; i < strArray.length; i++) {
            if (isNaN(parseInt(strArray[i], 10)) && strArray[i] === strArray[i + 1]) {
                return true;
            }
        }

        return false;
    },

    endsWithVowel : function(str) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

        if (vowels.has(str[str.length - 1].toLowerCase())) {
            return true;
        }

        return false;
    },

    captureThreeNumbers : function(str) {
        for (let i = 0; i < str.length; i++) {
            const currentSlice = str.slice(i, i + 3);

            if (Number(currentSlice, 10)) {
                return currentSlice;
            }
        }

        return false;
    },

    matchesPattern : function(str) {
        const strArray = str.split('-');

        if (strArray.length !== 3) {
            return false;
        }

        for (let i = 0; i < strArray.length; i++) {
            if (isNaN(Number(strArray[i]))) {
                return false;
            }
        }

        if (strArray[0].length === 3 && strArray[1].length === 3 && strArray[2].length === 4) {
            return true;
        }

        return false;
    },
    isUSD : function(str) {
        if (str[0] !== '$') {
            return false;
        }

        const indexOfPoint = str.lastIndexOf('.');
        let wholeNumbers = '';
        let wholeNumbersArray = [];

        if (indexOfPoint > -1) {
            wholeNumbers = str.slice(1, indexOfPoint);

            if (str.slice(indexOfPoint + 1).length !== 2) {
                return false;
            }
        } else {
            wholeNumbers = str.slice(1);
        }

        wholeNumbersArray = wholeNumbers.split(',');

        for (let i = 0; i < wholeNumbersArray.length; i++) {
            if (isNaN(Number(wholeNumbersArray[i])) || isNaN(parseInt(wholeNumbersArray[i]))) {
                return false;
            }
            if (i === 0 && wholeNumbersArray[i].length > 3) {
                return false;
            }

            if (i > 0 && wholeNumbersArray[i].length !== 3) {
                return false;
            }
        }

        return true;
    }
};
