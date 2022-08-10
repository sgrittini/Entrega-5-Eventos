let inversion;
//Ejemplo de definicion de clase
class plazoFijo{
    constructor(){
        this.mes,
        this.tna,
        this.interes,
        this.inversion
    }
}
let elMensaje;




function calcular() {
    elMensaje =[];
    //Ejemplo de definicion de array
    const arrayInversion = [];
    if ( validarInversion()) {
        //Ejemplo de Uso de arrow function
        const TASA = () => document.getElementById("inpTasa").value / 100;
        let tna = TASA();
        let totalMeses = document.getElementById("inpMeses").value;
        let ganaciaNeta = 0;
       
        let inversionInicial = inversion;
        for (let index = 0; index < totalMeses; index++) {
            let interes = calcularInteres(inversion, tna);
            //creacion de Objeto y seteo de atributos
            let miPlazoFijo = new plazoFijo();
            miPlazoFijo.mes = index + 1;
            miPlazoFijo.tna=document.getElementById("inpTasa").value;
            miPlazoFijo.interes=interes;
            miPlazoFijo.inversion = inversion;          
            if (document.getElementById("flagReInvertir").checked) {
                inversion = parseFloat(inversion) + parseFloat(interes);

            }
            else {
                ganaciaNeta = ganaciaNeta + interes;
            }
            //Agregado al array del objeto
            arrayInversion.push(miPlazoFijo);
        }
        mesage(armarMensaje(arrayInversion,inversion,inversionInicial,ganaciaNeta));
    }
}


function calcularInteres(valor, tasa) {
    return valor * (tasa * 30 / 365);
}
function formatNumero(numero) {
    let numeroStr= Intl.NumberFormat('de-DE').format(numero);
    if(numeroStr.indexOf(",")<0)
    {
        return numeroStr+",00";    
    }
    return numeroStr;
}
function limpiar(){
    //Eliminamos el mensaje por pantalla si existe alguno
    // de otra corrida
    let p = document.getElementById("divResultado");
    if (p != null) {
        let padre = p.parentNode;
        padre.removeChild(p);
    }
    //document.getElementById("inpInversion").value="0";
}
function mesage(arrayMensaje) {
    //Eliminamos el mensaje por pantalla si existe alguno
    // de otra corrida
    limpiar();
    //Evaluamos la opcion elegida de salida 
    if (document.getElementById("alert").checked) {
        let mensaje="";
        for (const iterator of arrayMensaje) {
            mensaje=mensaje + iterator+"\n";
        }
        alert(mensaje);
    }
    if (document.getElementById("console").checked) {
        let mensaje="";
        for (const iterator of arrayMensaje) {
            mensaje=mensaje + iterator+"\n";
        }
        console.log(mensaje);
    }
 

    if (document.getElementById("pantalla").checked) {
        //Creamos un div dentro de del DIV mensajeDiv
        let divResultado = document.getElementById("mensajeDiv");
        let parent = document.createElement("div");
        parent.setAttribute("id", "divResultado");
        divResultado.appendChild(parent);
        
        //Iteramos sobre el array y creamos un elemento que añadimos
        // al div generado (divResultado)
        for (const iterator of arrayMensaje) {
            let elemento = document.createElement("h5");    
            elemento.setAttribute("id", "h4Resultado");
            elemento.innerHTML=iterator;
            parent.appendChild(elemento);
        }
        
       
        
    }

   
    
}

function formatoNumerico(input) {
    if (validarInversion()) {
        document.getElementById("inpInversion").value = Intl.NumberFormat('de-DE').format(parseInt(input.value)) + ",00";
   
    }

}
function validarInversion()
{
    
    inversion = (document.getElementById("inpInversion").value).replaceAll(".", "").replace(",", ".");
    if (isNaN(inversion)||inversion=="") {
        alert("debe ingresar un numero valido");
        document.getElementById("inpInversion").focus();
        return false;
    }
    else
    {   
        return true;
    }
    
}
function armarMensaje (array,inversion,inversionInicial,ganaciaNeta)
{
    for (const element of array)  {
        elMensaje.push(`mes: ${element.mes} acumulado: ${formatNumero(element.inversion)} interes=${formatNumero(element.interes)}`);   
    }

    if (document.getElementById("flagReInvertir").checked) {
        elMensaje.push(`total ganancia ${formatNumero(parseFloat(inversion) - parseFloat(inversionInicial))}`);
    }
    else {
        elMensaje.push(`total ganancia ${formatNumero(ganaciaNeta)}`);
    }
    return elMensaje;
}