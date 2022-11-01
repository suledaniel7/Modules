function dateFn(d, con) {
    let day = d.getDay();
    let month = d.getMonth();
    let date = d.getDate();
    let year = d.getFullYear();

    let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let conDaysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let conMonthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    con = Boolean(con);

    let f_day;
    let f_month;

    if (con) {
        //use contracted forms
        f_day = conDaysArr[day];
        f_month = conMonthsArr[month];
    }
    else {
        //use long forms
        f_day = daysArr[day];
        f_month = monthsArr[month];
    }

    let fullDate = `${f_day}, ${f_month} ${date}, ${year}`;
    return fullDate;
}

module.exports = dateFn;