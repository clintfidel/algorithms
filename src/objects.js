module.exports = {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        let items = [];
        for (let item in obj) {
            if (obj.hasOwnProperty(item)) {
                items.push(`${item}: ${obj[item]}`);
            }
        }
        return items;
    }
};
