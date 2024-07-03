const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

const dateLaunchGame = "23 Dec 2024";

// calcular data de hoje menos data de lançamento
// calcular data completa dias, horas, minutos e segundos
// atribuir resultado do calculo ao meu HTML
// executar as minhas regras de negocio a cada segundo
// toda vez que o numero só tiver um digito eu quero adicionar um 0 a esquerda dele

function calculateSeconds() {
  const currentDate = new Date();
  const dateLaunchGameDate = new Date(dateLaunchGame);

  return (dateLaunchGameDate - currentDate) / 1000;
}

function calculateDate() {
  const days = Math.floor(calculateSeconds() / 3600 / 24);
  const hours = Math.floor(calculateSeconds() / 3600) % 24;
  const mins = Math.floor(calculateSeconds() / 60) % 60;
  const seconds = Math.floor(calculateSeconds()) % 60;

  return {
    days,
    hours,
    mins,
    seconds,
  };
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countdown() {
  daysEl.innerHTML = calculateDate().days;
  hoursEl.innerHTML = formatTime(calculateDate().hours);
  minsEl.innerHTML = formatTime(calculateDate().mins);
  secondsEl.innerHTML = formatTime(calculateDate().seconds);
}

countdown();

setInterval(countdown, 1000);
