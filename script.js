function calculoPromedios(){
    let nombre = prompt("Ingrese el nombre del alumno") 
    let nota;
    let notas=""; 
    let suma=0 
    for (let i=1; i<=5; i++){
        nota = parseInt(prompt("Ingrese nota")) 
        notas += nota + "\n"
        suma += nota 
    }
    let promedio = suma/5
    alert("Alumno: "+nombre +"\n"+"Las notas de "+nombre +" son: "+"\n"+notas+"Su promedio es de: "+promedio)

    if (promedio >= 6){
        alert("El alumno "+nombre+" aprobó la materia!")
    }
    else if (promedio < 6){
        alert("El alumno "+nombre+" tiene que recursar la materia!")
    }
    else {
        alert("Ingrese valores validos")
    }
}
alert("Calcula los promedios de los estudiantes")
calculoPromedios()




