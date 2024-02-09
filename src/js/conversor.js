const datoFactorial = document.querySelector("#datoFactorial");
const btnDato = document.querySelector("button");

function conversor() {
  let numeroBase = document.querySelector("#numeroBase").value;
  let numeroFactorial = 1;
  for (let i = 1; i <= numeroBase; i++) {
    numeroFactorial *= i;
  }
  datoFactorial.innerHTML = `<h4>${numeroBase}! = ${numeroFactorial}</h4>`
}

btnDato.onclick = function () {
  conversor();
};
