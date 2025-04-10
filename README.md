# Calculadora de IMC (React Native)

Este projeto é uma calculadora de IMC (Índice de Massa Corporal) desenvolvida em React Native. O aplicativo permite que o usuário insira seu peso e altura, e retorna o valor do IMC, sua classificação (como "peso normal", "obesidade grau 1", etc.) e a faixa de peso ideal com base no IMC considerado saudável.


## Estrutura do Projeto

https://github.com/user-attachments/assets/f8460e08-3f90-40a4-a1da-456db15f7972

### 1. `App.js`
Componente principal do aplicativo. Suas principais responsabilidades são:
- Usar `ScrollView` para tornar o conteúdo rolável.
- Utilizar o componente `DismissKeyboard` para esconder o teclado ao tocar fora dos campos de entrada.
- Renderizar os componentes `Title` e `FormIMC`.

### 2. `FormIMC.js`
Formulário de entrada e lógica central do app:
- Utiliza estados para armazenar o peso, altura, IMC e faixa de peso ideal.
- Possui validação de entrada para peso e altura.
- Realiza o cálculo do IMC.
- Renderiza os componentes `Result`, `Classification` e `IdealWeight` com base no resultado calculado.

### 3. `Title.js`
Componente responsável por exibir o título da aplicação:

```
Calculadora de IMC
```

### 4. `Result.js`
Mostra o resultado do IMC calculado com o seguinte formato:

```
Seu IMC: 23.4
```

### 5. `Classification.js`
Componente que classifica o IMC de acordo com os padrões da Organização Mundial da Saúde:

- Abaixo de 18.5: Abaixo do peso
- De 18.5 a 24.9: Peso normal
- De 25 a 29.9: Sobrepeso
- De 30 a 34.9: Obesidade grau 1
- De 35 a 39.9: Obesidade grau 2
- Acima de 40: Obesidade grau 3

### 6. `IdealWeight.js`
Calcula e exibe a faixa de peso ideal com base na altura informada, utilizando como referência um IMC entre 18.5 e 24.9.

## Funcionalidades

- Entrada de dados (peso e altura)
- Validação de dados
- Cálculo de IMC
- Classificação de IMC
- Cálculo e exibição da faixa de peso ideal
- Interface simples e responsiva

## Tecnologias utilizadas

- React Native
- JavaScript
- Estilização com `StyleSheet` do React Native

## Como executar

1. Clone o repositório.
2. Instale as dependências com `npm install` ou `yarn`.
3. Execute com `npx expo start` (se estiver usando Expo).
4. Use um emulador ou o aplicativo do Expo no celular para visualizar.
