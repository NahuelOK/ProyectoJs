let estudiantesA = []
let estudiantesD = []
let nombre;
let apagar;
let elegir;
let num;
alert("Calcula los promedios de los estudiantes")

class curso{
    constructor(nombreC, cantidadEstudiantes, profesor){
        this.nombreC = nombreC;
        this.cantidadEstudiantes = cantidadEstudiantes;
        this.profesor = profesor;
    }
}

let curso1 = new curso (" 5to",20,"Profesor Jirafales")
let curso2 = new curso (" 3ro",27,"Profesor Manuel")
let curso3 = new curso (" 2do",16,"Profesor Theo")

function elegirCurso(){
    elegir = parseInt(prompt("Ingrese el curso" + "\n" + "1) para 5to"+ "\n" + "2) para 3ro"+ "\n" + "3) para 2do")) 
    if(elegir == 1){
        num = curso1.nombreC
    }
    else if(elegir == 2){
        num = curso2.nombreC
    }
    else if(elegir == 3){
        num = curso3.nombreC
    }
    else{
        num = "    Curso: Desconocido"
    }
}

function calculoPromedios(){
    nombre = prompt("Ingrese el nombre del alumno") 
    elegirCurso()
    let nota;
    let notas=""; 
    let suma=0 
    for (let i=1; i<=5; i++){
        nota = parseInt(prompt("Ingrese nota")) 
        notas += nota + "\n"
        suma += nota 
    }
    let promedio = suma/5
    alert("Alumno: "+nombre + num +"\n"+"Las notas de "+nombre +" son: "+"\n"+notas+"Su promedio es de: "+promedio)

    if (promedio >= 6){
        alert("El alumno "+nombre+" aprobó la materia!")
        estudiantesA.push(nombre)
    }
    else if (promedio < 6){
        alert("El alumno "+nombre+" tiene que recursar la materia!")
        estudiantesD.push(nombre)
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

alert("Aprobados: "+estudiantesA +"\n"+ "\n" + "Desaprobados: "+estudiantesD)