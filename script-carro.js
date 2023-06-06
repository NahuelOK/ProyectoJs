
const listaValores = document.getElementById("listaLocalStorage");

for (let i = 0; i < localStorage.length; i++) {
  const llave = localStorage.key(i);
  const obtenerLlave = localStorage.getItem(llave);

  // Parsear el valor almacenado en JSON
  const producto = (obtenerLlave);

  // Crear un nuevo elemento li para cada producto
  let nombreElemento = document.createElement("li");
  nombreElemento.textContent = producto

  // Agregar el nuevo elemento li a la lista
  listaValores.appendChild(nombreElemento);
}
