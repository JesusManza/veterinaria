function saludar(){
    alert("Hola perritos");
}
function presentarse(){
    alert("te saluda ronald manza");
}

const botonsaludos = document.getElementById("saludos");

botonsaludos.addEventListener("click",saludar);

