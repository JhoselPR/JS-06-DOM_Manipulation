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
//Constantes globales
const IMAGE_URL = 'https://placehold.co/200x200';
const CARD_CONTAINER = document.getElementById('container');

//Botón show/hide
document.getElementById('btn-hide').addEventListener('click', e => {
    CARD_CONTAINER.style.visibility = (CARD_CONTAINER.style.visibility === 'hidden') ? 'visible' : 'hidden';
});

//Creador de tarjetas, dividiendo cada parte de la tarjeta en una función
const imageCreator = () => {
    const img_container = document.createElement('div');
    const image = document.createElement('img');
    image.src = IMAGE_URL;
    image.alt = 'Placeholder user photo';
    img_container.appendChild(image);
    return img_container;
}

const usernameCreator = (user) => {
    const userName = document.createElement('h3');
    userName.textContent = user.username;
    return userName;
}

const descriptionCreator = (user) => {
    const description = document.createElement('p');
    description.textContent = user.description;
    return description;
}

const ageCreator = (user) => {
    const age = document.createElement('p');
    age.textContent = user.age;
    return age;
}

const bandsCreator = (user) => {
    const bands = document.createElement('ul');
    const bandList = user.fav_music.bands.map((e) => {
        const item = document.createElement('li');
        item.textContent = e;
        return item;
    });
    bands.append(...bandList);
    return bands;
}

//Unifica las partes
const cardCreator = (user) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const img_container = imageCreator();
    const userName = usernameCreator(user);
    const description = descriptionCreator(user);
    const age = ageCreator(user);
    const bands = bandsCreator(user);
    card.append(img_container, userName, description, age, bands);
    return card;
}

//Crea una tarjeta para cada elemento del array
const cardFiller = () => {
    users.forEach((user) => {
        const card = cardCreator(user);
        CARD_CONTAINER.appendChild(card);
    });
}
cardFiller();


// const cardCreator = (user) => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     const img_container = document.createElement('div');

//     const image = document.createElement('img');
//     image.src = IMAGE_URL;
//     image.alt = 'Placeholder user photo';

//     const userName = document.createElement('h3');
//     const description = document.createElement('p');
//     const age = document.createElement('p');
//     const bands = document.createElement('ul');

//     const bandList = user.fav_music.bands.map((e) => {
//         const item = document.createElement('li');
//         item.textContent = e;
//         return item;
//     });
    
//     userName.textContent = user.username;
//     description.textContent = user.description;
//     age.textContent = user.age;
//     img_container.appendChild(image);
//     bands.append(...bandList);
//     card.append(img_container, userName, description, age, bands);
//     return card;
// }







