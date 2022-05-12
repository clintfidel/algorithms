module.exports = {
    valueAtBit: function(num, bit) {
        const binaryNum = this.convertToBinary(num);

        return +binaryNum[binaryNum.length - bit]; // 01000110
    },

    base10: function(str) {
        let base10Value = 0;
        let highestPower = str.length - 1;

        let i = 0;
        while(highestPower > 0) {
            base10Value += Number(str[i]) * Math.pow(2, highestPower);
            highestPower--;
            i++;
        }

        return base10Value;
    },

    convertToBinary: function(num) {
        const memory = [0, 0, 0, 0, 0, 0, 0, 0];
        let curValue = num;

        if (num > 255) { // integer overflow
            return '11111111';
        }

        for (let i = 0; i < memory.length; i++) {
            if (curValue === 0) {
                break;
            }

            let curComputation = Math.pow(2, memory.length - 1 - i);
            if (curComputation <= curValue) {
                memory[i] = 1;
                curValue = num - curComputation;
            }
        }

        return memory.join('');
    },

    multiply: function(a, b) {
        const strA = a.toString();
        const strB = b.toString();
        const indexOfPointInA = strA.indexOf('.');
        const indexOfPointInB = strA.indexOf('.');
        const decimalPlaces = Math.max(strA.slice(indexOfPointInA + 1).length, strB.slice(indexOfPointInB + 1).length);

        return +(a * b).toFixed(decimalPlaces);
    }
};
