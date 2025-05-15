// 6. Encontrar o Primeiro Caractere Não Repetido
// Descrição: Dada uma string, encontre o primeiro caractere que não se repete.
// Entrada: "aabccdeff"
// Saída esperada: 'b'
// Nível: Médio

function EncontreCarcterNaoRepetido(palavra) {
  for (let i = 0; i < palavra.length; i++) {
    let repedito = false;

    for (let j = 0; j < palavra.length; j++) {
      if (i != j && palavra[i] == palavra[j]) {
        repedito = true;
        break;
      }
    }

    if (!repedito) {
      return palavra.charAt(i);
    }
  }
  return null;
}

const entrada = "aabccff";
const saida = EncontreCarcterNaoRepetido(entrada);
console.log(saida);
