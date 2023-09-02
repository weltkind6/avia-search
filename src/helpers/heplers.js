export function formatToDate (dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString();
    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'][date.getMonth()];
    return `${day} ${month}`;
}

export function getTime(time) {
    const hours = parseInt(time / 60)
    const minutes = time % 60

    return `${hours} ч ${minutes} мин`
}

export function generateRandomTime() {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}

export function arrivalTimeHandler (t, m) {
    const [hours, minutes] = t.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    const res = parseInt(totalMinutes) + parseInt(m);
    const hoursRes = Math.floor(res / 60);
    const minutesRes = res % 60;
    const hoursString = hoursRes.toString().padStart(2, "0");
    const minutesString = minutesRes.toString().padStart(2, "0");

    return `${hoursString}:${minutesString}`;
}

