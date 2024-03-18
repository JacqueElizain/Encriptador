let inputText = document.getElementById('input-text');
let outputText = document.getElementById('output-text');
let btnEncriptar = document.getElementById('btn-encriptar');
let btnDesencriptar = document.getElementById('btn-desencriptar');
let btnCopiar = document.getElementById('btn-copiar');




//se ejecuta al hacer clic en el btn encriptar
btnEncriptar.addEventListener('click', () => {
    //obtener el texto 
    let textoIngresado = inputText.value;

    //si no cumple la validación da un mensaje y no permite continuar
    if (!validarTexto(textoIngresado)) {
        alert('El texto ingresado solo puede contener letras minúsculas y sin acentos.');
        return; 
    }
    
    //encripta el texto llamando a la funcion encriptar
    let textoEncriptado = encriptar(textoIngresado);

    //muestra el texto encriptado
    outputText.value = textoEncriptado;

    //oculta la imagen y el texto que esran en el segundo textarea
    document.querySelector('.muñecoytexto').style.display = 'none';

    //aparece el boton "Copiar" en el segundo textarea
    document.querySelector('.btn-copiar').style.display = 'block';

    //limpia el textarea de entrada
    inputText.value = '';
});

//se ejecuta al hacer clic en el btn desencriptar
btnDesencriptar.addEventListener('click', () => {
    //obtiene el texto
    textoIngresado = inputText.value;

    let textoDesencriptado = desencriptar(textoIngresado);

    //muetra el texto desencriptado
    outputText.value = textoDesencriptado;

    document.querySelector('.muñecoytexto').style.display = 'none';

    document.querySelector('.btn-copiar').style.display = 'block';

    inputText.value = '';
});

// se ejecuta al hacer clic en el btn copiar
btnCopiar.addEventListener('click', () => {
    //obtiener el texto
    let textoCopiar = outputText.value;

    //copiar el texto
    navigator.clipboard.writeText(textoCopiar)
        .then(() => {
            outputText.select();
        })
        .catch(err => {
            console.error('Error al copiar el texto:', err);
            alert('Error al copiar el texto. Por favor, inténtelo nuevamente.');
        });
});






// función para encriptar
function encriptar(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// función para desencriptar el texto
function desencriptar(text) {
    return text.replace(/ufat/g, 'u')
               .replace(/ober/g, 'o')
               .replace(/ai/g, 'a')
               .replace(/imes/g, 'i')
               .replace(/enter/g, 'e');
}

//función de validacion del texto que se ingresa
function validarTexto(texto) {
    let regex = /^[a-z\s]+$/;

    return regex.test(texto);
}

