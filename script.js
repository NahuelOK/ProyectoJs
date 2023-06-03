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
let nombreForm = "";
let apellidoForm = "";
let notaForm1 = 0;
let notaForm2 = 0;
let notaForm3 = 0;
let notaForm4 = 0;
let notaForm5 = 0; 
let estudiantesA = []
let estudiantesD = []
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

  alert("Alumno: " + estudiante0.nombre + "\n" + "Las notas de " + estudiante0.nombre + " son: " + "\n" + notas + "Su promedio es de: " + promedio);

  if (promedio >= 6) {
    alert("El alumno " + estudiante0.nombre + " aprobó la materia!");
    estudiantesA.push(estudiante0.nombre + " " + estudiante0.apellido + " " + "(" + promedio + ")");
  } else if (promedio < 6) {
    alert("El alumno " + estudiante0.nombre + " tiene que recursar la materia!");
    estudiantesD.push(estudiante0.nombre + " " + estudiante0.apellido + " " + "(" + promedio + ")");
  } else {
    alert("Ingrese valores válidos");
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
}