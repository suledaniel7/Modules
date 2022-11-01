function timeFn(d) {
    let hour = d.getHours();
    let minute = d.getMinutes();
    let hString = hour.toString();
    let mString = minute.toString();

    let suffix;

    if ((hour) < 12) {
        suffix = 'AM';
    }
    else {
        hString = String(hour - 12);
        suffix = 'PM';
    }

    if (minute < 10) {
        mString = '0' + minute;
    }
    if (hour - 12 === 0 || hour === 0) {
        hString = '12';
    }

    let fullTime = hString + ":" + mString + " " + suffix;

    return fullTime;
}

module.exports = timeFn;