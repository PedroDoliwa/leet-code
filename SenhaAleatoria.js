function geradorDeSenha(n) {
  tudo = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "@",
    "!",
    "#",
    "$",
    "%",
    "&",
    "*",
  ];

  letra = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  letraM = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  numero = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  simbolo = ["@", "!", "#", "$", "%", "&", "*"];

  if (n < 4) {
    return "minimo 4 letras";
  } else {
    let senha = "";
    let Temletra = false;
    let TemletraM = false;
    let Temnumero = false;
    let Temsimbolo = false;

    while (
      Temletra != true ||
      TemletraM != true ||
      Temnumero != true ||
      Temsimbolo != true
    ) {
      senha = "";
      for (let i = 0; i < n; i++) {
        senha += tudo[Math.floor(Math.random() * tudo.length)];
      }
      for (let i = 0; i < n; i++) {
        if (senha.includes(letra[i])) {
          Temletra = true;
        }
        if (senha.includes(letraM[i])) {
          TemletraM = true;
        }
        if (senha.includes(numero[i])) {
          Temnumero = true;
        }
        if (senha.includes(simbolo[i])) {
          Temsimbolo = true;
        }
      }
    }
    console.log(Temletra, TemletraM, Temnumero, Temsimbolo);
    return senha;
  }
}
console.log(geradorDeSenha(10));
