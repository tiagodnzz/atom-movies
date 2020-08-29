<h4 align="center">
<img src="./src/assets/img/logo.png" width="250px" /><br>
 <b>:movie_camera: Veja as avaliações dos filmes mais populares!</b>
</h4>

<br>

### :rocket: Tecnologias usadas
Esse projeto foi desenvolvido com as seguinte tecnologia:
- [Angular](https://angular.io/)

Extras:
- Bibliotecas
  - [ngx-pagination](https://www.npmjs.com/package/ngx-pagination)
  - [bootstrap](https://www.npmjs.com/package/bootstrap)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

<b>[Git](https://git-scm.com)</b>

<b>[Node.js](https://nodejs.org/en/)</b>

<b>[Angular](https://angular.io/)</b>

E também será preciso um editor, eu indico o <b>[VSCode](https://code.visualstudio.com/)</b>

## :file_folder: Organização das pastas

As pastas desse projeto foi se baseado em alguns projetos e a arquitetura de algumas empresas:

Árvore de arquivos :
```
├── App
|   |
│   ├── models - Responsável por todas as interfaces
│   │   └── movie.model.ts
|   |
│   ├── pages - Responsável por todas as páginas
│   │   ├── detaile
|   |   |     ├── details-routing.module.ts
│   │   │     ├── detials.component.html
│   │   │     ├── detials.component.css
│   │   │     ├── detials.component.ts
│   │   │     └── detials.module.ts
│   │   └── home
|   |         ├── home-routing.module.ts
│   │         ├── home.component.html
│   │         ├── home.component.css
│   │         ├── home.component.ts
│   │         └── home.module.ts
|   |
│   ├── resolves - Responsável por todos os resolves
│   │   ├── genre.resolve.ts
│   │   └── movies.resolve.ts
|   |
│   ├── services - Responsável por todos os services
│   │   ├── genre.service.ts
│   │   └── movies.service.ts
|   |
│   ├── shared - Responsável pelos componentes compartilhados em toda a aplicação
│   │   ├── card-cast
│   │   │     ├── card-cast.component.html
│   │   │     ├── card-cast.component.css
│   │   │     ├── card-cast.component.ts
│   │   │     └── card-cast.module.ts
│   │   ├── card-drew
│   │   │     ├── card-drew.component.html
│   │   │     ├── card-drew.component.css
│   │   │     ├── card-drew.component.ts
│   │   │     └── card-drew.module.ts
│   │   ├── card-movie
│   │   │     ├── card-movie.component.html
│   │   │     ├── card-movie.component.css
│   │   │     ├── card-movie.component.ts
│   │   │     └── card-movie.module.ts
│   │   ├── footer
│   │   │     ├── footer.component.html
│   │   │     ├── footer.component.css
│   │   │     ├── footer.component.ts
│   │   │     └── footer.module.ts
│   │   └── loading
|   |         ├── loading-type.ts
│   │         ├── loading.component.html
│   │         ├── loading.component.css
│   │         ├── loading.component.ts
│   │         ├── loading.module.ts
│   │         └── loading.service.ts
|   |
│   ├── app-routing.module.ts
│   ├── app.component.html
│   └── app.module.ts

```

### :information_source: Informações sobre o desenvolvimento

- Como não foi solicitado a parte de testes, o projeto com a flag [--minimal](https://angular.io/cli/new);
- Foi utilizado [lazyload](https://angular.io/guide/lazy-loading-ngmodules) para todas as rotas;
- Cada service tem a sua responsabilidade, exemplo, a sevice de filmes, ela gerencia e cuida de toda a parte de filmes;
- Criamos a parte de [resolve](https://angular.io/api/router/Resolve) para que quando a rota for acionada já começar a consulta na API;
- Dividimos a aplicação em componentes para se for necessário futuramente dar manutenção nas página ficaria mais facil;


### :gear: Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/tiagodnzz/atom-movies.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd atom-movies

# Instale as dependências
$ npm install ou npm i

# Adicionado o token no environments
# Sem essas configurações a sua aplicação não irá funcionar!
export const environment = {
  apiKey: "api_key=###",
  apiUrl: 'https://api.themoviedb.org/3'
};

# Execute a aplicação
$ npm start

# A aplicação será aberta na porta:4200 - acesse http://localhost:4200
```

### :memo: Licença

Esse projeto está sob a licença MIT.

---

Feito com :heart: by **Tiago Diniz** :thumbsup:
