import cipher from './cipher.js';

const btnCifrar = document.getElementById('btnCodifica'); // evento del boton codifica 
btnCifrar.addEventListener ('click', function(){
const texto = document.getElementById('boxOne').value; // tomar valores de boxone para codificar
let offset = document.getElementById('BoxN').value;  // tomar valores del BoxN rango del desplazamiento
const caja = cipher.code(texto, offset);  // creamos un arreglo 
document.getElementById('boxTwo').value = caja.join(''); // imprimir resultado en el textarea boxTwo
    cipher.code(texto);
    });

const btnDecifrar = document.getElementById('btnDecodifica'); // evento del boton decodifica
btnDecifrar.addEventListener('click', function(){
const texto2 = document.getElementById('boxOne').value; // tomar valores de boxone para decodificar
let offset2 = document.getElementById('BoxN').value;  // tomar valores del BoxN rango del desplazamiento
const caja2 = cipher.decode(texto2, offset2);
document.getElementById('boxTwo').value = caja2.join(''); // imprimir resultado en el textarea boxTwo
cipher.decode(texto2);    
    });    

const btnAlerta = document.getElementById('btnInstructions');
btnAlerta.addEventListener('click', function(){
cipher.alerta();    
});

const btnClear = document.getElementById('btnBorrar'); // verificar boton borrar
btnClear.addEventListener('click', function(){
document.getElementById('boxOne').value = '';
document.getElementById('BoxN').value = '';
document.getElementById('boxTwo').value = '';
cipher.borrar();    
});


