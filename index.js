const tampilDetik = document.getElementById("seconds");
const tampilMilidetik = document.getElementById("miliseconds");
const cetakLap = document.getElementById('lap');
let hitungDetik = 00;
let hitungMilidetik = 00;
let interval;

const timer = () => {
  hitungMilidetik++;
  if (hitungMilidetik <= 9) {
    tampilMilidetik.innerHTML = "0" + hitungMilidetik;
  }
  if (hitungMilidetik > 9) {
    tampilMilidetik.innerHTML = hitungMilidetik;
  }
  if (hitungMilidetik > 99) {
    hitungDetik++;
    tampilDetik.innerHTML = '0' + hitungDetik;
    hitungMilidetik = 0;
    tampilMilidetik = '0'+ 0;
  }
  if (hitungDetik > 9) {
    // clearInterval(interval);
    tampilDetik.innerHTML = hitungDetik;
  }
};

const start = () => {
  interval =  setInterval(timer, 10);
};

const stop = () => {
  clearInterval(interval);
};

const reset = () => {
  tampilDetik.innerHTML = "00";
  tampilMilidetik.innerHTML = "00";
};

const lap = () => {
  // cetakLap.innerHTML = interval;
};