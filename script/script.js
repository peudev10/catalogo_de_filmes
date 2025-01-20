const dotenv = require('dotenv');
dotenv.config();

const keyapi = process.env.API_KEY;


/////////////////////// Consumo de API OMDB para filmes /////////////////////////////////////////////////////////////

var objetoAPI;

async function chamarAPI() {
    const promessas = generosPopulares.map(async (genero, i) => {
        const URL = `http://www.omdbapi.com/?apikey=${keyapi}&s=${genero}&type=movie`; 
        try {
            const response = await fetch(URL);

            if (response.status === 200) {
                objetoAPI = await response.json();

                listFilmes(objetoAPI, i);
            }
        } catch (error) {
            console.log(`Erro na requisição para o gênero ${genero}:`, error);
        }
    });
}

//////////////////// DOM ///////////////////////////////////////////////////////////////////////////////////////////

// "banco" de categorias

const generosPopulares = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Thriller",
    "Adventure",
    "Animation",
    "Romance",
    "Sci-Fi",
    "Fantasy"
];

const info = {
    id: "",
};


// criação e manipilação dos componentes
const sectionFilmes = document.getElementById('filmes');

function listFilmes(objetoAPI, cont) {
    const categoria_box = document.createElement('div');
    categoria_box.classList.add('categoria_box');

    const h2 = document.createElement('h2');
    h2.textContent = generosPopulares[cont];
    categoria_box.appendChild(h2);

    const button_left = document.createElement('button');
    button_left.classList.add('arrow_left', 'control');
    button_left.setAttribute('type', 'button');
    button_left.setAttribute("aria-label", "Previous image");
    categoria_box.appendChild(button_left);

    const icon_left = document.createElement("i");
    icon_left.classList.add("bi", "bi-arrow-left");
    button_left.appendChild(icon_left);

    const button_right = document.createElement('button');
    button_right.classList.add('arrow_right', 'control');
    button_right.setAttribute('type', 'button');
    button_right.setAttribute("aria-label", "Next image");
    categoria_box.appendChild(button_right);

    const icon_right = document.createElement("i");
    icon_right.classList.add("bi", "bi-arrow-right");
    button_right.appendChild(icon_right);

    const div_carrossel = document.createElement('div');
    div_carrossel.classList.add('carrossel_filme');

    for (let i = 0; i < objetoAPI.Search.length; i++) {
        const div_card = document.createElement('div');
        div_card.classList.add('item');
        div_card.addEventListener('click', () => {
            info.id = objetoAPI.Search[i].imdbID;
            localStorage.setItem('info', JSON.stringify(info));
            window.location.href = "./preview.html";
        });

        const img_card = document.createElement('img');
        img_card.classList.add('capa_filme');
        img_card.setAttribute('src', objetoAPI.Search[i].Poster);

        const card_p = document.createElement('p');
        card_p.innerText = objetoAPI.Search[i].Title;

        div_card.appendChild(img_card);
        div_card.appendChild(card_p);
        div_carrossel.appendChild(div_card);
    }

    categoria_box.appendChild(div_carrossel);
    sectionFilmes.appendChild(categoria_box);

    // Adicionar controle do carrossel específico
    let currentItem = 0;
    const items = div_carrossel.querySelectorAll('.item'); 
    const maxItems = items.length;

    button_left.addEventListener('click', (event) => {
        event.preventDefault(); // Impede qualquer comportamento padrão
        event.stopPropagation(); // Impede propagação do evento para elementos ancestrais
        currentItem = Math.max(currentItem - 1, 0);
        scrollToItem(items, currentItem);
    });

    button_right.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        currentItem = Math.min(currentItem + 1, maxItems - 1);
        scrollToItem(items, currentItem);
    });
}

function scrollToItem(items, index) {
    items.forEach(item => item.classList.remove('current_item'));
    items[index].classList.add('current_item');
    items[index].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
}

chamarAPI();
