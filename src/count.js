
module.exports = {
    count : function (start, end) {
        let counter = start;
        let cancelled = false;

        const intervalId = setInterval(() => {
            if (cancelled) {
                clearInterval(intervalId);
                return;
            }

            if (counter > end) {
                clearInterval(intervalId);
                return;
            }

            console.log(counter);
            counter++;
        }, 100);

        return {
            cancel() {
                cancelled = true;
            }
        }
    }
};

