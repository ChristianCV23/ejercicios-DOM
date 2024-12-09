// Crear y agregar los inputs
const body = document.body;

// Input para el evento 'click'
const clickInput = document.createElement('input');
clickInput.className = 'click';
clickInput.type = 'text';
clickInput.placeholder = 'Input con click event';
body.appendChild(clickInput);

// Input para el evento 'focus'
const focusInput = document.createElement('input');
focusInput.className = 'focus';
focusInput.type = 'text';
focusInput.placeholder = 'Input con focus event';
body.appendChild(focusInput);

// Input para el evento 'input'
const valueInput = document.createElement('input');
valueInput.className = 'value';
valueInput.type = 'text';
valueInput.placeholder = 'Input con input event';
body.appendChild(valueInput);

// Botón para el evento 'click'
const button = document.createElement('button');
button.id = 'btnToClick';
button.textContent = 'Click Me';
body.appendChild(button);

// Crear una lista para mostrar los álbumes
const albumsList = document.createElement('ul');
albumsList.id = 'albumsList';
body.appendChild(albumsList);

// 1.1 Evento 'click' en el botón
button.addEventListener('click', (event) => {
    console.log('Evento de click:', event);
});

// 1.2 Evento 'focus' en el input con clase 'focus'
focusInput.addEventListener('focus', () => {
    console.log('Valor del input (focus):', focusInput.value);
});

// 1.3 Evento 'input' en el input con clase 'value'
valueInput.addEventListener('input', () => {
    console.log('Valor del input (input):', valueInput.value);
});

// Crear una lista dinámica de álbumes
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    albumsList.appendChild(li);
});
