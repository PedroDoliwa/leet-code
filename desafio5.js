// 5. Soma Máxima de Subarray
// Descrição: Dado um array de números inteiros (positivos e negativos), encontre a soma máxima de
// um subarray contínuo.
// Entrada: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Saída esperada: 6 (subarray: [4, -1, 2, 1])
// Nível: Difícil

function SomaMaximaSubarray(lista) {
  let maximo = lista[0];
  let atual = lista[0];
  let inicio = 0;
  let final = 0;
  let subarray = [];

  for (let i = 0; i < lista.length; i++) {
    atual = Math.max(lista[i], atual + lista[i]);
    maximo = Math.max(maximo, atual);

    if (lista[i] == atual) {
      inicio = i;
    }
    if (atual == maximo) {
      final = i;
    }
  }

  subarray = lista.slice(inicio, final + 1);
  resultado = `${maximo} (subarray ${subarray})`;
  return resultado;

  // let maximo = lista[0];
  // let atual = lista[0];
  // let inicio = 0;
  // let final = 0;
  // let subarray = [];

  // for (let i = 0; i < lista.length; i++) {
  //   atual = Math.max(lista[i], atual + lista[i]);
  //   maximo = Math.max(maximo, atual);

  //   if (atual == maximo) {
  //     final = i;
  //   }
  //   if (lista[i] == atual) {
  //     inicio = i;
  //   }
  // }

  // subarray = lista.slice(inicio, final + 1);
  // resultado = `${maximo} (subarray ${subarray})`;
  // return resultado;
}

let entrada = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(SomaMaximaSubarray(entrada));
