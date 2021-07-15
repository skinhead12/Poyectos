

const cipher = {
    encode: function (texto,offset){
        
       
        let offsetNumber = Number(offset); // creamos un variable para colocar a offset como entero
        let caja = []; // creamos un arreglo vacio para guardar los datos de texto ya codificado
        
        for (let i=0; i<texto.length ; ++i) { // se hace un for para recorrer la cadena de texto y saber la longitud
        
        let codificarAscii = ((texto.charCodeAt(i))); // transformar texto a ascii toda la cadena, como se ingresa texto como string se pasa a entero
        
        // creamos una condiiconal para colocar un rango
        // si el texto codificado es menor o igual a 65 y menor o igual a 90 
        if (codificarAscii >= 65 && codificarAscii <= 90){
        // creamos posicion en base a la formula cesar ((x - 65 + n) % 26 + 65) mayusculas        
            let posicion = (codificarAscii - 65 + offsetNumber) % 26 + 65;
            let mensajeCodificado = (String.fromCharCode(posicion));
            caja.push(mensajeCodificado);
          
        // creamos posicion en base a la formula cesar ((x - 97 + n) % 26 + 97) minusculas
        } else if   (codificarAscii >= 97 && codificarAscii <= 122){
            let posicion = (codificarAscii - 97 + offsetNumber) % 26 + 97; 
            let mensajeCodificado = (String.fromCharCode(posicion));
            caja.push(mensajeCodificado);


        } else if (codificarAscii >= 32 && codificarAscii <= 64){
            let posicion = (codificarAscii - 32 + offsetNumber) % 33 + 32; 
            let mensajeCodificado = (String.fromCharCode(posicion));
            caja.push(mensajeCodificado);
            
        } else if (codificarAscii >= 123 && codificarAscii <= 126){
            let posicion = (codificarAscii - 123 + offsetNumber) % 3 + 123; 
            let mensajeCodificado = (String.fromCharCode(posicion));
            caja.push(mensajeCodificado);

        } else {
            let resultadoCode = (codificarAscii + offsetNumber); // se suma el numero ascii y el desplazamiento
            let ResultadoFinal = (String.fromCharCode(resultadoCode)); // imnprimir resultado ascii a abecedario
            caja.push(ResultadoFinal); // le decimos al arreglo que ordene los valores conforme fueron entrando
        }
        }
        return caja;

        },

    decode: function(texto,offset){

        let offsetNumber = Number(offset); // creamos un variable para colocar a offset como entero
        let caja = []; // creamos un arreglo vacio para guardar los datos de texto ya codificado

        for (let i=0; i<texto.length ; ++i) { // se hace un for para recorrer la cadena de texto y saber la longitud

            let codificarAscii = ((texto.charCodeAt(i))); // transformar texto a ascii toda la cadena, como se ingresa texto como string se pasa a entero
        
            // creamos una condiiconal para colocar un rango
            // si el texto codificado es menor o igual a 65 y menor o igual a 90 
            if (codificarAscii >= 65 && codificarAscii <= 90){
             // creamos posicion en base a la formula cesar ((x + 65 - n) % 26 + 65) mayusculas           
                let posicion = (codificarAscii - 90 - offsetNumber) % 26 + 90;
                let mensajeCodificado = (String.fromCharCode(posicion));
                caja.push(mensajeCodificado);
              
        // creamos posicion en base a la formula cesar ((x + 97 - n) % 26 + 97) minusculas
            } else if   (codificarAscii >= 97 && codificarAscii <= 122){
                let posicion = (codificarAscii - 122 - offsetNumber) % 26 + 122;
                let mensajeCodificado = (String.fromCharCode(posicion));
                caja.push(mensajeCodificado);
               
            } else if (codificarAscii >= 32 && codificarAscii <= 64){
                let posicion = (codificarAscii - 64 - offsetNumber) % 26 + 64;
                let mensajeCodificado = (String.fromCharCode(posicion));
                caja.push(mensajeCodificado);

            } else if (codificarAscii >= 123 && codificarAscii <= 126){
                let posicion = (codificarAscii - 126 - offsetNumber) % 3 + 126;
                let mensajeCodificado = (String.fromCharCode(posicion));
                caja.push(mensajeCodificado);

            } else {
                let resultadoCode = (codificarAscii - offsetNumber); // se suma el numero ascii y el desplazamiento
                let ResultadoFinal = (String.fromCharCode(resultadoCode)); // imnprimir resultado ascii a abecedario
                caja.push(ResultadoFinal); // le decimos al arreglo que ordene los valores conforme fueron entrando
            }
    }
        return caja;
    },

    alerta: function(){
        alert('Instrucciones:\nIngresa un valor numerico a N, este sera el numero de desplazamiento que usara tu codigo.\nNo dejes espacios en blanco mas que el ultimo recuadro donde imprimira el resultado.');
    }

};

export default cipher;



