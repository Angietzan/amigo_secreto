// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo(){
    let nombreamigo = document.getElementById('amigo').value;
    if (nombreamigo.length > 0){
        if (amigos.includes(nombreamigo)){
            alert('El nombre ya ha sido añadido.');
            document.querySelector('#amigo').value = '';
            }
        else {
            amigos.push(nombreamigo);
            document.querySelector('#amigo').value = '';
            console.log(amigos);
            console.log();
            actualizarLista();
        }
    } 
    else {
        alert('Por favor, inserte un nombre.');
    }
}

function actualizarLista() {
  const lista = document.querySelector('ul');
  lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const listaAmigos = document.createElement('li'); 
        listaAmigos.textContent = amigos[i];              
        lista.appendChild(listaAmigos); 
             
            
}
}