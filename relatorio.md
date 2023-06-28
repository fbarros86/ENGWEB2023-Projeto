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
  - Utilizador - pode comprar senhas, reservar refeições e alterar alguns atributos do seu perfil;
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

# Estrutura/Desenvolvimento (o nome original é Concepção/desenho da Resolução but idk)

Neste Capítulo iremos falar de como o projeto foi estruturado e mostrar o seu desenvolvimento em termos de codificação. Este projeto foi estruturado entre três partes:

1. Autenticação:
2. API de Dados:
3. Interface: