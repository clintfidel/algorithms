
module.exports = {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce((sum, currentValue) => (sum + currentValue), 0);
    },

    remove : function(arr, item) {
        const indices = [];

        arr.forEach((element, index) => {
            if (element === item) {
                indices.push(index);
            }
        });

        indices.forEach((index) => {
            arr[index] = undefined;
        });

        return arr.filter(element => element !== undefined);
    },

    removeWithoutCopy : function(arr, item) {
        const indices = [];

        arr.forEach((element, index) => {
            if (element === item) {
                indices.push(index);
            }
        });

        indices.forEach((index) => {
            arr[index] = undefined;
        });

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                arr.splice(i, 1);
                i--;
            }
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        let currentCount = 0;

        for (let element of arr) {
            if (element === item) {
                currentCount++;
            }
        }

        return currentCount;
    },

    duplicates : function(arr) {
        const dups = [];

        arr.sort((a, b) => a - b);

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === arr[i + 1]) {
                dups.push(arr[i]);

                let j = i + 2;
                while (arr[j] === arr[i]) {
                    j++;
                }

                i = j - 1;
            }
        }

        return dups;
    },

    square : function(arr) {
        return arr.map(item => Math.pow(item, 2));
    },

    findAllOccurrences : function(arr, target) {
        const indices = [];

        arr.forEach((element, index) => {
            if (element === target) {
                indices.push(index);
            }
        })

        return indices;
    }
};
