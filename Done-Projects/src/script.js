// agregamos alert para instrucciones al presionar el boton instrucciones
/* var Instrucciones = document.getElementById('btnInstructions');
Instrucciones.addEventListener('click', function() {
    alert('Instrucciones\nIngresa un valor numerico a N, este sera el numero de desplazamiento que usara tu codigo.\nSolo se permite el uso de letras mayusculas');

}); */

// lo guardado en boxOne que se imprima en boxTwo despues de darle clic al boton codifiar 
// lo guardado en boxOne que se imprima en boxTwo despues de darle clic al boton decodifiar  

/* function Code(){
let texto = document.getElementById("boxOne").value; // guardar lo ingresado por el usuario en boxOne 
let offset = document.getElementById('BoxN').value;  // tomar valores del BoxN rango del desplazamiento
let offsetNumber = Number(offset); // creamos un variable para colocar a offset como entero
let caja = []; // creamos un arreglo vacio para guardar los datos de texto ya codificado

for (let i=0; i<texto.length ; ++i) { // se hace un for para recorrer la cadena de texto y saber la longitud

let codificar = ((texto.charCodeAt(i))); // transformar texto a ascii toda la cadena, como se ingresa texto como string se pasa a entero
let resultadoCode = (codificar + offsetNumber); // se suma el numero ascii y el desplazamiento
let resultadoFinal = (String.fromCharCode(resultadoCode)); // imnprimir resultado ascii a abecedario
caja.push(resultadoFinal); // le decimos al arreglo que ordene los valores conforme fueron entrando 

document.getElementById('boxTwo').value = caja.join(''); // imprimir resultado en el textarea boxTwo
}

} */

// decode 

/* function decode(){

let texto2 = document.getElementById("boxOne").value; // guardar lo ingresado por el usuario en boxOne 
let offset2 = document.getElementById('BoxN').value;  // tomar valores del BoxN rango del desplazamiento
let offsetNumber2 = Number(offset2); // creamos un variable para colocar a offset como entero
let caja2 = []; // creamos un arreglo vacio para guardar los datos de texto ya codificado

for (let i=0; i<texto2.length ; ++i) { // se hace un for para recorrer la cadena de texto y saber la longitud

    let decodificar = (texto2.charCodeAt(i)); // transformar de texto a ascii
    let resultadoDecode = (decodificar - offsetNumber2); // se resta el numero ascii y el desplazamiento
    let resultado = (String.fromCharCode(resultadoDecode)); // se tranforma de 
    console.log(resultado);
    caja2.push(resultado);
    document.getElementById('boxTwo').value = caja2.join('');
}
} */

// boton borrar para limpiar los campos 
