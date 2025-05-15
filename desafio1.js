// 1. Agrupamento de Anagramas
// Descrição: Dada uma lista de palavras, agrupe todas as palavras que são anagramas entre si.
// Entrada: ["roma", "amor", "casa", "saca", "maro"]
// Saída esperada: [['roma', 'amor', 'maro'], ['casa', 'saca']]
// Nível: Difícil

function Anagrama(lista) {
  let anagramas = {};

  for (let i = 0; i < lista.length; i++) {
    palavraOrdenada = lista[i].split("").sort().join();
    if (anagramas[palavraOrdenada]) {
      anagramas[palavraOrdenada].push(lista[i]);
    } else {
      anagramas[palavraOrdenada] = [lista[i]];
    }
  }
  return Object.values(anagramas);
}

const entrada = ["roma", "amor", "casa", "saca", "maro"];
const saida = Anagrama(entrada);
console.log(saida);
