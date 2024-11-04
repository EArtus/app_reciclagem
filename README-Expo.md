<<<<<<< HEAD
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
=======
# Projeto-Desenvolvimento-de-Sistemas-II

Descrição: O sistema é uma plataforma mobile que facilita a coleta e o descarte adequado de resíduos recicláveis para o Recanto Maestro. Através do sistema, os usuários podem identificar os pontos de descarte mais próximos ou agendar coletas domiciliares para os resíduos.

Objetivo: Promover a conscientização sobre a importância da reciclagem e fornecer um meio prático para o descarte responsável de resíduos, incentivando comportamentos sustentáveis dentro da comunidade e apoiando a economia local através da valorização dos trabalhadores envolvidos no processo de reciclagem.

# Tecnologias Utilizadas

Frontend: React para interfaces de usuário interativas.
Backend: Node.js
Banco de Dados: PostgreSQL gerenciado com TypeORM para relacionamento e integridade dos dados.
Autenticação: JWT (JSON Web Tokens) para segurança nas sessões de usuário.
Geolocalização: Google Maps API para identificação de pontos de descarte próximos.
Notificações: Twilio para envio de SMS e NodeMailer para e-mails.
Documentação da API: Postman para documentar e testar as APIs.
Design e Prototipação: Figma para desenho das interfaces e fluxos de usuário.


# Requisitos Funcionais

RF1: Cadastro e autenticação de usuários.
RF2: Cadastro de itens recicláveis pelo usuário.
RF3: Localização de pontos de descarte com base na geolocalização do usuário.
RF4: Agendamento de coletas domiciliares.
RF5: Visualização e gerenciamento de coletas agendadas no painel de usuário.
RF6: Envio de notificações sobre coletas agendadas e outras informações relevantes.
RF7: Avaliação do serviço de coleta.
RF8: Acesso a informações educacionais sobre reciclagem.


# Requisitos Não Funcionais

RNF1: O sistema deve ser responsivo e acessível em diferentes dispositivos (desktops, tablets e smartphones).
RNF2: Alta disponibilidade e escalabilidade para suportar um grande número de acessos simultâneos.
RNF3: Segurança robusta para proteção de dados pessoais e de autenticação.
RNF4: Interface intuitiva e de fácil navegação.
RNF5: O sistema deve ter uma latência baixa, com respostas rápidas mesmo em condições de rede variáveis.


# Regras de Negócio

RN1: Somente usuários registrados e autenticados podem agendar coletas.
RN2: Os itens para descarte devem ser especificados claramente no agendamento.
RN3: As coletas devem ser agendadas com pelo menos 24 horas de antecedência.
RN4: Cada ponto de descarte exibirá informações específicas sobre tipos de resíduo aceitos.
RN5: Feedbacks dos usuários após a coleta são obrigatórios para melhorar o serviço.


# Modelagem do Banco de Dados

![diagrama](https://github.com/user-attachments/assets/16fb171d-5818-4968-a357-9ca91dbac54f)



>>>>>>> 6a01eeae37a37fa78bb937c28cd1bbb9953885e5
