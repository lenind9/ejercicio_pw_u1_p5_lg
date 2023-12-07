let aleatorio = 0;
let suma = 0;
const max = 100;

function getRandomInt(id) {
    aleatorio = Math.floor(Math.random() * max);
    suma += aleatorio;
    document.getElementById(id).innerText = aleatorio;
    document.getElementById('idresultado').innerText = suma;
}
