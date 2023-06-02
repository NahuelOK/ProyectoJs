let boton = document.getElementById("botoncito");
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
}

