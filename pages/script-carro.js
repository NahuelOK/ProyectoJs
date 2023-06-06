let div = document.getElementById("resultados");
let valorExistente = localStorage.getItem('clave');
let valorExistente2 = localStorage.getItem('clave2');
let valorExistente3 = localStorage.getItem('clave3');
let valorExistente4 = localStorage.getItem('clave4');
let valorExistente5 = localStorage.getItem('clave5');
let valorExistente6 = localStorage.getItem('clave6');
let valorExistente7 = localStorage.getItem('clave7');
let valorExistente8 = localStorage.getItem('clave8');   
let valorParseado = JSON.parse(valorExistente);
let valorParseado2 = JSON.parse(valorExistente2);
let valorParseado3 = JSON.parse(valorExistente3);
let valorParseado4 = JSON.parse(valorExistente4);
let valorParseado5 = JSON.parse(valorExistente5);
let valorParseado6 = JSON.parse(valorExistente6);
let valorParseado7 = JSON.parse(valorExistente7);
let valorParseado8 = JSON.parse(valorExistente8);
let totalGuardado = localStorage.getItem("total");
let mostrarTotal =  document.getElementById("total-value")
mostrarTotal.innerHTML = totalGuardado;
let botonBorrar = document.getElementById("delete")

if (valorParseado !== null) {
  if (valorParseado.length === 1) {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = valorParseado;
    div.appendChild(parrafo);
  } else {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = valorParseado[1] + " (" + valorParseado.length + ")";
    div.appendChild(parrafo);
  }
}
if (valorParseado2 !== null) {
    if (valorParseado2.length === 1) {
      let parrafo2 = document.createElement("p");
      parrafo2.innerHTML = valorParseado2;
      div.appendChild(parrafo2);
    } else {
      let parrafo2 = document.createElement("p");
      parrafo2.innerHTML = valorParseado2[1] + " (" + valorParseado2.length + ")";
      div.appendChild(parrafo2);
    }
  }
if (valorParseado3 !== null) {
    if (valorParseado3.length === 1) {
      let parrafo3 = document.createElement("p");
      parrafo3.innerHTML = valorParseado3;
      div.appendChild(parrafo3);
    } else {
      let parrafo3 = document.createElement("p");
      parrafo3.innerHTML = valorParseado3[1] + " (" + valorParseado3.length + ")";
      div.appendChild(parrafo3);
    }
  }
  if (valorParseado4 !== null) {
    if (valorParseado4.length === 1) {
      let parrafo4 = document.createElement("p");
      parrafo4.innerHTML = valorParseado4;
      div.appendChild(parrafo4);
    } else {
      let parrafo4 = document.createElement("p");
      parrafo4.innerHTML = valorParseado4[1] + " (" + valorParseado4.length + ")";
      div.appendChild(parrafo4);
    }
  }
if (valorParseado5 !== null) {
  if (valorParseado5.length === 1) {
    let parrafo5 = document.createElement("p");
    parrafo5.innerHTML = valorParseado5;
    div.appendChild(parrafo5);
  } else {
    let parrafo5 = document.createElement("p");
    parrafo5.innerHTML = valorParseado5[1] + " (" + valorParseado5.length + ")";
    div.appendChild(parrafo5);
  }
}
if (valorParseado6 !== null) {
  if (valorParseado6.length === 1) {
    let parrafo6 = document.createElement("p");
    parrafo6.innerHTML = valorParseado6;
    div.appendChild(parrafo6);
  } else {
    let parrafo6 = document.createElement("p");
    parrafo6.innerHTML = valorParseado6[1] + " (" + valorParseado6.length + ")";
    div.appendChild(parrafo6);
  }
}
if (valorParseado7 !== null) {
  if (valorParseado7.length === 1) {
    let parrafo7 = document.createElement("p");
    parrafo7.innerHTML = valorParseado7;
    div.appendChild(parrafo7);
  } else {
    let parrafo7 = document.createElement("p");
    parrafo7.innerHTML = valorParseado7[1] + " (" + valorParseado7.length + ")";
    div.appendChild(parrafo7);
  }
}
if (valorParseado8 !== null) {
  if (valorParseado8.length === 1) {
    let parrafo8 = document.createElement("p");
    parrafo8.innerHTML = valorParseado8;
    div.appendChild(parrafo8);
  } else {
    let parrafo8 = document.createElement("p");
    parrafo8.innerHTML = valorParseado8[1] + " (" + valorParseado8.length + ")";
    div.appendChild(parrafo8);
  }
}

document.getElementById("delete").addEventListener("click",function(){
  localStorage.clear();
  if (localStorage.length == 0) {
    window.location.href="carrito-vacio.html"
  } else {
    window.location.href="carrito.html"
  }
});