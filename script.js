var logoOuro = document.querySelector(".contenedor_ouro_logo");
var mensajePredeterminado = document.querySelector(".mensaje_predeterminado");
var resultado = document.querySelector(".frase_resultado");
var frase = document.querySelector(".frase");

function minuscula(e){
    e.value = e.value.toLowerCase();
}

//Función objetivo para el botón encriptar
function encriptar(){
    ocultarAdelante();
    var frase = recuperarTexto();
    resultado.textContent = encriptar_frase(frase);
}

//Función objetivo para el botón desencriptar
function desencriptar(){
    ocultarAdelante();
    var frase = recuperarTexto();
    resultado.textContent = desencriptar_frase(frase);
}

//Función para recuperar el texto escrito y proceder al desencriptado o encriptado
function recuperarTexto(){
    var frase = document.querySelector(".frase");
    return frase.value;
}

//Función para ocultar el logo y el mensaje predeterminado una vez se obtenga el texto resultado
function ocultarAdelante(){
    logoOuro.classList.add("ocultar");
    mensajePredeterminado.classList.add("ocultar");
}
//Función para encriptar el texto escrito por el usuario
function encriptar_frase(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

//Función para desencriptar el texto escrito por el usuario
function desencriptar_frase(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

//Función para copiar el texto resultado ya sea encriptado o desencriptado
function copiar_resultado(){
    var textoResultado = document.querySelector(".frase_resultado").textContent;
    navigator.clipboard.writeText(textoResultado);
}
