# Calculadora de IMC (React Native)

Este projeto é uma calculadora de IMC (Índice de Massa Corporal) desenvolvida em React Native. O aplicativo permite que o usuário insira seu peso e altura, e retorna o valor do IMC, sua classificação (como "peso normal", "obesidade grau 1", etc.) e a faixa de peso ideal com base no IMC considerado saudável.

##### Clique [`aqui`](https://drive.google.com/file/d/1BU-KLWkKKrxMfOqgVW0xAcagJdbcdrFH/view?usp=drive_link) para o acesssar o video do projeto.

## Estrutura do Projeto

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

---

## Detalhamento da Lógica dos Componentes

### Classification.js
Este componente é responsável por classificar o valor do IMC calculado. Ele recebe uma `prop` chamada `imc` e, por meio da função `getClassification`, determina em qual faixa o IMC se encaixa. A lógica utiliza condicionais (`if/else`) para comparar o valor do IMC e retornar uma string correspondente à classificação:
- Abaixo de 18.5: Abaixo do peso
- 18.5 a 24.9: Peso normal
- 25 a 29.9: Sobrepeso
- 30 a 34.9: Obesidade grau 1
- 35 a 39.9: Obesidade grau 2
- 40 ou mais: Obesidade grau 3

Este resultado é exibido de forma estilizada abaixo do valor do IMC.


#### Implementação da Lógica de Classificação (`Classification.js`)

O componente utiliza a função `getClassification` para retornar a classificação adequada com base no valor de IMC:

```javascript
const getClassification = (imcValue) => {
  if (imcValue < 18.5) return 'Abaixo do peso';
  else if (imcValue < 25) return 'Peso normal';
  else if (imcValue < 30) return 'Sobrepeso';
  else if (imcValue < 35) return 'Obesidade grau 1';
  else if (imcValue < 40) return 'Obesidade grau 2';
  else return 'Obesidade grau 3';
};
```

O resultado é exibido assim:

```javascript
<Text style={styles.classification}>
  Classificação: {getClassification(imc)}
</Text>
```

---

### IdealWeight.js
Este componente exibe a faixa de peso ideal com base na altura informada pelo usuário. O peso ideal é definido como a faixa que mantém o IMC entre 18.5 e 24.9. Os valores mínimo e máximo são calculados dentro do componente `FormIMC` e passados como `props` (`min` e `max`) para o `IdealWeight`, que apenas os exibe com formatação visual.

#### Resultado Exibido no `IdealWeight.js`

No componente `IdealWeight`, a exibição ocorre da seguinte forma:

```javascript
<Text style={styles.title}>Faixa de Peso Ideal</Text>
<View style={styles.weightRange}>
  <Text style={styles.weightText}>{min} kg</Text>
  <Text style={styles.separator}>a</Text>
  <Text style={styles.weightText}>{max} kg</Text>
</View>
<Text style={styles.note}>(IMC entre 18.5 e 24.9)</Text>
```


### Integração no FormIMC.js
O `FormIMC` é o componente principal de entrada de dados e cálculo. Após a entrada e validação dos dados de peso e altura:
1. O IMC é calculado e armazenado no estado `imc`.
2. A faixa de peso ideal também é calculada com base na altura e armazenada no estado `idealWeight`.
3. O `FormIMC` renderiza condicionalmente os seguintes componentes:
   - `Result`: exibe o valor do IMC.
   - `Classification`: recebe o valor `imc` e exibe a classificação correspondente.
   - `IdealWeight`: recebe os valores mínimo e máximo da faixa de peso ideal e os exibe.

Com isso, o `FormIMC` centraliza o processamento e distribuição das informações para os componentes que se encarregam de exibi-las ao usuário.


#### Uso de `Classification` no `FormIMC.js`

Após o cálculo do IMC, o componente `Classification` é renderizado da seguinte forma:

```javascript
{imc && (
  <>
    <Result imc={imc} />
    <Classification imc={parseFloat(imc)} />
    {idealWeight.min && idealWeight.max && (
      <IdealWeight min={idealWeight.min} max={idealWeight.max} />
    )}
  </>
)}
```

Aqui, `parseFloat(imc)` garante que o valor passado para `Classification` seja numérico, pois o resultado do cálculo foi convertido em string com `.toFixed(1)`.



#### Implementação da Lógica de Classificação (`Classification.js`)

O componente utiliza a função `getClassification` para retornar a classificação adequada com base no valor de IMC:

```javascript
const getClassification = (imcValue) => {
  if (imcValue < 18.5) return 'Abaixo do peso';
  else if (imcValue < 25) return 'Peso normal';
  else if (imcValue < 30) return 'Sobrepeso';
  else if (imcValue < 35) return 'Obesidade grau 1';
  else if (imcValue < 40) return 'Obesidade grau 2';
  else return 'Obesidade grau 3';
};
```

O resultado é exibido assim:

```javascript
<Text style={styles.classification}>
  Classificação: {getClassification(imc)}
</Text>
```


#### Uso de `IdealWeight` no `FormIMC.js`

O componente `IdealWeight` recebe os valores calculados e exibe a faixa ideal:

```javascript
<IdealWeight min={idealWeight.min} max={idealWeight.max} />
```

Esses valores são definidos assim que o IMC é calculado:

```javascript
setIdealWeight({
  min: (18.5 * alturaMetros ** 2).toFixed(1),
  max: (24.9 * alturaMetros ** 2).toFixed(1)
});
```




