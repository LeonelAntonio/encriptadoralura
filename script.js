const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


/** La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" **/


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}



function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();



    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1], matrizCodigo);

        }
    }
        
    return stringEncriptada;

}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll( matrizCodigo[i][1],matrizCodigo[i][0], matrizCodigo);

        }
    }
        
    return stringDesencriptado;

}

document.querySelector(".copiar").addEventListener("click", function () {
    let copyText = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(copyText).then(() => {
      document.querySelector(".mensajecopiado").classList.add("show");
      setTimeout(() => {
        document.querySelector(".mensajecopiado").classList.remove("show");
      }, 1300);
    });
  });


