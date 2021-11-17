export default function TodayDate() {
    let today = new Date();
    let [yyyy, mm, dd] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}