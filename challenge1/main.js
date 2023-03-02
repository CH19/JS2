let nombres = ["articulo1", "articulo2", "articulo3"]; //declarando arreglos
let cantidades = [1, 5, 10];
let ProductoBuscar = prompt('indique el nombre del producto a buscar');
let CantidadProducto = -1;
while(CantidadProducto < 0 || NaN){
  CantidadProducto = parseInt(prompt('indique la cantidad'));
}
let decision = " ";
function RealizarAccion(d, text){
  return d = text;
}
// console.log(nombres, cantidades);
// // AdicionOSustrae("articulo1", 3, false);
// console.log(nombres, cantidades)
// function ExistenciaArrayData
const adicionar = 'adicionar'
const sustraer = 'sustraer'
function AdicionOSustrae(nom, cant, accion){
    if (nombres.includes(nom)) {
      if(accion == adicionar){
        cantidades[nombres.indexOf(nom)]+=cant;
      }else if(accion == sustraer){
        cantidades[nombres.indexOf(nom)]-=cant;
      }
        
    }else{
        alert("nombre de articulo inexistente")
    }
    return nombres, cantidades;
}
function MostrarDatos(){
  if(nombres.length === cantidades.length){
    for (let index = 0; index < nombres.length; index++) {
      console.log(`nombre del producto: ${nombres[index]} cantidad del producto ${cantidades[index]}`)
  
    }
  }
}
