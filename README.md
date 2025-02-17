# challenge-amigo-secreto

### Archivos Principales

- `index.html`: Contiene la estructura HTML de la aplicación.
- `style.css`: Contiene los estilos CSS para la aplicación.
- `app.js`: Contiene la lógica principal de la aplicación.
- `apps.js`: Contiene una versión comentada de la lógica de la aplicación.

## Cómo Usar

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.
3. Ingresa los nombres de tus amigos en el campo de entrada y haz clic en "Añadir".
4. Una vez que hayas agregado todos los nombres, haz clic en "Sortear amigo" para seleccionar un amigo secreto al azar.

## Funciones Principales

### `agregarAmigo()`

Esta función captura el valor del campo de entrada, valida que no esté vacío, y agrega el nombre al array `amigos`. Luego, actualiza la lista de amigos en la interfaz.

### `actualizarLista()`

Esta función actualiza la lista de amigos en la interfaz, limpiando la lista existente y agregando cada nombre del array `amigos` como un nuevo elemento `<li>`.

### `sortearAmigo()`

Esta función selecciona un amigo secreto al azar del array `amigos` y muestra el resultado en la interfaz. Si no hay amigos en la lista, muestra un mensaje de error.

### 'reiniciar()'

Esta función reinicia la lista de amigos y el amigo secreto seleccionado.

## Estilos CSS

El archivo `style.css` contiene los estilos para la aplicación, incluyendo colores, fuentes y diseño de la interfaz.

## Créditos

Este Challenge fue creado para el programa Alura Challenges, un desafío de aprendizaje para mejorar las habilidades de programación y desarrollo web.
