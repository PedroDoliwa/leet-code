function Compactador(palavra) {
  let palavraCompactada = "";
  let quantidade = 1;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] == palavra[i + 1]) {
      quantidade += 1;
    } else if (quantidade == 1) {
      palavraCompactada += palavra[i];
    } else {
      palavraCompactada += palavra[i] + quantidade;
      quantidade = 1;
    }
  }
  return palavraCompactada;
}
console.log(Compactador("abbbbffccc"));
