// 7. Rotacionar Lista
// Descrição: Implemente uma função que rotacione os elementos de uma lista para a direita por K
// posições.
// Entrada: [1, 2, 3, 4, 5], K = 2
// Saída esperada: [4, 5, 1, 2, 3]
// Nível: Médio

function RotacionarLista(lista, posicao) {
  for (let i = 0; i <= posicao; i++) {
    lista.unshift(lista.pop());
  }
  return lista;
}

const entrada = [1, 2, 3, 4, 5];
const k = 2;
const saida = RotacionarLista(entrada, k);
console.log(saida);
