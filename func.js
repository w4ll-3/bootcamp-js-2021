function mensaje(prefijo, formateador){
    
    return function(texto){
        return formateador(prefijo, texto);
    } 
}

const formatoBienvenida = function(prefijo, texto){    
    return "¡" +  prefijo +  " " + texto + "!";
}

const formatoDespedida = function(prefijo, texto){    
    return prefijo + " " + texto + "... :c";
}


const b = mensaje("hola", formatoBienvenida);
const d = mensaje("adios", formatoDespedida);

console.log(b("mundo"));
console.log(d("mundo"));