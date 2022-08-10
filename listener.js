let botonAceptar = document.getElementById("boton1");
botonAceptar.onclick=()=>calcular();

let botonReset = document.getElementById("boton2");
botonReset.onclick=()=>limpiar();

let montoIngresado = document.getElementById("inpInversion");
montoIngresado.onchange=()=>formatoNumerico(montoIngresado);
montoIngresado.onfocus=()=>montoIngresado.select();