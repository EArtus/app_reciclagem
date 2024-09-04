# Projeto-Desenvolvimento-de-Sistemas-II

Descrição: O sistema é uma plataforma online que facilita a coleta e o descarte adequado de resíduos recicláveis para os moradores do distrito Recanto Maestro. Através do sistema, os usuários podem identificar os pontos de descarte mais próximos ou agendar coletas domiciliares para os resíduos.

Objetivo: Promover a conscientização sobre a importância da reciclagem e fornecer um meio prático para o descarte responsável de resíduos, incentivando comportamentos sustentáveis dentro da comunidade e apoiando a economia local através da valorização dos trabalhadores envolvidos no processo de reciclagem.

Tecnologias Utilizadas
Frontend: React para interfaces de usuário interativas, com Redux para gerenciamento de estado.
Backend: Node.js com Express para a criação de APIs RESTful.
Banco de Dados: PostgreSQL gerenciado com TypeORM para relacionamento e integridade dos dados.
Autenticação: JWT (JSON Web Tokens) para segurança nas sessões de usuário.
Geolocalização: Google Maps API para identificação de pontos de descarte próximos.
Notificações: Twilio para envio de SMS e NodeMailer para e-mails.
Documentação da API: Postman para documentar e testar as APIs.
Design e Prototipação: Figma para desenho das interfaces e fluxos de usuário.


Requisitos Funcionais
RF1: Cadastro e autenticação de usuários.
RF2: Cadastro de itens recicláveis pelo usuário.
RF3: Localização de pontos de descarte com base na geolocalização do usuário.
RF4: Agendamento de coletas domiciliares.
RF5: Visualização e gerenciamento de coletas agendadas no painel de usuário.
RF6: Envio de notificações sobre coletas agendadas e outras informações relevantes.
RF7: Avaliação do serviço de coleta.
RF8: Acesso a informações educacionais sobre reciclagem.


Requisitos Não Funcionais
RNF1: O sistema deve ser responsivo e acessível em diferentes dispositivos (desktops, tablets e smartphones).
RNF2: Alta disponibilidade e escalabilidade para suportar um grande número de acessos simultâneos.
RNF3: Segurança robusta para proteção de dados pessoais e de autenticação.
RNF4: Interface intuitiva e de fácil navegação.
RNF5: O sistema deve ter uma latência baixa, com respostas rápidas mesmo em condições de rede variáveis.


Regras de Negócio
RN1: Somente usuários registrados e autenticados podem agendar coletas.
RN2: Os itens para descarte devem ser especificados claramente no agendamento.
RN3: As coletas devem ser agendadas com pelo menos 24 horas de antecedência.
RN4: Cada ponto de descarte exibirá informações específicas sobre tipos de resíduo aceitos.
RN5: Feedbacks dos usuários após a coleta são obrigatórios para melhorar o serviço.


Modelagem do Banco de Dados
(Essa parte precisaria de um diagrama detalhado, mas posso listar algumas entidades principais)

Usuário: armazena informações de login e contato.
Item: detalhes sobre cada item reciclável.
Coleta: informações sobre coletas agendadas, incluindo usuário, itens e datas.
Ponto de Descarte: localização e tipos de resíduos aceitos.



