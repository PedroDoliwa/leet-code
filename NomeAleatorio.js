// Criador de Nomes Aleatórios
// Descrição: Implemente uma função que gera um "nome fictício" seguindo o padrão:
// Consoante + Vogal + Consoante + Vogal ... até ter N caracteres.
// Entrada:
// N = 6
// Saída esperada:
// Exemplo: "boremu" ou "lazito"
// Nível: EZ

function gerarNomeAleatorio(n) {
  let vogais = ["a", "e", "i", "o", "u"];
  let consoante = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let nome = "";

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      nome += consoante[Math.floor(Math.random() * consoante.length)];
    } else {
      nome += vogais[Math.floor(Math.random() * vogais.length)];
    }
  }
  return nome;
}

console.log(gerarNomeAleatorio(5));
