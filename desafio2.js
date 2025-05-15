// 2. Soma de Pares com Valor-Alvo
// Descrição: Dado um array e um número-alvo, encontre todos os pares de números que somam
// esse valor.
// Lista: [2, 4, 3, 5, 7, 8], Alvo: 10
// Saída esperada: [(2, 8), (3, 7)]
// Nível: Médio-Difícil

function SomaParesComAlvo(lista, alvo) {
  let soma = [];
  for (let i = 0; i <= lista.length; i++) {
    for (let j = i; j <= lista.length; j++) {
      if (i != j && lista[i] + lista[j] == alvo) {
        resultado = `(${lista[i]},${lista[j]})`;
        soma.push(resultado);
      }
    }
  }
  return soma;
}

let entrada = [2, 4, 3, 5, 7, 8];
let alvo = 10;
sainda = SomaParesComAlvo(entrada, alvo);
console.log(sainda);
