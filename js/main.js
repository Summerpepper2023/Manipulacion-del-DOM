const figura = document.getElementById('figura')
const titulo = document.querySelector('.right h2')
const contenedorFigura = document.querySelector('.contenedor-figura')

function circulo() {
    titulo.innerHTML = 'Circulo'
    figura.style.transform = ''
    if (figura.style.borderRadius == '' || figura.style.borderRadius != '50%') {
        figura.style.borderRadius = '50%'
    } else {
        figura.style.borderRadius = ''
    }
}

function rombo() {
    titulo.innerHTML = 'Rombo'
    figura.style.borderRadius = ''
    if (figura.style.transform == '' || figura.style.transform != 'rotate(45deg)') {
        figura.style.transform = 'rotate(45deg)'
    } else {
        figura.style.transform = ''
    }
}

function fondoColor() {
    const styles= document.getElementById('estilos')
    if (styles.href == 'css/light-style.css'){
        console.log(styles.href)
        styles.href == 'css/dark-style.css'
    } else {
        styles.href == 'css/light-style.css'
    }
}

function topPos() {
    titulo.innerHTML = 'Top'
    if (contenedorFigura.style.alignItems == ''){
        contenedorFigura.style.alignItems = 'flex-start';
    } else {
        contenedorFigura.style.alignItems = ''
    }
}


