module.exports = {
    argsAsArray : function(fn, arr) {
        return fn(...arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return (anotherStr) =>  `${str}, ${anotherStr}`;
    },

    makeClosures : function(arr, fn) {
        return arr.map(item => () => fn(item));
    },

    partial : function(fn, str1, str2) {
        return (str3) => fn(str1, str2, str3);
    },

    useArguments : function() {
        return Array.from(arguments).reduce((sum, currentValue) => sum + currentValue, 0);
    },

    callIt : function(fn, ...args) {
        // const args = Array.from(arguments).slice(1, arguments.length); // Excluding fn

        return fn(...args);
    },

    partialUsingArguments : function(fn, ...args) {
        // const args = Array.from(arguments).slice(1, arguments.length); // Excluding fn

        return (...extraArgs) => fn(...args, ...extraArgs);
    },

    curryIt : function(fn) {
        return (arg1) => (arg2) => (arg3) => fn(arg1, arg2, arg3);
    }
};

