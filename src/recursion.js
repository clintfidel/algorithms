module.exports = {
    listFiles: function(data, dirName) {
        const files = [];
        let inDir = false;

        const traverseData = (fileData) => {
            for (let content of fileData.files) {
                if (dirName && content.dir === dirName) {
                    inDir = true;
                }

                if ((dirName && inDir) || !dirName) {
                    if (typeof content === 'string') {
                        files.push(content);
                    } else {
                        traverseData(content);

                        if (inDir) { // already traversed specified directory
                            return;
                        }
                    }
                }

            }
        };

        traverseData(data);

        return files;
    },

    permute: function(arr) {

    },

    fibonacci: function(n) {

    },

    validParentheses: function(n) {

    }
};
