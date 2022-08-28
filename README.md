# Projeto Blogs-Api

  O projeto foi desenvolvido por mim, visando entregar uma estrutura funcional de um blog onde era necessário realizar cadastros de usuários, autenticações, criar posts e acessá-los, para isso foi entregue uma API C.R.U.D restful, aplicando a metodologia MSC.

# Documentação

  A documentação pode ser encontrada na rota 'locahost:3000/doc'.
  
  <img src="images/routes.png" width="100" height="100">

# Ferramentas utilizadas

  - Javascript
  - NodeJs
  - Express
  - Sequelize
  - Docker
  - Jwt

# Rodando o projeto

  - Git clone nesse repositório
  - docker compose up -d
  - docker exec -it blogs_api bash
  - dentro do container rode: npm start(o comando npm start irá criar o banco de dados e popular-lo)
  - requisite quaisquer rotas que estejam pré definidas(acesse a documentação para ter acesso aos padrões de urls e requisições)
