function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

const targetDate = new Date('2024-06-01T23:59:59');

setInterval(function() {
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.querySelector('.firstNum').innerHTML = formatNumber(days);
    document.querySelector('.secondNum').innerHTML = formatNumber(hours);
    document.querySelector('.thirdNum').innerHTML = formatNumber(minutes);
    document.querySelector('.fourthNum').innerHTML = formatNumber(seconds);

}, 1000);