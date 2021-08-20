# Projeto_Completo_WEB
- Esse projeto consiste em duas etapas avaliativas da cadeira de Desenvolvimento de Softwre para WEB da Universidade Federal do Ceará - Campus Russas
- A primeira etapa consiste no desenvolvimento de uma API REST para realizar o CRUD (Create, Read ,Update, Delete) de um sistema de cadastro de usuários e encomendas a serem entregues por uma empresa fictícia de transporte destas encomendas
- A segunda etapa consiste em consumir essa API por um front-end qualquer, inteiramente desenvolvido por nós alunos usando o framework [REACT](https://pt-br.reactjs.org/)
# Este documento tem como objetivo indicar o passo a passo de como executar esse projeto em suas máquinas
- [Apresentação do back-end](https://www.youtube.com/watch?v=wL60_uo6wsw&ab_channel=MauricioMatoso)
- [Apresentação do front-end](https://www.youtube.com/watch?v=vstovdQbKWk&t=581s&ab_channel=MauricioMatoso)
- Estou totalmente aberto a ajuda-los no que for preciso relacionado a esse passo a passo
- gabrielbarros@alu.ufc.br
## 1. Instalar o software Node.js que pode ser encontrado neste link [Node.js](https://nodejs.org/)
## 2. Instalar o software DOCKER que pode ser encontrado neste link [DOCKER](https://www.docker.com/)
## 3. Entrar pelo terminal na pasta aonde deseja salvar esse projeto na sua máquina
- 3.1. Considerarei que o caminho da sua raiz até a pasta que o projeto será salvo se chamará **~root**, ou seja, **~root** será a pasta que você salvou o projeto
## 4. Na pasta **~root** execute o comando
```git clone https://github.com/GabrielBarrosAS/Projeto_Completo_WEB.git```
## 5. Preparando o back-end:
- 5.1 Na pasta **~root** entre na pasta back-end
- 5.2 Clique no arquivo ```node_modules.rar``` e extraia ou copie os arquivos para a pasta ```back-end```
## 6. Preparando o front-end:
- 6.1 Na pasta **~root** entre na pasta front-end
- 6.2 Clique no arquivo ```node_modules.rar``` e extraia ou copie os arquivos para a pasta ```front-end```
## 7. Executando o banco de dados não relacional mongodb
- 7.1 Inicie o [DOCKER](https://www.docker.com/) em sua máquina
- 7.2 Na primeira vez que for rodar o projeto e após o docker esteja executando, realize os seguintes comando em seu termial ```docker pull mongo```  e  ```docker run --name mongodb -p 27017:27017 -d mongo```
- 7.3 Nas outras vezes que quiser rodar o projeto, basta iniciar o docker e executar no terminal ```docker start mongodb```
## 8. Executando o back-end
- Abra uma guia do terminal na pasta **~root** e execute ```cd back-end```
- Execute ```npm run start```
- Após isso deve ser inserido pelo software [INSOMNIA](https://insomnia.rest/download) um registo de forma manual para poder acessar as funcionalidade do administrador, alguns registros são adicinados de forma manual neste [LINK](https://www.youtube.com/watch?v=wL60_uo6wsw&ab_channel=MauricioMatoso)
- Ainda será acrescentado informes de como registrar corretamente esse primeiro usuário
## 9. Executando o front-end
- Abra uma guia do terminal na pasta **~root** e execute ```cd front-end```
- Execute ```npm run start```
# Após isso, o back-end (API REST) estará funcionando em
```localhost:3001/api```
# e o front-end pode ser manipulado em
```localhost:3000```
