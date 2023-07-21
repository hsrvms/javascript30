const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function animateLiveClock() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const hourDeg = 90 + hour * 30;
  const minuteDeg = 90 + minute * 6;
  const secondDeg = 90 + second * 6;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  console.log(hour, minute, second);
}
setInterval(animateLiveClock, 1000);
