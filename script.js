//v1.0
/* let boton = document.getElementById("botoncito");
boton.addEventListener("click", megaFuntion);

function megaFuntion() {
    class estudiante{
        constructor(nombre, apellido, curso){
            this.nombre = nombre;
            this.apellido = apellido;
            this.curso = curso;
        }
    }
    
    let estudiantesA =[]
    let estudiantesD =[]
    let estudiante0;
    let apagar;
    
    function calculoPromedios(){
        let nota;
        let notas=""; 
        let suma=0 
        estudiante0 = new estudiante (prompt("Ingrese Nombre"),prompt("Ingrese Apellido"),"5to-B")
        for (let i=1; i<=5; i++){
            nota = parseInt(prompt("Ingrese nota")) 
            notas += nota + "\n"
            suma += nota 
        }
        let promedio = suma/5
        alert("Alumno: "+estudiante0.nombre +"\n"+"Las notas de "+estudiante0.nombre +" son: "+"\n"+notas+"Su promedio es de: "+promedio)
    
        if (promedio >= 6){
            alert("El alumno "+estudiante0.nombre+" aprobó la materia!")
            estudiantesA.push(estudiante0.nombre +" "+ estudiante0.apellido +" "+"("+promedio+")")
        }
        else if (promedio < 6){
            alert("El alumno "+estudiante0.nombre+" tiene que recursar la materia!")
            estudiantesD.push(estudiante0.nombre +" "+ estudiante0.apellido +" "+"("+promedio+")")
        }
        else {
            alert("Ingrese valores validos")
        }
        apagar = prompt("Para apagar el sistema Ingresar (ESC)" + "\n" + "De lo contrario pulse enter")
        
        estudiantesA.sort();
        estudiantesD.sort();
    }
    
    while(apagar != "ESC"){
        calculoPromedios()
    }
    
    let aprobados = document.getElementById("aprobados");
    let desaprobados = document.getElementById("desaprobados");
    let parrafosA;
    let parrafosD;
    
    for (let i = 0; i < estudiantesD.length; i++) {
        parrafosD = document.createElement("p");
        parrafosD.textContent = estudiantesD[i];
        desaprobados.appendChild(parrafosD);
      }
    for (let i = 0; i < estudiantesA.length; i++) {
      parrafosA = document.createElement("p");
      parrafosA.textContent = estudiantesA[i];
      aprobados.appendChild(parrafosA);
    }
} */
//v2.0
/* let nombreForm = "";
let apellidoForm = "";
let notaForm1 = 0;
let notaForm2 = 0;
let notaForm3 = 0;
let notaForm4 = 0;
let notaForm5 = 0; 
let estudiantesA =[]
let estudiantesD =[]
let estudiante0;
let aprobados = document.getElementById("aprobados");
let desaprobados = document.getElementById("desaprobados");
let parrafosA;
let parrafosD;
let suma=0;

function enviarFormulario(event) {
    event.preventDefault(); 
  
     nombreForm = document.getElementById("nombre-form").value
     apellidoForm = document.getElementById("apellido-form").value
     notaForm1 = parseFloat(document.getElementById("note1").value) 
     notaForm2 = parseFloat(document.getElementById("note2").value) 
     notaForm3 = parseFloat(document.getElementById("note3").value) 
     notaForm4 = parseFloat(document.getElementById("note4").value) 
     notaForm5 = parseFloat(document.getElementById("note5").value) 
  
    document.getElementById("formu").reset();
    calculoPromedios()
}
class estudiante{
    constructor(nombre, apellido, curso){
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = curso;
    }
}
function calculoPromedios(){
    let notas = notaForm1 + "\n" +notaForm2 + "\n" + notaForm3 + "\n" + notaForm4 + "\n" + notaForm5 + "\n"
    suma= notaForm1 + notaForm2+ notaForm3+ notaForm4+ notaForm5
    let promedio = suma/5
    estudiante0 = new estudiante (nombreForm,apellidoForm,"5to-B")

    alert("Alumno: "+estudiante0.nombre +"\n"+"Las notas de "+estudiante0.nombre +" son: "+"\n"+notas+"Su promedio es de: "+promedio)

    if (promedio >= 6){
        alert("El alumno "+estudiante0.nombre+" aprobó la materia!")
        estudiantesA.push(estudiante0.nombre +" "+ estudiante0.apellido +" "+"("+promedio+")")
    }
    else if (promedio < 6){
        alert("El alumno "+estudiante0.nombre+" tiene que recursar la materia!")
        estudiantesD.push(estudiante0.nombre +" "+ estudiante0.apellido +" "+"("+promedio+")")
    }
    else {
        alert("Ingrese valores validos")
    }
    // Agregar los nuevos elementos al final de los contenedores
  if (estudiantesD.length > 0) {
    let parrafoD = document.createElement("p");
    parrafoD.textContent = estudiantesD[estudiantesD.length - 1];
    desaprobados.appendChild(parrafoD);
  }

  if (estudiantesA.length > 0) {
    let parrafoA = document.createElement("p");
    parrafoA.textContent = estudiantesA[estudiantesA.length - 1];
    aprobados.appendChild(parrafoA);
  }
} */

//v3.0
/* let nombreForm = "";
let apellidoForm = "";
let notaForm1 = 0;
let notaForm2 = 0;
let notaForm3 = 0;
let notaForm4 = 0;
let notaForm5 = 0;
let estudiantesA = [];
let estudiantesD = [];
let estudiante0;
let aprobados = document.getElementById("aprobados");
let desaprobados = document.getElementById("desaprobados");
let suma = 0;

function enviarFormulario(event) {
  event.preventDefault();
  nombreForm = document.getElementById("nombre-form").value;
  apellidoForm = document.getElementById("apellido-form").value;
  notaForm1 = parseFloat(document.getElementById("note1").value);
  notaForm2 = parseFloat(document.getElementById("note2").value);
  notaForm3 = parseFloat(document.getElementById("note3").value);
  notaForm4 = parseFloat(document.getElementById("note4").value);
  notaForm5 = parseFloat(document.getElementById("note5").value);

  if(isNaN(notaForm1) || notaForm1 < 0 || notaForm1 > 10 ||
    isNaN(notaForm2) || notaForm2 < 0 || notaForm2 > 10 ||
    isNaN(notaForm3) || notaForm3 < 0 || notaForm3 > 10 ||
    isNaN(notaForm4) || notaForm4 < 0 || notaForm4 > 10 ||
    isNaN(notaForm5) || notaForm5 < 0 || notaForm5 > 10){
      alert("Por favor, ingrese notas válidas entre 0 y 10.");
      return;
  }
  
  document.getElementById("formu").reset();
  calculoPromedios();
}

class Estudiante {
  constructor(nombre, apellido, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;
  }
}

function calculoPromedios() {
  let notas = notaForm1 + "\n" + notaForm2 + "\n" + notaForm3 + "\n" + notaForm4 + "\n" + notaForm5 + "\n";
  suma = notaForm1 + notaForm2 + notaForm3 + notaForm4 + notaForm5;
  let promedio = suma / 5;
  estudiante0 = new Estudiante(nombreForm, apellidoForm, "5to-B");

  if ((promedio >= 6) &&(nombreForm != "")&&(apellidoForm != "")) {
    alert("El alumno " + estudiante0.nombre + " aprobó la materia!");
    estudiantesA.push(estudiante0.nombre + " " + estudiante0.apellido + " " + "(" + promedio + ")");
    alert("Alumno: " + estudiante0.nombre + "\n" + "Las notas de " + estudiante0.nombre + " son: " + "\n" + notas + "Su promedio es de: " + promedio);
  } else if ((promedio < 6)&&(nombreForm != "")&&(apellidoForm != "")) {
    alert("El alumno " + estudiante0.nombre + " tiene que recursar la materia!");
    estudiantesD.push(estudiante0.nombre + " " + estudiante0.apellido + " " + "(" + promedio + ")");
    alert("Alumno: " + estudiante0.nombre + "\n" + "Las notas de " + estudiante0.nombre + " son: " + "\n" + notas + "Su promedio es de: " + promedio);
  } else {
    alert("Porfavor Rellene Correctamente Los Datos");
  }

  aprobados.innerHTML = "";
  desaprobados.innerHTML = "";

  for (let i = 0; i < estudiantesD.length; i++) {
    let parrafoD = document.createElement("p");
    parrafoD.textContent = estudiantesD[i];
    desaprobados.appendChild(parrafoD);
  }

  for (let i = 0; i < estudiantesA.length; i++) {
    let parrafoA = document.createElement("p");
    parrafoA.textContent = estudiantesA[i];
    aprobados.appendChild(parrafoA);
  }
} */


//proyecto-final v1.0

/* let productosCargados = [];
let carrito = [];
let precios = [];
let totalCarro = [];
let total=0;
let producto0;
let cargar;
let cargarCarro;
let nombrep;
let preciop;
let idp = 0; */
//let carga = prompt("Para cargar Productos pulse enter" + "\n"+ "Caso contrario escriba (ESC)")

/* class producto{
  constructor(id, nombre, precio){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
  }
}
function agregarId(){
  for(i=0; i<= productosCargados.length; i++){
    idp = (i + 1)
  }
}

function explotar(){
  
}

function subirProducto(){
  while(carga !== "ESC"){
    nombrep = prompt("Ingrese el nombre del producto")
    preciop = parseFloat(prompt("Ingrese el precio del producto"))
    agregarId()
    producto0 = new producto (idp,nombrep,preciop)
  
    if (nombrep ===""||preciop ===""){
      alert("Error al sumar producto! Porfavor vuelva a ingresar los datos")
      carga = prompt("Para cargar Productos pulse enter" + "\n"+ "Caso contrario escriba (ESC)")
    }
    else{
      productosCargados.push("\n"+"("+producto0.id+")"+" "+producto0.nombre +" "+ producto0.precio)
      precios.push(producto0.precio)
      carga = prompt("Para cargar Productos pulse enter" + "\n"+ "Caso contrario escriba (ESC)")
    }
  }
}

function cargarAlCarro(){
  subirProducto()
  while(cargarCarro != "OK"){
    cargarCarro = prompt("Para comprar, ingresar el numero del producto"+"\n"+"Cuando termine ingresar (OK)"+productosCargados)
    carrito.push(productosCargados[cargarCarro-1])
    totalCarro.push(precios[cargarCarro-1])
  }
  carrito.pop()
  totalCarro.pop()

  for (i =0; i<totalCarro.length; i++){
    total += totalCarro[i];
  }

  alert("Productos sumados al carro:"+carrito+"\n"+"\n"+"Total a pagar: "+total)
} */

/* if(carga !== "ESC"){
  cargarAlCarro()
} */
// v2.0
let productosCargados = [];
let carrito = [];
let precios = [];
let totalCarro = 0;
let total = 0;
let idp = 0;
let enlaseCarro = document.getElementById("enlase-carro")
let boton0 = document.getElementById("boton0");
let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
let boton6 = document.getElementById("boton6");
let boton7 = document.getElementById("boton7");
let parrafo1 = document.createElement("p");
let parrafo2 = document.createElement("p");
let parrafo3 = document.createElement("p");
let parrafo4 = document.createElement("p");
let parrafo5 = document.createElement("p");
let parrafo6 = document.createElement("p");
let parrafo7 = document.createElement("p");
let parrafo8 = document.createElement("p");


class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

let producto0 = new Producto(idp, "Coca-Cola |", 800);
productosCargados.push(producto0.nombre);
precios.push(producto0.precio);
parrafo1.textContent = producto0.nombre + "\n" + producto0.precio + "$";
parrafo1.style.display = "flex";
parrafo1.style.justifyContent = "center";
document.getElementById("info1").appendChild(parrafo1);

let producto1 = new Producto(idp, "Fernet Branca |", 1200);
productosCargados.push(producto1.nombre);
precios.push(producto1.precio);
parrafo2.textContent = producto1.nombre + "\n" + producto1.precio + "$";
parrafo2.style.display = "flex";
parrafo2.style.justifyContent = "center";
document.getElementById("info2").appendChild(parrafo2);

let producto2 = new Producto(idp, "Jackdaniels |", 2400);
productosCargados.push(producto2.nombre);
precios.push(producto2.precio);
parrafo3.textContent = producto2.nombre + "\n" + producto2.precio + "$";
parrafo3.style.display = "flex";
parrafo3.style.justifyContent = "center";
document.getElementById("info3").appendChild(parrafo3);

let producto3 = new Producto(idp, "Cerveza Corona |", 850);
productosCargados.push(producto3.nombre);
precios.push(producto3.precio);
parrafo4.textContent = producto3.nombre + "\n" + producto3.precio + "$";
parrafo4.style.display = "flex";
parrafo4.style.justifyContent = "center";
document.getElementById("info4").appendChild(parrafo4);

let producto4 = new Producto(idp, "Bacardi 151 |", 1600);
productosCargados.push(producto4.nombre);
precios.push(producto4.precio);
parrafo5.textContent = producto4.nombre + "\n" + producto4.precio + "$";
parrafo5.style.display = "flex";
parrafo5.style.justifyContent = "center";
document.getElementById("info5").appendChild(parrafo5);

let producto5 = new Producto(idp, "Monkey 4 |", 1800);
productosCargados.push(producto5.nombre);
precios.push(producto5.precio);
parrafo6.textContent = producto5.nombre + "\n" + producto5.precio + "$";
parrafo6.style.display = "flex";
parrafo6.style.justifyContent = "center";
document.getElementById("info6").appendChild(parrafo6);

let producto6 = new Producto(idp, "Absolut |", 5000);
productosCargados.push(producto6.nombre);
precios.push(producto6.precio);
parrafo7.textContent = producto6.nombre + "\n" + producto6.precio + "$";
parrafo7.style.display = "flex";
parrafo7.style.justifyContent = "center";
document.getElementById("info7").appendChild(parrafo7);

let producto7 = new Producto(idp, "RedBull |", 400);
productosCargados.push(producto7.nombre);
precios.push(producto7.precio);
parrafo8.textContent = producto7.nombre + "\n" + producto7.precio + "$";
parrafo8.style.display = "flex";
parrafo8.style.justifyContent = "center";
document.getElementById("info8").appendChild(parrafo8);

function cargarAlCarro0() {
  carrito.push(producto0);
  totalCarro += producto0.precio;
  total += producto0.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
    
  }).showToast();
}
function cargarAlCarro0() {
  carrito.push(producto0);
  totalCarro += producto0.precio;
  total += producto0.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
    
  }).showToast();
}
function cargarAlCarro1() {
  carrito.push(producto1);
  totalCarro += producto1.precio;
  total += producto1.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
    
  }).showToast();
}
function cargarAlCarro2() {
  carrito.push(producto2);
  totalCarro += producto2.precio;
  total += producto2.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
    
  }).showToast();
}
function cargarAlCarro3() {
  carrito.push(producto3);
  totalCarro += producto3.precio;
  total += producto3.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
    
  }).showToast();
}
function cargarAlCarro4() {
  carrito.push(producto4);
  totalCarro += producto4.precio;
  total += producto4.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
    
  }).showToast();
}
function cargarAlCarro5() {
  carrito.push(producto5);
  totalCarro += producto5.precio;
  total += producto5.precio;

  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
    
  }).showToast();
}
function cargarAlCarro6() {
  carrito.push(producto6);
  totalCarro += producto6.precio;
  total += producto6.precio;
  
 Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
    
  }).showToast();
}
function cargarAlCarro7() {
  carrito.push(producto0);
  totalCarro += producto0.precio;
  total += producto0.precio;
  
  Toastify({
    text: "Producto agregado al carrito",
    class:"info",
    duration: 3000, // Duración en milisegundos
    gravity: "top", // Posición del toast (bottom, top, center)
    style:{
      background:"black"
    }
    
  }).showToast();
}

boton0.addEventListener("click", cargarAlCarro0);
boton1.addEventListener("click", cargarAlCarro1);
boton2.addEventListener("click", cargarAlCarro2);
boton3.addEventListener("click", cargarAlCarro3);
boton4.addEventListener("click", cargarAlCarro4);
boton5.addEventListener("click", cargarAlCarro5);
boton6.addEventListener("click", cargarAlCarro6);
boton7.addEventListener("click", cargarAlCarro7);
enlaseCarro.addEventListener('click', function(event) {
  event.preventDefault();
  if (carrito.length == 0) {
    window.location.href="pages/carrito-vacio.html"
  } else {
    window.location.href="pages/carrito.html"
  }
});





