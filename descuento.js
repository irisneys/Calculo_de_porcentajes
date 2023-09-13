const h1 = document.querySelector("h1");

const form = document.querySelector("#form");

const input1 = document.querySelector("#precioInicial");
const input2 = document.querySelector("#descuento");

const btn = document.querySelector("#btnCalcular");

const pResult = document.querySelector("#precioFinal");

//la propiedad o metodo y debes pasarle dos argumento: 1. nombre del evento 2. el codigo JS que queremos ejecutar en este caso la funcion btnOnClick sin ()

btn.addEventListener("click", btnOnClick);

function btnOnClick() {
    const calculoPorcentaje = (+input1.value *(100 - +input2.value))/100;

    pResult.innerText = "Precio final del articulo $ " + calculoPorcentaje ;
}
