/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// Modificação pra meu primeiro commit
const average = (array) => {
  let sum = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let i = 0; i < array.length; i += 1) {
    const type = typeof array[i];
    if (type !== 'number') {
      return undefined;
    } sum += array[i];
  }
  const averageEnd = Math.round(sum / array.length);
  return averageEnd;
};

module.exports = average;

// 15 - constante recebe um function com os arrays
// 16 criei uma variavel que armazenará valores da minha estrutura de repetição (soma dos valores das posições dos arrays)
// 17 se o tamanho do meu array da function for estreitamente igual a 0
// 18 retornará undefined

// 20 uma estrutura de repetição que irá percorré cada possição do meu array
// 21 criei uma constante de armazanerá qual o valor primitivo das posições do meu array
// 22 se o tipo e o valor de type for diferente de 'number'
// 23 será retornado undefined 
// 24 soma ao valor da variavel 'sum' a soma das posiçoes do array
// 25 cria constante que arrendorá para o inteiro mais proximo a divisão das somas das posições dos arrays pelo quantidade de posições
// 26 retorna a constante