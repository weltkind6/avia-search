const formatToDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString();
    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'][date.getMonth()];
    return `${day} ${month}`;
}

export default formatToDate
