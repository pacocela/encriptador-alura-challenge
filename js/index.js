const div_container = document.getElementById('resolved-div');
const copiar = document.getElementById('copiar');
const resolved = document.querySelector('.resolved');
const mensaje = document.getElementById('mensaje');


//Funcion principal para el boton de encriptacion
function encriptadorTexto(){
    let textoEscrito=obtenerTextoEscrito();
    let textoEncriptado=encriptarTexto(textoEscrito);
    document.getElementById('mensaje-resuelto').innerText=textoEncriptado;
    document.getElementById('mensaje').value="";
    div_container.style.display = 'none';
    copiar.style.display = 'block';
    resolved.style.justifyContent = 'space-between';
    mensaje.value = '';
}

//Funcion que encripta el texto escrito
function encriptarTexto(texto){
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    return textoEncriptado;
}

//Funcion principal para el boton de desencriptado
function desencriptadorTexto(){
    let textoEscrito=obtenerTextoEscrito();
    let textoDesencriptado=desencriptarTexto(textoEscrito);
    document.getElementById('mensaje-resuelto').innerText=textoDesencriptado; 
    document.getElementById('mensaje').value="";
    div_container.style.display = 'none';
    copiar.style.display = 'block';
    resolved.style.justifyContent = 'space-between';
    mensaje.value = '';
}

//Funcion que desencriptar el texto escrito
function desencriptarTexto(texto) {
    // Creamos un mapa inverso para desencriptar
    let mapaDesencriptar = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Reemplazar las palabras encriptadas según las reglas inversas
    let textoDesencriptado = texto.replace(/enter|imes|ai|ober|ufat/g, match => mapaDesencriptar[match]);

    return textoDesencriptado;
}


//Funcion para el boton de copiar
async function copiarTexto(){
    let texto=document.getElementById('mensaje-resuelto').innerHTML;
    await navigator.clipboard.writeText(texto);
}

//Funcion para obtener texto escrito
function obtenerTextoEscrito(){
    let textoEscrito=document.getElementById('mensaje').value;
    return textoEscrito;
}

//Funcion que verifica texto escrito sea correcto
function validarTextoEscrito() {
    let textArea = document.getElementById('mensaje');

    textArea.addEventListener('input', (e) => {
        let entradaTexto = e.data;

        if (entradaTexto !== null) {
            let ultimaLetra = entradaTexto.charAt(entradaTexto.length - 1);

            // Verificar si la letra es una letra minúscula, espacio en blanco o letra "ñ"
            if (!(ultimaLetra.toLowerCase() === ultimaLetra && /^[a-zñ\s]$/.test(ultimaLetra))) {
                // Eliminar la última letra si no cumple con las condiciones
                textArea.value = textArea.value.slice(0, -1);
            }
        }
    });
    textArea.addEventListener('paste', function (e) {
        // Manejar el evento de pegado
        let textoPegado = e.clipboardData.getData('text');    
        if(!/^[a-zñ\s]+$/.test(textoPegado)){
            textArea.value='';
            e.preventDefault();
        }
    });
}
validarTextoEscrito();