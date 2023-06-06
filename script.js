let productosCargados = [];
let precios = [];
let totalCarro = 0;
let total = 0;
let carrito = [];
let carrito2 = [];
let carrito3 = [];
let carrito4 = [];
let carrito5 = [];
let carrito6 = [];
let carrito7 = [];
let carrito8 = [];
let valorExistente = localStorage.getItem('clave');
let valorExistente2 = localStorage.getItem('clave2');
let valorExistente3 = localStorage.getItem('clave3');
let valorExistente4 = localStorage.getItem('clave4');
let valorExistente5 = localStorage.getItem('clave5');
let valorExistente6 = localStorage.getItem('clave6');
let valorExistente7 = localStorage.getItem('clave7');
let valorExistente8 = localStorage.getItem('clave8');
let enlaseCarro = document.getElementById("enlase-carro")
let boton0 = document.getElementById("boton");
let boton1 = document.getElementById("boton2");
let boton2 = document.getElementById("boton3");
let boton3 = document.getElementById("boton4");
let boton4 = document.getElementById("boton5");
let boton5 = document.getElementById("boton6");
let boton6 = document.getElementById("boton7");
let boton7 = document.getElementById("boton8");
let parrafo1 = document.createElement("p");
let parrafo2 = document.createElement("p");
let parrafo3 = document.createElement("p");
let parrafo4 = document.createElement("p");
let parrafo5 = document.createElement("p");
let parrafo6 = document.createElement("p");
let parrafo7 = document.createElement("p");
let parrafo8 = document.createElement("p");
let sumatotal = parseFloat(localStorage.getItem("total")) || 0;

class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

let producto0 = new Producto(1, "Coca-Cola", 800);
productosCargados.push(producto0.nombre);
precios.push(producto0.precio);
parrafo1.textContent = producto0.nombre + " | " + producto0.precio + "$";
parrafo1.style.display = "flex";
parrafo1.style.justifyContent = "center";
document.getElementById("info1").appendChild(parrafo1);

let producto1 = new Producto(2, "Fernet Branca", 1200);
productosCargados.push(producto1.nombre);
precios.push(producto1.precio);
parrafo2.textContent = producto1.nombre + " | " + producto1.precio + "$";
parrafo2.style.display = "flex";
parrafo2.style.justifyContent = "center";
document.getElementById("info2").appendChild(parrafo2);

let producto2 = new Producto(3, "Jackdaniels", 2400);
productosCargados.push(producto2.nombre);
precios.push(producto2.precio);
parrafo3.textContent = producto2.nombre + " | " + producto2.precio + "$";
parrafo3.style.display = "flex";
parrafo3.style.justifyContent = "center";
document.getElementById("info3").appendChild(parrafo3);

let producto3 = new Producto(4, "Cerveza Corona", 850);
productosCargados.push(producto3.nombre);
precios.push(producto3.precio);
parrafo4.textContent = producto3.nombre + " | " + producto3.precio + "$";
parrafo4.style.display = "flex";
parrafo4.style.justifyContent = "center";
document.getElementById("info4").appendChild(parrafo4);

let producto4 = new Producto(5, "Bacardi 151", 1600);
productosCargados.push(producto4.nombre);
precios.push(producto4.precio);
parrafo5.textContent = producto4.nombre + " | " + producto4.precio + "$";
parrafo5.style.display = "flex";
parrafo5.style.justifyContent = "center";
document.getElementById("info5").appendChild(parrafo5);

let producto5 = new Producto(6, "Monkey", 1800);
productosCargados.push(producto5.nombre);
precios.push(producto5.precio);
parrafo6.textContent = producto5.nombre + " | " + producto5.precio + "$";
parrafo6.style.display = "flex";
parrafo6.style.justifyContent = "center";
document.getElementById("info6").appendChild(parrafo6);

let producto6 = new Producto(7, "Absolut", 5000);
productosCargados.push(producto6.nombre);
precios.push(producto6.precio);
parrafo7.textContent = producto6.nombre + " | "+ producto6.precio + "$";
parrafo7.style.display = "flex";
parrafo7.style.justifyContent = "center";
document.getElementById("info7").appendChild(parrafo7);

let producto7 = new Producto(8, "RedBull", 400);
productosCargados.push(producto7.nombre);
precios.push(producto7.precio);
parrafo8.textContent = producto7.nombre + " | " + producto7.precio + "$";
parrafo8.style.display = "flex";
parrafo8.style.justifyContent = "center";
document.getElementById("info8").appendChild(parrafo8);

function actualizarTotal(){
  localStorage.setItem("total", sumatotal.toFixed(2));
}
function mandarALocalStorage(){
  if (valorExistente === null || valorExistente === undefined) {
    localStorage.setItem('clave', JSON.stringify(carrito));
  } else {
    let valorParseado = JSON.parse(valorExistente);
    let carritoCombinado = valorParseado.concat(carrito);
    localStorage.setItem('clave', JSON.stringify(carritoCombinado));
  }
  actualizarTotal();
}
function mandarALocalStorage2(){
  if (valorExistente2 === null || valorExistente2 === undefined) {
    localStorage.setItem('clave2', JSON.stringify(carrito2));
  } else {
    let valorParseado2 = JSON.parse(valorExistente2);
    let carritoCombinado2 = valorParseado2.concat(carrito2);
    localStorage.setItem('clave2', JSON.stringify(carritoCombinado2));
  }
  actualizarTotal();
}
function mandarALocalStorage3(){
  if (valorExistente3 === null || valorExistente3 === undefined) {
    localStorage.setItem('clave3', JSON.stringify(carrito3));
  } else {
    let valorParseado3 = JSON.parse(valorExistente3);
    let carritoCombinado3 = valorParseado3.concat(carrito3);
    localStorage.setItem('clave3', JSON.stringify(carritoCombinado3));
  }
  actualizarTotal();
}
function mandarALocalStorage4(){
  if (valorExistente4 === null || valorExistente4 === undefined) {
    localStorage.setItem('clave4', JSON.stringify(carrito4));
  } else {
    let valorParseado4 = JSON.parse(valorExistente4);
    let carritoCombinado4 = valorParseado4.concat(carrito4);
    localStorage.setItem('clave4', JSON.stringify(carritoCombinado4));
  }
  actualizarTotal();
}
function mandarALocalStorage5(){
  if (valorExistente5 === null || valorExistente5 === undefined) {
    localStorage.setItem('clave5', JSON.stringify(carrito5));
  } else {
    let valorParseado5 = JSON.parse(valorExistente5);
    let carritoCombinado5 = valorParseado5.concat(carrito5);
    localStorage.setItem('clave5', JSON.stringify(carritoCombinado5));
  }
  actualizarTotal();
}
function mandarALocalStorage6(){
  if (valorExistente6 === null || valorExistente6 === undefined) {
    localStorage.setItem('clave6', JSON.stringify(carrito6));
  } else {
    let valorParseado6 = JSON.parse(valorExistente6);
    let carritoCombinado6 = valorParseado6.concat(carrito6);
    localStorage.setItem('clave6', JSON.stringify(carritoCombinado6));
  }
  actualizarTotal();
}
function mandarALocalStorage7(){
  if (valorExistente7 === null || valorExistente7 === undefined) {
    localStorage.setItem('clave7', JSON.stringify(carrito7));
  } else {
    let valorParseado7 = JSON.parse(valorExistente7);
    let carritoCombinado7 = valorParseado7.concat(carrito7);
    localStorage.setItem('clave7', JSON.stringify(carritoCombinado7));
  }
  actualizarTotal();
}
function mandarALocalStorage8(){
  if (valorExistente8 === null || valorExistente8 === undefined) {
    localStorage.setItem('clave8', JSON.stringify(carrito8));
  } else {
    let valorParseado8 = JSON.parse(valorExistente8);
    let carritoCombinado8 = valorParseado8.concat(carrito8);
    localStorage.setItem('clave8', JSON.stringify(carritoCombinado8));
  }
  actualizarTotal();
}

function cargarAlCarro(){
  carrito.push(producto0.nombre + " " + producto0.precio);
  sumatotal += producto0.precio;

  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
  }).showToast();
  mandarALocalStorage();
}
function cargarAlCarro2(){
  carrito2.push(producto1.nombre + " " + producto1.precio);
  sumatotal += producto1.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
  }).showToast();
  mandarALocalStorage2();
}
function cargarAlCarro3() {
  carrito3.push(producto2.nombre + " " + producto2.precio);
  sumatotal += producto2.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
  }).showToast();
  mandarALocalStorage3();
}
function cargarAlCarro4() {
  carrito4.push(producto3.nombre + " " + producto3.precio);
  sumatotal += producto3.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
  }).showToast();
  mandarALocalStorage4();
}
function cargarAlCarro5() {
  carrito5.push(producto4.nombre + " " + producto4.precio);
  sumatotal += producto4.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
  }).showToast();
  mandarALocalStorage5();
}
function cargarAlCarro6() {
  carrito6.push(producto5.nombre + " " + producto5.precio);
  sumatotal += producto5.precio;

  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
  }).showToast();
  mandarALocalStorage6();
}
function cargarAlCarro7() {
  carrito7.push(producto6.nombre + " " + producto6.precio);
  sumatotal += producto6.precio;
  
 Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
  }).showToast();
  mandarALocalStorage7();
}
function cargarAlCarro8() {
  carrito8.push(producto7.nombre + " " + producto7.precio);
  sumatotal += producto7.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
  }).showToast();
  mandarALocalStorage8();
}

boton0.addEventListener("click", cargarAlCarro);
boton1.addEventListener("click", cargarAlCarro2);
boton2.addEventListener("click", cargarAlCarro3);
boton3.addEventListener("click", cargarAlCarro4);
boton4.addEventListener("click", cargarAlCarro5);
boton5.addEventListener("click", cargarAlCarro6);
boton6.addEventListener("click", cargarAlCarro7);
boton7.addEventListener("click", cargarAlCarro8);
enlaseCarro.addEventListener('click', function(event) {
  event.preventDefault();
  if (localStorage.length == 0) {
    window.location.href="pages/carrito-vacio.html"
  } else {
    window.location.href="pages/carrito.html"
  }
});
actualizarTotal();


