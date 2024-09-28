Trabalho Avaliativo
Você deverá rodar a API de usuários que está na pasta api para ter um backend online. Ele trabalha com banco de dados SQLite, portanto não precisar criar banco e tabelas, tudo é feito automático.

Para rodar a API, você deverá executar o comando npm i para instalar as dependências e após isso, rode o comando npm start para que a API esteja no ar. Ela irá rodar na porta 3000.

Com a API rodando, agora você deverá criar um Aplicativo em React Native com Expo e Typescript para realizar o CRUD de usuários.

Os dados do usuário a serem cadastrado são: name, email, login, password e city.

Use stack navigation para criar a navegação no aplicativo.

Crie um componente Header e um componente Footer para sempre aparecer no aplicativo.

Você deverá criar uma tela Home para listar os dados de name e email dentro de cards. Em cada card, também deverá ter um botão para editar e outro para excluir o usuário. Além disso, se a pessoa clicar no card, ela vai ser direcionada para a tela de Details, onde vai mostrar todos os dados do usuário clicado.

Então as telas no aplicativo serão as seguintes:

Tela Home para mostrar alguns dados do usuário, com os botões para criar um novo usuário (no Header), editar o usuário específico, excluir um usuário ou ver detalhes deste usuário.
Tela AddUser para cadastrar um novo usuário.
Tela EditUser para editar um usuário cadastrado.
Tela DetailsUser para mostrar todos os dados do usuário.
Para o campo Cidade, você pode usar um select com a biblioteca: @react-native-picker/picker
