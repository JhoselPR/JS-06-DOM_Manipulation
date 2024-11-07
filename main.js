/*
Hacer funcional el programa de creación de tarjetas.
Funcional -> Debe implementar funciones (clásicas o de flecha).
No es válido colocar todo el código dentro de una sola función.
Refactorizar el código para que funcione con múltiples usuarios
El código debe seguir y aplicar buenas prácticas vistas durante la sesiones
*/
const users = [
    {
        id: 1,
        username: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        username: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 3,
        username: 'User Name',
        description: 'Lorem Ipsum',
        age: 25,
        fav_music: {
            bands: ['Temerarios', 'Los Acosta', 'Los Panchos', 'Los Yonics'],
        }
    }
]

const IMAGE_URL = 'https://placehold.co/200x200';
const CARD_CONTAINER = document.getElementById('container');

document.getElementById('btn-hide').addEventListener('click', e => {
    CARD_CONTAINER.style.visibility = (CARD_CONTAINER.style.visibility === 'hidden') ? 'visible' : 'hidden';
});

const cardCreator = (user) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const img_container = document.createElement('div');

    const image = document.createElement('img');
    image.src = IMAGE_URL;
    image.alt = 'Placeholder user photo';

    const userName = document.createElement('h3');
    const description = document.createElement('p');
    const age = document.createElement('p');
    const bands = document.createElement('ul');

    const bandList = user.fav_music.bands.map((e) => {
        const item = document.createElement('li');
        item.textContent = e;
        return item;
    });
    
    userName.textContent = user.username;
    description.textContent = user.description;
    age.textContent = user.age;
    img_container.appendChild(image);
    bands.append(...bandList);
    card.append(img_container, userName, description, age, bands);
    return card;
}

const cardFiller = () => {
    users.forEach((user) => {
        const card = cardCreator(user);
        CARD_CONTAINER.appendChild(card);
    });
}
cardFiller();









