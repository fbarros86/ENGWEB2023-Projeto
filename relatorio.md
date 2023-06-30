# Índice

1. [Introdução](#introducao)
2. [Análise e Especificação](#analise-especificacao)
   1. [Descrição informal do problema](#descricao-problema)
   2. [Levantamento de Requisitos](#levantamento-requisitos)
      1. [Requisitos Mínimos](#requisitos-minimos)
      2. [Requisitos Extra](#requisitos-extra)
3. [Concepção/desenho da Resolução](#concepcao-desenho-resolucao)
   1. [Autenticação](#autenticacao)
   2. [API de Dados](#api-dados)
   3. [Interface](#interface)

# Introdução

## Um belo Projeto

O presente relatório descreve o trabalho prático realizado no âmbito da Unidade Curricular de Engenharia Web, inserida no curso de Licenciatura em Engenharia Informática durante o 2º Semestre do ano letivo 2022/2023.

Neste projeto, o grupo optou por escolher o seu próprio tema, que consiste na criação de uma plataforma para ver a ementa da cantina, fazer reservas e comprar senhas.

O objetivo deste trabalho é desenvolver uma plataforma com dois tipos distintos de utilizadores: os alunos e os administradores. Aonde os alunos podem comprar senhas, ver a ementa e reservar refeições e os administradores podem criar, editar e apagar utilizadores e colocar novas refeições na ementa.  

O relatório está dividido em várias secções. Iniciamos com a introdução, que apresenta uma visão geral do trabalho realizado. Em seguida, abordamos a análise e especificação, onde descrevemos informalmente o problema a ser resolvido e estabelecemos os requisitos necessários para a sua resolução. Posteriormente, apresentamos a conceção/desenho da solução, detalhando as estratégias adotadas para o desenvolvimento da plataforma. Prosseguimos com a secção de codificação e testes, onde descrevemos o processo de implementação e os testes realizados para verificar a correta funcionalidade da plataforma. Por fim, concluímos o relatório com uma síntese das principais conclusões obtidas ao longo do projeto.

O objetivo final deste trabalho é fornecer uma plataforma que os alunos da Universidade do Minho possam usar no seu dia a dia para que a experiência de ir à cantina seja melhor, também queremos que a nossa plataforma seja facil de usar e entender para os administradores que terão de eventualmente usá-la para introduzir os menus semanais.

---

# Análise e Especificação

## Descrição informal do problema
O objetivo deste trabalho é desenvolver uma plataforma com dois tipos distintos de utilizadores: os alunos e os administradores. Os alunos poderão comprar senhas, consultar o menu e fazer reservas para as refeições, enquanto os administradores poderão criar, editar e eliminar utilizadores, bem como adicionar novas refeições ao menu.

## Levantamento de Requisitos

### Requisitos Mínimos

- O sistema deverá estar protegido com autenticação: username+password, (chaveAPI, google, facebook...)
- Deverá ser possível criar uma nova conta, através do registo, onde será preciso fornecer um username, um email e uma password para criar a conta.
- Deverão existir pelo menos 2 níveis de acesso:
  - Administrador - pode adicionar e alterar refeições e utilizadores;
  - Utilizador/Usuário - pode comprar senhas, reservar refeições e alterar alguns atributos do seu perfil;
- O utilizador poderá comprar senhas e usá-las para reservar refeições. Cada refeição só poderá ser reservada uma vez, podendo reservar múltiplas senhas ao mesmo tempo.
- Antes de reservar, o utilizador poderá especificar se a refeição é normal ou vegetariana, e deverá conseguir ver todos os detalhes de cada refeição.
- As senhas podem ser compradas separadamente ou num pack de 10 senhas, sendo que uma senha separada custa 2.70€ mas um pack de 10 senhas custa 25€.
- O utilizador deve conseguir aceder ao seu próprio perfil onde poderá consultar as reservas e os seus atributos, podendo alterar o seu tipo (não podendo ser alterado para administrador através deste meio).
- O administrador poderá adicionar refeições diretamente pela plataforma em si para todos os utilizadores de seguida poderem reservar, só podendo adicionar uma refeição normal e uma vegetariana por cada dia. 
- O administrador terá acesso a um form onde é disponibilizada uma tabela com todos os utilizadores da plataforma, podendo editá-los ou apagá-los e poderá criar utilizadores novos com os atributos que quiser.

### Requisitos Extra
- Se o utilizador tiver sido registado através da página de registo este será considerado "Not Student", se tiver sido um administrador a criar a conta o utilizador será classificado como "Student"
- Caso o utilizador ou administrador se esqueça da password da sua conta poderá recuperá-la através de uma funcionalidade onde é mandado um email para o email associado a sua conta, podendo, assim, alterar a password através do email mandado.
- O website deverá ter uma barra de navegação para o utilizador poder navegar facilmente entre as diferentes funcionalidades
- O website deverá ter um footer com todas as informações e meios possíveis de um utilizador conseguir contactar a equipa de desenvolvimentos, para problemas técnicos que possam ter com a plataforma, e a cantina, para questões relacionadas com a cantina em si. 
- O utilizador no seu perfil deverá poder atualizar a sua imagem de perfil, e poderá cancelar reservas se faltar mais que 24 horas até a hora definida na senha.
- O utilizador poderá mudar o website para darkmode, onde o website reduz a luz emitida pela tela do respetivo dispositivo.
- O administrador poderá editar as refeições previamente adicionadas, mostrando um aviso caso a refeição que esteja a ser editada esteja a ser disponibilizada para todos os utilizadores.

É de notar, tal como já foi dito, que estes requisitos foram feitos para nos conseguirmos orientar e, como tal, é possível que alguns dos requisitos podem não ter sido feitos, ou por questões de tempo ou porque não achamos necessários para fornecer uma melhor experiência ao utilizador.

---

# Estrutura/Desenvolvimento

Neste Capítulo iremos falar de como o projeto foi estruturado e mostrar o seu desenvolvimento em termos de codificação. Este projeto foi estruturado entre três partes:

1. Autenticação: Nessa parte, foi implementado um sistema de autenticação para garantir a segurança da plataforma. A autenticação é necessária para garantir que apenas usuários autorizados possam acessar a plataforma e realizar ações específicas, de acordo com seus níveis de acesso. (Incompleto)
2. API de Dados:  A API de Dados foi desenvolvida para lidar com o armazenamento e gerenciamento dos dados da plataforma. Foi utilizado um banco de dados, através do software MongoDB, para armazenar informações dos usuários, refeições e reservas. A API fornece endpoints para a criação, leitura, atualização e exclusão de dados, permitindo que a plataforma interaja com o banco de dados de forma segura e eficiente.
3. Interface: Foi projetada uma interface amigável e intuitiva, com layouts e componentes adequados para facilitar a interação dos usuários com a plataforma. Foram utilizadas tecnologias web, como Pug, CSS e JavaScript. A interface permite que os usuários possam interagir com a plataforma, podendo realizar o login e o registo, visualizar a ememnta da cantina, comprar senhas, reservar refeições e ver o seu perfil, e os que forem administradores, criar novos usários e refeições. 

Cada uma dessas partes desempenha um papel fundamental no funcionamento da plataforma, trabalhando em conjunto para a nossa plataforma poder funcionar na totalidade. A estruturação em três partes distintas permite que o projeto seja dividido em módulos independentes, facilitando o desenvolvimento, manutenção e escalabilidade da plataforma.

## Autenticação

A Autenticação possui várias rotas e funcionalidades relacionadas à autenticação e manipulação de usuários. A seguir, apresento uma breve descrição de cada rota e funcionalidade:

- A função de middleware `auth.verificaAcesso` verifica se o usuário tem acesso autorizado, sendo usada por várias rotas.
- A rota GET `/` retorna a informação de que a autorização é bem-sucedida, juntamente com o ID do usuário, verificando se a pessoa está logged in. Usa o middleware `auth.verificaAcesso` para verificar a autorização do usuário.
- A rota GET `/token` retorna informações do usuário com base no nome de usuário (req.username). Usa o middleware `auth.verificaAcesso` para verificar a autorização do usuário.
- A rota GET `/username/:id` retorna informações do usuário com o ID fornecido. Usa o middleware `auth.verificaAcesso` para verificar a autorização do usuário.
- A rota POST `/` adiciona um novo usuário com base na informação fornecida. Usa o middleware `auth.verificaAcesso` para verificar a autorização do usuário.
- A rota POST `/register` cria um novo usuário utilizando o modelo do usuário (`userModel`) e a senha fornecida.
- A rota POST `/login` realiza o login do usuário usando o método de autenticação `passport.authenticate('local')`. Gera um token JWT contendo o nome de usuário (`req.user.username`) e o tipo do usuário (`req.user.tipo`) com duração de 1 hora (3600 segundos). 
- A rota PUT `/:id` atualiza os dados do usuário com o ID fornecido. Usa o middleware `auth.verificaAcesso` para verificar a autorização do usuário.
- A rota DELETE `/:id` remove o usuário com o ID fornecido. Usa o middleware `auth.verificaAcesso` para verificar a autorização do usuário.

## Api de Dados

A Api de dados esta dividida em 3 arquivos que mexem com a sua respetiva collection, estando as suas rotas representadas a seguir.

### meals.js:

- A rota GET `/` retorna uma lista de refeições. Chama a função `Meal.list()` do controlador meal para obter os dados das refeições.
- A rota GET `/:id` retorna uma refeição com o ID fornecido. Chama a função `Meal.getMeal(id)` do controlador `meal.js` para obter os dados da refeição.
- A rota GET `/date/:date` retorna uma refeição com base na data fornecida. Chama a função `Meal.getMealDate(date)` do controlador `meal.js` para obter os dados da refeição.
- A rota POST `/` adiciona uma nova refeição com base nas informações fornecidas. Chama a função `Meal.addMeal(meal)` do controlador `meal.js` para adicionar a refeição.
- A rota PUT `/:tipo/:data` atualiza uma refeição com base no tipo e data fornecidos. Chama a função `Meal.editMealDate(date, tipo, meal)` do controlador `meal.js` para atualizar a refeição.
- A rota DELETE `/:id` remove a refeição com o ID fornecido. Chama a função `Meal.deleteMeal(id)` do controlador `meal.js` para remover a refeição.

### reserves.js:

- A rota GET `/` retorna uma lista de reservas. Chama a função `Reserve.list()` do controlador `reserve.js` para obter os dados das reservas.
A rota GET `/:id` retorna uma reserva com o ID fornecido. Chama a função `Reserve.getReserve(id)` do controlador `reserve.js` para obter os dados da reserva.
- A rota GET `/user/:idUser` retorna as reservas de um determinado usuário com base no ID do usuário fornecido. Chama a função `Reserve.getUserReserves(idUser)` do controlador `reserve.js` para obter as reservas do usuário.
- A rota POST `/` adiciona uma nova reserva com base nas informações fornecidas. Chama a função `Reserve.addReserve(reserve)` do controlador `reserve.js` para adicionar a reserva.
- A rota PUT `/:id` atualiza uma reserva com o ID fornecido. Chama a função `Reserve.editReserve(id, reserve)` do controlador `reserve.js` para atualizar a reserva.
- A rota DELETE `/:id` remove a reserva com o ID fornecido. Chama a função `Reserve.deleteReserve(id)` do controlador `reserve.js` para remover a reserva.

### users.js:

- A rota GET `/` retorna uma lista de usuários. Chama a função `User.list()` do controlador `user.js` para obter os dados dos usuários.
- A rota GET `/:id` retorna um usuário com o ID fornecido. Chama a função `User.getUser(id)` do controlador `user.js` para obter os dados do usuário.
- A rota POST `/` adiciona um novo usuário com base nas informações fornecidas. Chama a função `User.addUser(user)` do controlador `user.js` para adicionar o usuário.
- A rota PUT `/:id` atualiza um usuário com o ID fornecido. Chama a função `User.editUser(id, user)` do controlador `user.js` para atualizar o usuário.
- A rota DELETE `/:id` remove o usuário com o ID fornecido. Chama a função `User.deleteUser(id)` do controlador `user.js` para remover o usuário.

## Interface

O arquivo `index.js` começa importando as dependências necessárias, incluindo o Express, o Axios para fazer requisições HTTP, o Moment.js para manipulação de datas e horários, o middleware de autenticação, o UUID para gerar identificadores únicos, o Multer para upload de arquivos e o fs para operações no sistema de arquivos.

O código define várias rotas usando o objeto `router` fornecido pelo Express:

- A rota GET `/` renderiza a página de login.
- A rota GET `/signup` renderiza a página de registro.
- A rota GET `/logout` limpa o cookie do token e redireciona para `/?info=logout`.
- A função de middleware `getListMeals` recupera uma lista de refeições para uma determinada semana e armazena-as no objeto `req.listMeals`, sendo usada por várias rotas.
- A função de middleware `getListMealsandReserves` combina a funcionalidade de `getListMeals` e também recupera as reservas para o usuário autenticado. Ela é usada pela rota da página inicial (`home`).
- A rota GET `/home` renderiza a página inicial. Ela requer autenticação e usa o middleware `getListMealsandReserves` para buscar os dados necessários para renderização.
- A rota GET `/buy` renderiza a página de compra. Ela requer autenticação.
- A rota GET `/adminhome` renderiza a página inicial do administrador. Ela requer autenticação de administrador e usa o middleware `getListMeals` para buscar os dados necessários.
- A rota GET `/profile` renderiza a página de perfil. Ela requer autenticação e recupera as informações do usuário e as reservas do usuário autenticado.
- A rota GET `/form` renderiza a página de formulário do usuário. Ela requer autenticação de administrador e recupera uma lista de usuários.
- A rota GET `/form/:id` renderiza a página de edição de formulário do usuário. Ela requer autenticação de administrador e recupera as informações de um usuário específico e a lista de todos os usuários.
- A rota POST `/signup` trata do registro de usuário. Ela opera o middleware `auth.signup` para criar um novo usuário.
- A rota POST `/form` trata da criação de usuário a partir do formulário de administrador. Ela opera o middleware `auth.signup` para criar um novo usuário.
- A rota POST `/form/file` trata do upload de arquivos a partir do formulário de administrador. Ela lê o arquivo JSON e cria usuários com base nos dados do arquivo.
- A rota POST `/form/edit/:id` trata da edição de usuário a partir do formulário de administrador. Ela exclui o usuário com o ID fornecido e opera o middleware `auth.signup` para criar um novo usuário.
- A rota POST `/add/:tipo/:data` trata da adição de uma refeição. Ela requer autenticação de administrador e cria uma nova refeição com os detalhes fornecidos.
- A rota POST `/edit/:tipo/:data` trata da edição de uma refeição. Ela requer autenticação de administrador e atualiza a refeição com os detalhes fornecidos.
- A rota POST `/adminhome/file` trata do upload de arquivos de refeições a partir da página inicial do administrador. Ela lê o arquivo JSON enviado e cria refeições com base nos dados do arquivo.

# Interface

Neste capítulo vamos mostrar alguns prints da interface da nossa plataforma e explicar como um cliente poderá usá-las e para que servem. A nossa plataforma tem sete páginas ao todo, onde duas servem para fazer a autenticação (páginas de login e registo), outras três são para os utilizadores (páginas de home, perfil e buy) e outras duas são para os administradores (páginas de adminhome e form).

## Páginas de Autenticação

## Páginas para Utilizadores

## Páginas para Administradores


