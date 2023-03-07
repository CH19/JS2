function saberSegundos(num){
    return num*1000
}
// function SubirScroll(){
//     if(confirm('desea subir arriba')){
//         console.log('este es el scroll y'  + scrollY)
//         let ActualPosition = scrollY
//         let scrollPosition = window.scrollY/2
//         // for (scrollPosition ; scrollPosition > 1;  scrollPosition-=100) {
//         while(scrollPosition > 0){
//             setInterval(window.scrollTo(0, scrollPosition));
//             scrollPosition-=10
//         }    
//           let hola =   prompt('seguirSubiendo');
        
//         clearInterval();
//         // window.scrollTo(0,0);
//     }else{

//     }
// }
function SubirScroll(){ //Funcion del objetivo 1
        if (confirm('¿Desea ir arriba?')) {
          let scrollPosition = window.scrollY;
          let scrollInterval = setInterval(function(){
            window.scrollTo(0, scrollPosition);
            scrollPosition -= 10;
          }, 10);
            if (scrollPosition <= 0) {
              clearInterval(scrollInterval);
            }
          }else{

        }
     } ;
     
const cuartaWidth = screen.availWidth/4;
const cuartaHeight = screen.availHeight/4;
     const NewVentana = `left=${cuartaWidth}, top=${cuartaHeight}` //Medidas para el objetivo 4


function CambiarTitulo(){
    let newTitle = " "
    let confirmador = false
    do{
        newTitle = prompt('Indica que nuevo titulo deseas poner');
    }while(newTitle.length <= 0);
    document.title = newTitle;
    console.log(newTitle);
}


let colors = []; //arreglo del objetivo 2
colors[0] = 'red';
colors[1] = 'orange';
colors[2] = 'yellow';
colors[3] = 'green';
colors[4] = 'blue';
colors[5] = 'indigo';
colors[6] = 'violet';
colors[7] = 'black';
colors[8] = 'gray';
colors[9] = 'pink';
colors[10] = 'brown';
colors[11] = 'magenta';
colors[12] = 'purple';
colors[13] = 'turquoise';
colors[14] = 'cyan';
const someColors = colors //si se deseav volver a invocar a los colores completos se llama a esta variable
function ArrRandom(arr){
    const ran = Math.round(Math.random() * (arr.length - 0) + 0);
   
    console.log(colors);
      return arr[ran];

}

const a = ArrRandom(colors); colors = colors.filter(arg => arg != a); //el metodo se hizo de esta forma para que en los proximos llamados a la funcion no hubieran problemas 
//por si se repetia algun color

const b = ArrRandom(colors); colors = colors.filter(arg => arg != b);
const c = ArrRandom(colors); colors = colors.filter(arg => arg != c);
const d = ArrRandom(colors); colors = colors.filter(arg => arg != d);
const e = ArrRandom(colors); colors = colors.filter(arg => arg != e);
console.log(a,b,c,d,e);

document.body.addEventListener('click', () => {
  document.body.style.background = `linear-gradient(to right bottom, ${a}, ${b}, ${c}, ${d}, ${e})`;
});
// console.log(colors);