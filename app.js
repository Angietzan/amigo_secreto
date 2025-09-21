// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreamigo = document.getElementById('amigo').value;
    if (nombreamigo.length > 0){
    amigos.push(nombreamigo);
    document.querySelector('#amigo').value = '';
    console.log(amigos);
    } else {
        alert('Por favor, inserte un nombre.')
    }
}