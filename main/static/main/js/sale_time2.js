/* Calculate sale time */
const countdown = () => {
    const countDate = new Date('Jul 31, 2023 00:00:00').getTime();
    const nowDate = new Date().getTime();
    const gap = countDate - nowDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const textDays = Math.floor(gap / days);
    const textHours = Math.floor((gap % days) / hours);
    const textMinutes = Math.floor((gap % hours) / minutes);
    const textSeconds = Math.floor((gap % minutes) / seconds);

    document.querySelector('.day').innerText = textDays;
    document.querySelector('.hour').innerText = textHours;
    document.querySelector('.minute').innerText = textMinutes;
    document.querySelector('.second').innerText = textSeconds;
}

setInterval(countdown, 1000);