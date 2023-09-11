let primeiroNumero = document.getElementById("primeiroNumero");
let segundoNumero = document.getElementById("segundoNumero");
let resultado = document.getElementById("resultado");

function somar() {
  let n1 = Number(primeiroNumero.value);
  let n2 = Number(segundoNumero.value);
  let soma = n1 + n2;
  resultado.innerHTML = `A soma de ${n1} + ${n2}   é   ${soma}`;
}
function subtrair() {
  let n1 = Number(primeiroNumero.value);
  let n2 = Number(segundoNumero.value);
  let subtração = n1 - n2;
  resultado.innerHTML = `A subtração de ${n1} - ${n2}   é   ${subtração} `;
}
function multiplicar() {
  let n1 = Number(primeiroNumero.value);
  let n2 = Number(segundoNumero.value);
  let multiplicação = n1 * n2;
  resultado.innerHTML = `A multiplicação de ${n1} x ${n2}   é   ${multiplicação}`;
}
function dividir() {
  let n1 = Number(primeiroNumero.value);
  let n2 = Number(segundoNumero.value);
  let divisão = n1 / n2;
  resultado.innerHTML = `A divisão de ${n1} ÷ ${n2}   é   ${divisão}`;
}
