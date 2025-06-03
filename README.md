# ♻️ Projeto DS II – Plataforma de Coleta Seletiva

## 📱 Descrição

Aplicativo mobile desenvolvido para a disciplina **Desenvolvimento de Sistemas II**, com o objetivo de facilitar a coleta e o descarte adequado de resíduos recicláveis na comunidade do **Recanto Maestro**.

Através do sistema, os usuários podem:

- Identificar os pontos de descarte mais próximos.
- Agendar coletas domiciliares para os resíduos recicláveis.
- Acessar informações educacionais sobre reciclagem.

---

## 🎯 Objetivo

Promover a conscientização sobre a importância da reciclagem e fornecer um meio prático para o descarte responsável de resíduos. O sistema visa incentivar comportamentos sustentáveis dentro da comunidade e apoiar a economia local através da valorização dos trabalhadores envolvidos no processo de reciclagem.

---

## ✅ Requisitos Funcionais

- **RF1**: Cadastro e autenticação de usuários.
- **RF2**: Cadastro de itens recicláveis pelo usuário.
- **RF3**: Localização de pontos de descarte com base na geolocalização do usuário.
- **RF4**: Agendamento de coletas domiciliares.
- **RF5**: Visualização e gerenciamento de coletas agendadas no painel de usuário.
- **RF6**: Envio de notificações sobre coletas agendadas e outras informações relevantes.
- **RF7**: Avaliação do serviço de coleta.
- **RF8**: Acesso a informações educacionais sobre reciclagem.

---

## 🚀 Requisitos Não Funcionais

- **RNF1**: Responsivo e acessível em diferentes dispositivos (smartphones, tablets, desktops).
- **RNF2**: Alta disponibilidade e escalabilidade para múltiplos acessos simultâneos.
- **RNF3**: Segurança robusta para proteger dados pessoais e autenticação.
- **RNF4**: Interface intuitiva e de fácil navegação.
- **RNF5**: Baixa latência, mesmo com conexões instáveis.

---

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- Firebase Authentication
- Firebase Firestore
- React Navigation
- Axios
- Geolocation API

---

## 📦 Como executar o projeto

### ✅ Pré-requisitos

Antes de iniciar, é necessário ter instalado:

- [Node.js (recomendado: LTS)]
- [Expo CLI]
- [Git]
- Um editor de código, como [Visual Studio Code]

> Você também pode instalar o **Expo Go** no seu celular (Android/iOS) para testar o app via QR code.

---

### 🔧 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/EArtus/app_reciclagem.git
```

2. **Acesse a pasta do projeto**
```bash
cd app_reciclagem
```

3. **Instale as dependências**
```bash
npm install
# ou, se estiver usando yarn:
# yarn
```

---

### ▶️ Executando o projeto

1. **Inicie o servidor de desenvolvimento**
```bash
npx expo start
```

2. **Escolha como rodar o app:**
   - **No navegador:** pressione `w` no terminal
   - **No emulador Android:** pressione `a` (requer Android Studio configurado)
   - **No emulador iOS:** pressione `i` (macOS com Xcode instalado)
   - **No seu celular:** escaneie o QR code com o app **Expo Go**

---

### ⚠️ Observações

- Certifique-se de estar com o celular e o PC na **mesma rede Wi-Fi**, se for rodar via QR code.
- O projeto utiliza **Firebase** para autenticação e banco de dados, portanto é necessário configurar o arquivo de conexão (`firebaseConfig.js`). Se esse arquivo estiver ausente por segurança, entre em contato com o autor para obter os dados corretos ou conecte sua própria instância Firebase.
