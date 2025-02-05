// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    const inputTxt = document.querySelector('#amigo');
    const nombreAmigo = inputTxt.value.trim();

    if (nombreAmigo !== '') {
        amigos.push(nombreAmigo);
        inputTxt.value = '';
        mostrarAmigos();
    }
}

// Función para mostrar los amigos en el div debajo del input
function mostrarAmigos() {
    const listaAmigosDiv = document.querySelector('#listaAmigos');
    listaAmigosDiv.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('LI');
        li.textContent = amigo;
        listaAmigosDiv.appendChild(li);
    })
}

// Función para sortear un amigo secreto

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    const aleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[aleatorio];

    const resultadoDiv = document.querySelector('#resultado');
    resultadoDiv.innerHTML = `<li>${amigoSorteado}</li>`;
}

