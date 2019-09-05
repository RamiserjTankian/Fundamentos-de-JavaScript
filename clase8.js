var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}
var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}
function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}
function imprimirNombreyEdadEnMayusculas(persona) {
    var {nombre} = persona, {edad} = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)
}
function SumarEdad(persona) {
    persona.edad += 1
}
//imprimirNombreEnMayusculas(sacha)
//imprimirNombreEnMayusculas(dario)
//imprimirNombreEnMayusculas({ nombre: 'Pepito' })
//imprimirNombreyEdadEnMayusculas(sacha)
//imprimirNombreyEdadEnMayusculas(dario)