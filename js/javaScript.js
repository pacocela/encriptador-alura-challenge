(() => {

    const encriptar = document.getElementById('encriptar');
    const desencriptar = document.getElementById('desencriptar');
    const copiar = document.getElementById('copiar');
    const div_container = document.getElementById('resolved-div');
    const resolved = document.querySelector('.resolved');


    const mensaje = document.getElementById('mensaje');
    const mensajeResuelto = document.getElementById('mensaje-resuelto');


    encriptar.addEventListener('click', encriptar_mensaje);


    desencriptar.addEventListener('click', desencriptar_mensaje);

    copiar.addEventListener('click', () => {
        navigator.clipboard.writeText(mensajeResuelto.textContent);
    })


    function encriptar_mensaje() {

        const cadena = mensaje.value;

        if (!cadena.length) return;

        if (!validarMensaje(cadena)) {
            alert("Solo letras minúsculas y sin acentos");
            mensaje.value = '';
            return;
        }

        let newCadena = '';

        for (let i = 0; i < cadena.length; i++) {

            const char = cadena.charAt(i);

            switch (char) {
                case 'a':
                    newCadena += 'ai';
                    break;
                case 'e':
                    newCadena += 'enter';
                    break;
                case 'i':
                    newCadena += 'imes';
                    break;
                case 'o':
                    newCadena += 'ober';
                    break;
                case 'u':
                    newCadena += 'ufat';
                    break;
                default:
                    newCadena += char;
                    break;
            }

        }

        mensajeEncriptado(newCadena);

    }

    function desencriptar_mensaje() {

        let cadena = mensaje.value;

        if (!cadena.length) return;

        if (!validarMensaje(cadena)) {
            alert("Solo letras minúsculas y sin acentos");
            mensaje.value = '';
            return;
        }

        if (cadena.includes('ai', 0))
            cadena = cadena.replaceAll('ai', 'a');

        if (cadena.includes('enter', 0))
            cadena = cadena.replaceAll('enter', 'e');

        if (cadena.includes('imes', 0))
            cadena = cadena.replaceAll('imes', 'i');

        if (cadena.includes('ober', 0))
            cadena = cadena.replaceAll('ober', 'o');

        if (cadena.includes('ufat', 0))
            cadena = cadena.replaceAll('ufat', 'u');

        mensajeEncriptado(cadena);

    }

    function mensajeEncriptado(msj) {

        mensajeResuelto.textContent = msj;

        div_container.style.display = 'none';

        copiar.style.display = 'block';

        resolved.style.justifyContent = 'space-between'

        mensaje.value = '';

    }

    function validarMensaje(msj) {

        const acentosNumeros = ['á', 'é', 'í', 'ó', 'ú', 'ü', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ü', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

        for (let i = 0; i < msj.length; i++) {
            if (acentosNumeros.includes(msj.charAt(i))) {
                return false;
            }
        }

        return true;
    }

})();