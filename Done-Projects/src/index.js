import cipher from './cipher.js';

const btnCifrar = document.getElementById('btnCodifica'); // boton codifica
const btnDecifrar = document.getElementById('btnDecodifica'); // boton decodifica
const btnAlerta = document.getElementById('btnInstructions'); // boton instrucciones
const clear = document.getElementById('btnBorrar'); // boton borrar 

  // evento boton cifrar
btnCifrar.addEventListener ('click', function(){    
const texto = document.getElementById('boxOne').value; // tomar valores de boxone para codificar
const offset = document.getElementById('BoxN').value;  // tomar valores del BoxN rango del desplazamiento
const caja = cipher.encode(texto, offset);  // creamos un arreglo 
document.getElementById('boxTwo').value = caja.join(''); // imprimir resultado en el textarea boxTwo
    });

    // evento boton decifrar
btnDecifrar.addEventListener('click', function(){
const texto = document.getElementById('boxOne').value; // tomar valores de boxone para codificar
const offset = document.getElementById('BoxN').value;  // tomar valores del BoxN rango del desplazamiento
let caja = cipher.decode(texto, offset);
document.getElementById('boxTwo').value = caja.join(''); // imprimir resultado en el textarea boxTwo 
 });    

// boton instrucciones
btnAlerta.addEventListener('click', function(){
cipher.alerta();    
});

// boton borrar
clear.addEventListener('click', function() {
    document.getElementById('boxOne').value = '';
    document.getElementById('BoxN').value = '';
    document.getElementById('boxTwo').value = '';
});

