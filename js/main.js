const figura = document.querySelector('.figura')
const titulo = document.querySelector('.right h2')
const contenedorFigura = document.querySelector('.contenedor-figura')

function circulo() {
    figura.style.transform = ''
    titulo.innerHTML = 'Circulo'

    if (figura.style.borderRadius == '' || figura.style.borderRadius != '50%') {
        figura.style.borderRadius = '50%'
    } 
    else {
        figura.style.borderRadius = ''
    }
}

function rombo() {
    titulo.innerHTML = 'Rombo'
    figura.style.borderRadius = ''

    if (figura.style.transform == '' || figura.style.transform != 'rotate(45deg)') {
        figura.style.transform = 'rotate(45deg)'
    } 
    else {
        figura.style.transform = ''
    }
}

function fondoColor() {
    const fondo = document.querySelector('body')

    if (fondo.style.background == '') {
        fondo.style.background = 'var(--primary-dark-color)'

    }
    else {
        fondo.style.background = ''
    }
}


function fondoImagen() {
    console.log(figura.style.backgroundImage)
    if (figura.style.backgroundImage == '') {
        figura.style.backgroundImage = 'url(../img/img.jpg)'
    } 
    else {
        figura.style.backgroundImage = ''
    }
}

function topPos() {
    titulo.innerHTML = 'Top'
    if (contenedorFigura.style.alignItems == '' || contenedorFigura.style.alignItems == 'flex-end') {
        contenedorFigura.style.alignItems = 'flex-start';
    } 
    else {
        contenedorFigura.style.alignItems = ''
    }
}

function leftPos() {
    titulo.innerHTML = 'Left'

    if (contenedorFigura.style.justifyContent == '' || contenedorFigura.style.justifyContent == 'flex-end') {
        contenedorFigura.style.justifyContent = 'flex-start'
    }
    else {
        contenedorFigura.style.justifyContent = ''
    }
}

function bottomPos() {
    titulo.innerHTML = 'Bottom'

    if (contenedorFigura.style.alignItems == '' || contenedorFigura.style.alignItems == 'flex-start'){
        contenedorFigura.style.alignItems = 'flex-end'
    }
    else {
        contenedorFigura.style.alignItems = ''
    }
}

function rightPos() {
    titulo.innerHTML = 'Right'

    if (contenedorFigura.style.justifyContent == '' || contenedorFigura.style.justifyContent == 'flex-start'){
        contenedorFigura.style.justifyContent = 'flex-end'
    }
    else {
        contenedorFigura.style.justifyContent = ''
    }
}

function diagonalPos() {
    titulo.innerHTML = 'Diagonal'

    contenedorFigura.style.justifyContent = contenedorFigura.style.alignItems = 'flex-start'
}

function animation() {
    titulo.innerHTML = 'Animacion'
    if (figura.style.animation == ''){
        figura.style.animation = 'shadow 1.5s ease alternate-reverse infinite none running'
    }
    else {
        figura.style.animation = ''
    }
}

function fondoDegradado() {
    titulo.innerHTML = 'Degradado'
    console.log(figura.style.backgroundColor)
    if (figura.style.backgroundColor == '' || figura.style.backgroundColor != 'linear-gradient(var(--background-color), var(--primary-light-color))'){
        figura.stryle.backgroundColor = 'linear-gradient(var(--background-color), var(--primary-light-color))'
    }
}