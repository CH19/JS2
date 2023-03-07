let h1 = document.querySelector('h1');
let b1 = document.querySelector('.b1');
// let hola = prompt('dia algo');
vari.innerHTML('hola mi bro <b> asi es como se escribe </b>')
function printText(vari){
    return vari.innerHTML('hola mi bro <b> asi es como se escribe </b>');
}

function probarOpen(){
    document.open();
    document.write("<!DOCTYPE html><html lang='es'><head> <meta charset='UTF-8'> <meta http-equiv='X-UA-Compatible' content='IE=edge'> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <link rel='stylesheet' href='./sytles.css'> <title>Desafio1Js2</title></head><body style='margin: 0; font-family: 'Segoe UI';'> <h1>Desafio 1 Javascript Nivel 2</h1> <div class='container' onclick='ElPaPa(); ' style='height: 300px; background-color: bisque; padding: 2%;'> <div onclick='decision = RealizarAccion('adicionar'); event.stopPropagation() ' style='height: 100%; width: 40%; margin: 0 2%; background-color: green; display: inline-block; color: white; font-size: xx-large; text-align: center; font-weight: bold; box-sizing: border-box;'>Adicionar</div> <div onclick='decision = RealizarAccion('sustraer'); event.stopPropagation() ' style='height: 100%; width: 40%; margin: 0 2%; background-color: red; display: inline-block; color: white; font-size: xx-large; text-align: center; font-weight: bold; box-sizing: border-box;'>Sustraer</div> </div> <h1 style='color= red;'>hola mi bro ${hola}</h1> <div style='position: absolute; bottom: 0; height: 50px; color: white; font-weight: bold; background-color: black; width: 100%; text-align: center;'> <div>Maqueta realizada por: Avilapro <br> Desafio hecho por CH19 </div> </div> <script src='./main.js'> </script></body></html>");
   
}
function NewWindow(){
    Window.open('https://www.youtube.com/watch?v=HAfFfqiYLp0', 'kanye', 'width: 200px; height: 300px;');
}
