const info = JSON.parse(localStorage.getItem('info'));

const titulo = document.querySelector('.title_filme');
const poster = document.querySelector('.img_poster');
const genero = document.getElementById('genero');
const ano = document.getElementById('ano');
const descricao = document.getElementById('descricao');

console.log(info?.id);
async function apiDados(){
    const URL = `https://www.omdbapi.com/?i=${info?.id}&plot=full&apikey=b83c7867&`;
    try{
        const response = await fetch(URL);

        if(response.status === 200){
            objetoAPI = await response.json();
            console.log(objetoAPI);
            escreverDados(objetoAPI);
        }
    }catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
}
apiDados();     

function escreverDados(objetoAPI){
    poster.setAttribute('src', objetoAPI.Poster);
    titulo.innerHTML = objetoAPI.Title;
    ano.innerHTML += objetoAPI.Year;
    genero.innerHTML += objetoAPI.Type;
    descricao.innerHTML += objetoAPI.Plot;
}




