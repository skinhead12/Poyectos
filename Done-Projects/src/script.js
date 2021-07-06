// agregamos alert para instrucciones al presionar el boton instrucciones

var Instrucciones = document.getElementById('btnInstructions');
Instrucciones.addEventListener('click', function() {
    alert('Instrucciones\nIngresa un valor numerico a N, este sera el numero de desplazamiento que usara tu codigo.\nSolo se permite el uso de letras mayusculas');

});

// lo guardado en boxOne que se imprima en boxTwo despues de darle clic al boton codifiar 
// lo guardado en boxOne que se imprima en boxTwo despues de darle clic al boton decodifiar  
function Code(){
let Texto = document.getElementById("boxOne").value; // guardar lo ingresado por el usuario en boxOne 
let offset = document.getElementById('BoxN').value;  // tomar valores del BoxN rango del desplazamiento
parseInt(offset); //al ingresar es texto lo pasamos a entero
console.log(typeof offset);

for (let i=0; i<=Texto.length ; ++i) { // se hace un for para recorrer la cadena de texto y saber la longitud

let codificar = Number((Texto.charCodeAt(i))); // transformar texto a ascii toda la cadena, como se ingresa texto como string se pasa a entero
let ResultadoCode = (codificar + offset); // se suma el numero ascii y el desplazamiento
console.log(typeof ResultadoCode);
document.getElementById('boxTwo').value = ResultadoCode; // imprimir resultado en el textarea boxTwo

}

}



// decode 

var Decode = function(){
for (let i=0; i<=Texto.length ; ++i) { // se hace un for para recorrer la cadena de texto y saber la longitud

    let decodificar = (Texto.fromCharCode(i)); // transformar ascii a texto toda la cadena
    Number(decodificar); // como se ingresa texto como string se pasa a entero
    console.log(decodificar);
    let ResultadoCode = (decodificar - offset); // se resta el numero ascii y el desplazamiento
    console.log(ResultadoCode);
}
}

