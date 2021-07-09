

const cipher = {
    code: function (texto,offset){
        
       
        let offsetNumber = Number(offset); // creamos un variable para colocar a offset como entero
        let caja = []; // creamos un arreglo vacio para guardar los datos de texto ya codificado
        
        for (let i=0; i<texto.length ; ++i) { // se hace un for para recorrer la cadena de texto y saber la longitud
        
        let codificar = ((texto.charCodeAt(i))); // transformar texto a ascii toda la cadena, como se ingresa texto como string se pasa a entero
        let resultadoCode = (codificar + offsetNumber); // se suma el numero ascii y el desplazamiento
        let resultadoFinal = (String.fromCharCode(resultadoCode)); // imnprimir resultado ascii a abecedario
        caja.push(resultadoFinal); // le decimos al arreglo que ordene los valores conforme fueron entrando 
        
       
        }
        return caja;

        },

    decode: function(texto2,offset2){

        let offsetNumber2 = Number(offset2); // creamos un variable para colocar a offset como entero
        let caja2 = []; // creamos un arreglo vacio para guardar los datos de texto ya codificado

        for (let i=0; i<texto2.length ; ++i) { // se hace un for para recorrer la cadena de texto y saber la longitud

        let decodificar = (texto2.charCodeAt(i)); // transformar de texto a ascii
        let resultadoDecode = (decodificar - offsetNumber2); // se resta el numero ascii y el desplazamiento
        let resultado = (String.fromCharCode(resultadoDecode)); // se tranforma de ascii a adecedario
        caja2.push(resultado); // guarda resultado en el arreglo caja2 y lo acomoda 
}
        return caja2;
  },

    alerta: function(){
        alert('Instrucciones:\nIngresa un valor numerico a N, este sera el numero de desplazamiento que usara tu codigo.\nNo dejes espacios en blanco mas que el ultimo recuadro donde imprimira el resultado.');
    },

    borrar: function(){
      btnClear();

    }
};

export default cipher;



