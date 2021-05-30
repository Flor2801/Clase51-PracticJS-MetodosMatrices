

const obtenernumeroalAzar = () => {
    return Math.floor(Math.random()*5)
}


const items = [a,b,c,d,e]

const obtenerfrutaalAzar = () => {
    return items [obtenernumeroalAzar()]
}

console.log(obtenerfrutaalAzar())


/*
const cuadrado1 = document.querySelector(`div[data-x='0'][data-y='0']`)
const cuadrado2 = document.querySelector(`div[data-x='0'][data-y='1']`)
const cuadrado3 = document.querySelector(`div[data-x='1'][data-y='0']`)
const cuadrado4 = document.querySelector(`div[data-x='1'][data-y='1']`)

//clase-51-tarea
//Crear una funcion sonAdyancentes que reciba como parametros 
//dos elementos de HTML y determine si son adyacentes o no de acuerdo a sus coordenadas

//En index.js tenes los elementos ya seleccionados.

const sonAdyacentesoNo = (posicion1, posicion2) => {
    if () {

    }
    else {

    }
}

console.log(sonAdyacentes(cuadrado1, cuadrado2)) // true
console.log(sonAdyacentes(cuadrado1, cuadrado3)) // true
console.log(sonAdyacentes(cuadrado1, cuadrado4)) // false
*/