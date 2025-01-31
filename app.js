// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Cramos un Array para almacenar los nombres
let amigos = [];
function agregarAmigo() {
    let input = document.querySelector("#amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}
//crear una funcion que graba el array de amigos
function actualizarLista(){
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML="";
    for(let i=0;i<amigos.length;i++){
        let li=document.createElement("li");
        li.textContent=amigos[i];
        lista.appendChild(li); //con esto se agrega el <li> a la lista
    }
}
//Duncion para sortear un amigo secreto
function sortearAmigo(){
    if(amigos.length===0){
        document.getElementById("resultado").innerHTML="No hay amigos para sortear.";
        return;
    }
    const indiceAleatorio=Math.floor(Math.random()*amigos.length);
    const amigoSorteado=amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML=`El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}
function reiniciarJuego() {
    // Reiniciar el array de amigos
    amigos = [];

    // Limpiar la lista visual
    actualizarLista();

    // Limpiar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "";

    // Opcional: Limpiar el input si lo deseas
    document.querySelector("#amigo").value = "";
}
