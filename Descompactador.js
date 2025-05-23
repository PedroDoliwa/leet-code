// Descompactador de Sequências
// Descrição: Implemente uma função que recebe uma string compactada no formato do exemplo anterior e a descompacta.
// Entrada:
// "a3b4c2a2"
// Saída esperada:
// "aaabbbbccaa"
// Nível: Médio

// function Descompactador(palavra) {
//   let palavraDescompactada = "";

//   for (let i = 0; i < palavra.length; i++) {
//     if (!isNaN(palavra[i])) {
//       let quantidade = palavra.charAt(i);

//       for (let j = 1; j <= quantidade; j++) {
//         palavraDescompactada += palavra[i - 1];
//       }
//     }
//   }

//   return palavraDescompactada;
// }

// console.log(Descompactador("a3b4c2a2"));

// agr funciona com letras ou só numeros
function Descompactador(palavra) {
  let palavraDescompactada = "";

  for (let i = 0; i < palavra.length; i++) {
    if (i % 2 == 0) {
      let quantidade = palavra.charAt(i + 1);
      for (let j = 1; j <= quantidade; j++) {
        palavraDescompactada += palavra[i];
      }
    }
  }
  return palavraDescompactada;
}

console.log(Descompactador("122342"));
