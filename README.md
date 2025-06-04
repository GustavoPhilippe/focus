# Pomodoro Focus App - MVP

Este é o código fonte do MVP (Produto Mínimo Viável) para o aplicativo de gestão de rotina Pomodoro Focus App, desenvolvido com React Native.

## Funcionalidades Implementadas (MVP)

*   **Autenticação:** Cadastro, Login e Recuperação de Senha via Email/Senha (Firebase Auth).
*   **Gestão de Tarefas:** CRUD completo (Criar, Ler, Atualizar, Deletar) de tarefas associadas ao usuário logado (Firebase Firestore).
*   **Timer Pomodoro:** Timer funcional com ciclos de Foco e Descanso (configuração básica).
*   **Navegação:** Navegação entre telas de autenticação e telas principais do app (@react-navigation).
*   **Base de Pagamentos:** Estrutura inicial para integração com Stripe (requer configuração de chave e backend).

## Pré-requisitos

*   Node.js (LTS recomendado)
*   npm ou Yarn
*   Ambiente de desenvolvimento React Native configurado para Android e/ou iOS (Android Studio, Xcode, etc.). Siga o [guia oficial do React Native](https://reactnative.dev/docs/environment-setup).
*   Conta Firebase e um projeto criado.
*   Conta Stripe (opcional, para testar a base de pagamentos).

## Configuração

1.  **Clonar/Extrair o Projeto:** Baixe e extraia o código fonte para um diretório local.

2.  **Instalar Dependências:** Navegue até o diretório raiz do projeto (`PomodoroFocusApp`) no terminal e execute:
    ```bash
    npm install
    # ou
    # yarn install
    ```

3.  **Configurar Firebase:**
    *   Acesse seu projeto no [Console do Firebase](https://console.firebase.google.com/).
    *   Habilite **Authentication** (método Email/Password).
    *   Habilite **Firestore Database** (inicie em modo de produção ou teste, ajuste as regras de segurança conforme necessário - *inicialmente, permita leitura/escrita para usuários autenticados*).
    *   **Android:** Baixe o arquivo `google-services.json` do seu projeto Firebase e coloque-o em `PomodoroFocusApp/android/app/`.
    *   **iOS:** Baixe o arquivo `GoogleService-Info.plist`. Abra o projeto iOS (`PomodoroFocusApp/ios/PomodoroFocusApp.xcworkspace`) no Xcode, clique com o botão direito na pasta `PomodoroFocusApp` (a interna) e selecione "Add Files to PomodoroFocusApp". Adicione o `.plist` baixado. Certifique-se que ele está incluído no Target Membership.
    *   **iOS (Pods):** Navegue até a pasta `ios` no terminal e execute `npx pod-install` para instalar as dependências nativas do Firebase.
    *   Consulte a [documentação do React Native Firebase](https://rnfirebase.io/) para etapas adicionais de configuração nativa, se necessário (geralmente envolve adicionar linhas ao `build.gradle` em Android ou ao `AppDelegate.m`/`AppDelegate.swift` em iOS).

4.  **Configurar Stripe (Opcional):**
    *   Obtenha sua **Chave Publicável (Publishable Key)** no [Dashboard do Stripe](https://dashboard.stripe.com/).
    *   Abra o arquivo `src/screens/App/SubscriptionScreen.js`.
    *   Substitua a string `"SUA_CHAVE_PUBLICAVEL_STRIPE_AQUI"` pela sua chave real.
    *   **Importante:** A funcionalidade de pagamento *não funcionará completamente* sem um backend para criar PaymentIntents/Subscriptions. Esta tela é apenas um placeholder.
    *   Consulte a [documentação do @stripe/stripe-react-native](https://github.com/stripe/stripe-react-native#installation) para verificar se há etapas de configuração nativa adicionais.

## Executando o Aplicativo

1.  **Iniciar o Metro Bundler:**
    ```bash
    npm start
    # ou
    # yarn start
    ```

2.  **Executar em Android:**
    *   Certifique-se de ter um emulador Android rodando ou um dispositivo conectado e reconhecido via ADB.
    *   Em um novo terminal, na raiz do projeto, execute:
        ```bash
        npm run android
        # ou
        # yarn android
        ```

3.  **Executar em iOS:**
    *   Certifique-se de ter um simulador iOS rodando ou um dispositivo conectado.
    *   Em um novo terminal, na raiz do projeto, execute:
        ```bash
        npm run ios
        # ou
        # yarn ios
        ```

## Próximos Passos (Pós-MVP)

*   Implementar backend para pagamentos Stripe.
*   Adicionar notificações push (Firebase Cloud Messaging) para o Pomodoro.
*   Permitir ajuste dos tempos do Pomodoro.
*   Integrar o Timer Pomodoro com a seleção de tarefas.
*   Implementar IA Adaptativa para rotina personalizada.
*   Desenvolver sistema de Afiliados e Marketing Multinível.
*   Implementar modo "Desempenho Total" (bloqueio de apps - requer permissões especiais).
*   Refinar UI/UX.
*   Adicionar testes.

## Observações

*   Este código foi gerado em um ambiente simulado e não foi testado em dispositivos reais. Podem ser necessários ajustes específicos da plataforma.
*   As regras de segurança do Firestore precisam ser configuradas adequadamente para produção.
*   A integração completa do Stripe requer um servidor backend.

