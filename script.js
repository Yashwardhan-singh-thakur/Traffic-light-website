let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let h2 = document.querySelector("h2");

async function trafficSignal() {
  await setTimeout(() => {
    red.style.backgroundColor = "red";
    h2.innerText = "STOP";
    h2.style.backgroundColor = "red";
    green.style.backgroundColor = "white";
  }, 0);

  await setTimeout(() => {
    yellow.style.backgroundColor = "yellow";
    h2.innerText = "WAIT";
    h2.style.backgroundColor = "yellow";
    red.style.backgroundColor = "white";
  }, 5000);

  await setTimeout(() => {
    yellow.style.backgroundColor = "white";
    h2.innerText = "GO";
    h2.style.backgroundColor = "green";
    green.style.backgroundColor = "green";
  }, 10000);
}

trafficSignal();
let intervalId = setInterval(() => {
  trafficSignal();
}, 15000);
