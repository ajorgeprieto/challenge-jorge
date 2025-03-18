// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Obtenemos el valor del input y lo limpiamos de espacios en blanco
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validamos que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Agregamos el nombre al array
    amigos.push(nombreAmigo);
    
    // Actualizamos la lista visual
    actualizarListaAmigos();
    
    // Limpiamos el campo de entrada
    inputAmigo.value = '';
    
    // Enfocamos el campo para ingresar el siguiente nombre
    inputAmigo.focus();
}

/**
 * Función para actualizar la lista de amigos en el DOM
 */
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiamos la lista actual
    listaAmigos.innerHTML = '';
    
    // Creamos un elemento de lista para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para sortear un amigo aleatorio
 */
function sortearAmigo() {
    // Verificamos que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear');
        return;
    }
    
    // Seleccionamos un índice aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtenemos el nombre del amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostramos el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡${amigoSeleccionado} es el amigo secreto!</li>`;
}

// Añadimos un event listener para permitir agregar amigos al presionar Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});
