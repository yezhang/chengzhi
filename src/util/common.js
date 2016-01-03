(function () {
    Date.prototype.SimpleStr = function () {
        let year = this.getFullYear();
        let month = this.getMonth();
        let day = this.getDate();

        return year + '-' + month + '-' + day;
    }
})();

export function log(text) {
    console.log(text);
}

