# Catálogo de Filmes - Aplicação Web

Este projeto é uma aplicação web de catálogo de filmes que utiliza a OMDBAPI para buscar dados de filmes. Ele possui um carrossel dinâmico para exibir filmes por gênero e uma página de informações ao clicar em um card de filme.

## Funcionalidades
- Carrosséis dinâmicos de filmes categorizados por gênero.
- Funcionalidade de busca para encontrar filmes.
- Página de detalhes de filmes com informações obtidas da OMDBAPI.

## Capturas de Tela
### Página Principal

<div align="center">
<img src="https://private-user-images.githubusercontent.com/142743646/405729459-78e75e2c-9b9d-45a6-a9c4-0e2084201801.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1NjgzMzcsIm5iZiI6MTczNzU2ODAzNywicGF0aCI6Ii8xNDI3NDM2NDYvNDA1NzI5NDU5LTc4ZTc1ZTJjLTliOWQtNDVhNi1hOWM0LTBlMjA4NDIwMTgwMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyMlQxNzQ3MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NjQxYzU3NDhjMGNiNzMxMTc5ZGYyYzMyNzQwYTUzMTQwZWNhMGRmNWYzYzFmMDYyY2ZhZWM0ZWQ4MjU5MGQzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.TV4hcFwdfYeluP7zsClSbddm27p5xiLVwcQSl-NlMMc" width="700px" />
</div>

### Página de Detalhes do Filme

<div align="center">
<img src="https://private-user-images.githubusercontent.com/142743646/405730739-1bb35c6c-1ff7-4213-b32d-2ce645d03979.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1NjgxNzgsIm5iZiI6MTczNzU2Nzg3OCwicGF0aCI6Ii8xNDI3NDM2NDYvNDA1NzMwNzM5LTFiYjM1YzZjLTFmZjctNDIxMy1iMzJkLTJjZTY0NWQwMzk3OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDEyMlQxNzQ0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYmY3MWJhMzg5OTEyMTYzNWMzNWI4ZTNmNzViYmNjNTYwOTk3NTQwMzZmODZlMThiYzM3MTYyNWMzMjYyMWY4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.WoZVIsrzo74-juTVA1iVrq35-Sdivd3OYffeaEVk3Vg" width="700px" />
</div>


## Pré-requisitos
- Uma chave de API válida da [OMDBAPI](https://www.omdbapi.com/).

## Começando

### 1. Clone o Repositório
```bash
git clone https://github.com/peudev10/catalogo-filmes.git
cd catalogo-filmes
```

### 2. Configure as Variáveis de Ambiente
Crie um arquivo `.env` no diretório raiz e adicione sua chave da OMDBAPI:
```env
API_KEY=sua_chave_aqui
```

### 4. Instale o dotenv
Execute o seguinte comando no terminal:
```bash
npm install dotenv
```

## Referência da API
Este projeto utiliza a OMDBAPI para buscar dados de filmes. Para mais detalhes sobre a API, visite [Documentação da OMDBAPI](https://www.omdbapi.com/).

## Contribuições
Sinta-se à vontade para fazer um fork deste repositório e enviar pull requests. Contribuições são bem-vindas!

## Licença
Este projeto é destinado apenas para fins educacionais.

---

### Autor
Desenvolvido por <a href="https://github.com/peudev10" target="_blank">Pedro Duarte</a>


