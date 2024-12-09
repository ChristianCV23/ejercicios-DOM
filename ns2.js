// 2.1 Inserta dinámicamente un div vacío en el HTML
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

// 2.2 Inserta dinámicamente un div que contenga una p
const divWithP = document.createElement('div');
const pInDiv = document.createElement('p');
pInDiv.textContent = 'Este es un párrafo dentro de un div.';
divWithP.appendChild(pInDiv);
document.body.appendChild(divWithP);

// 2.3 Inserta dinámicamente un div con 6 p utilizando un loop
const divWithSixP = document.createElement('div');
for (let i = 1; i <= 6; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo ${i}`;
    divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

// 2.4 Inserta una p con el texto 'Soy dinámico!'
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6 Crea una lista ul > li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
document.querySelectorAll('.fn-remove-me').forEach(element => element.remove());

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div
const divs = document.querySelectorAll('div');
const pInBetween = document.createElement('p');
pInBetween.textContent = 'Voy en medio!';
divs[0].insertAdjacentElement('afterend', pInBetween);

// 2.9 Inserta una p con el texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here
document.querySelectorAll('.fn-insert-here').forEach(div => {
    const p = document.createElement('p');
    p.textContent = 'Voy dentro!';
    div.appendChild(p);
});
