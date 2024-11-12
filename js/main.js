const figura = document.getElementById('figura')
const titulo = document.querySelector('.right h2')
const contenedorFigura = document.querySelector('.contenedor-figura')

function circulo() {
    figura.style.transform = ''
    figura.classList.remove('estrella')
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
    figura.classList.remove('estrella')

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

// Revisar esta funcion
function fondoDegradado() {
    titulo.innerHTML = 'Degradado'
    
    if (figura.classList.contains('degradado')){
        figura.classList.remove('degradado')
    }
    else {
        figura.classList.add('degradado')
    }
}

function estrella() {
    titulo.innerHTML = 'Estrella'
    if (figura.classList.contains('estrella')){
        figura.classList.remove('estrella')
    }
    else {
        figura.classList.add('estrella')
    }
}

function panelLateral() {
    const panelLateral = document.getElementById('panel-lateral')

    if(panelLateral.classList.contains('active')){
        panelLateral.classList.remove('active')
    }
    else {
        panelLateral.classList.add('active')
    }
}

function panelSuperior() {
    const panelSuperior = document.getElementById('panel-superior')

    if (panelSuperior.classList.contains('active')){
        panelSuperior.classList.remove('active')
    }
    else {
        panelSuperior.classList.add('active')
    }
}
