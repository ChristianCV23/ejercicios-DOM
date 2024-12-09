// 1.1 Crear una lista ul > li dinámicamente con los países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// Crear el elemento ul
const countryList = document.createElement('ul');

// Recorrer el array y crear li para cada país
countries.forEach(country => {
    const listItem = document.createElement('li');
    listItem.textContent = country;
    countryList.appendChild(listItem);
});

// Añadir la lista ul al body del documento
document.body.appendChild(countryList);

// 1.2 Eliminar el elemento con la clase .fn-remove-me
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
    elementToRemove.remove();
}

// 1.3 Crear una lista ul > li en el div con el atributo data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// Seleccionar el div donde se imprimirá la lista
const printHereDiv = document.querySelector('div[data-function="printHere"]');

// Crear el elemento ul
const carList = document.createElement('ul');

// Recorrer el array y crear li para cada coche
cars.forEach(car => {
    const listItem = document.createElement('li');
    listItem.textContent = car;
    carList.appendChild(listItem);
});

// Añadir la lista ul al div seleccionado
printHereDiv.appendChild(carList);

// 1.4 Crear una serie de divs con un h4 para el título y una img para la imagen
const countriesWithImages = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

// Crear un contenedor para los divs
const container = document.createElement('div');

// Recorrer el array y crear divs con h4 e img
countriesWithImages.forEach(country => {
    const countryDiv = document.createElement('div');
    
    const title = document.createElement('h4');
    title.textContent = country.title;
    
    const image = document.createElement('img');
    image.src = country.imgUrl;
    
    countryDiv.appendChild(title);
    countryDiv.appendChild(image);
    
    container.appendChild(countryDiv);
});

// Añadir el contenedor al body
document.body.appendChild(container);

// 1.5 Crear un botón que elimine el último elemento de la serie de divs
const deleteLastButton = document.createElement('button');
deleteLastButton.textContent = 'Eliminar último elemento';

deleteLastButton.addEventListener('click', () => {
    const lastDiv = container.lastElementChild;
    if (lastDiv) {
        lastDiv.remove();
    }
});

// Añadir el botón al body
document.body.appendChild(deleteLastButton);

// 1.6 Crear un botón para cada div que elimine ese mismo elemento del HTML
countriesWithImages.forEach((country, index) => {
    const countryDiv = container.children[index];
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar este elemento';
    
    deleteButton.addEventListener('click', () => {
        countryDiv.remove();
    });
    
    countryDiv.appendChild(deleteButton);
});
