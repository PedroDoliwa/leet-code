// 3. Remover Caracteres Repetidos Consecutivos
// Descrição: Dada uma string, remova caracteres repetidos consecutivos.
// Entrada: "aaabbccdda"
// Saída esperada: "abcda"
// Nível: Médio

function RemoverCaracteresConsecutivos(palavra) {
  let resultado = palavra[0];

  for (let i = 1; i < palavra.length; i++) {
    if (palavra[i] !== palavra[i - 1]) {
      resultado += palavra[i];
    }
  }

  return resultado;
}

const entrada = "aaabbccdda";
const saida = RemoverCaracteresConsecutivos(entrada);
console.log(saida);
