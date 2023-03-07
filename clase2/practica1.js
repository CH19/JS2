//se probaran los principales metodos del objeto widow
// history;
location;
frames;
screen;
navigator;
document.title = "hola";
console.log(document.title);
document.open();
const width = window.screen.availWidth;
const height = window.screen.availHeight;
function WriteOnDocument(){
    document.open();
    document.write('<h1> hola bro </h1>');
    document.close();
}
function Open(){
    const windowFeatures = `width=${width/4},height=${height/2}`;
    const handle = window.open("https://www.mozilla.org/", "mozillaWindow", windowFeatures);
    if (!handle) {
      // The window wasn't allowed to open
      // This is likely caused by built-in popup blockers.
        alert('no funciono :(');
      // …
    }
    
}


