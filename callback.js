function siguiente(x, done) {
  done(x + 1)
}
function doble(x, done) {
  done(x * 2);
}
function calcular(resultado){
  doble(resultado, res => console.log(`Siguiente del doble => ${res}`))
}

// siguiente(2, resultado => {
//   console.log('Siguiente de 2 =>', resultado)
// })
// doble(2, resultado => console.log('El doble de 2 =>', resultado));

// doble(5,resultado => {
//   siguiente(resultado , res => console.log('El doble del siguiente',res))
// })

siguiente(2, calcular )