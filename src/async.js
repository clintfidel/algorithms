module.exports = {
    async : function(value) {
        return new Promise((resolve, reject) => {
            resolve(value);
        })
    },

    manipulateRemoteData : function(url) {
        return fetch(url)
            .then(resJson => resJson.json())
            .then((res) => res.people.map(person => person.name).sort());
    }
};
