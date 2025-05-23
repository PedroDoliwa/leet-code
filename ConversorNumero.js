function Conversor(numero) {
  numeroBasico = [
    "zero",
    "um",
    "dois",
    "tres",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "doze",
    "treze",
    "quatorze",
    "quinze",
    "dezeseis",
    "sezesete",
    "dezoito",
    "dezenove",
  ];
  numeroAcima = [
    "vinte",
    "trinta",
    "quarenta",
    "cinquenta",
    "sessenta",
    "setenta",
    "oitenta",
    "noventa",
  ];

  let divide = 0;
  let n1 = 0;
  let n2 = 0;

  if (numero > 99 || numero < 0) {
    return "Erro";
  } else {
    if (numero < 20) {
      return numeroBasico[numero];
    } else {
      divide = numero / 10;
      separaString = divide.toString().split(".");
      n1 = parseInt(separaString[0], 10);
      n2 = parseInt(separaString[1], 10);

      if (separaString.length == 1) {
        return numeroAcima[n1 - 2];
      } else {
        return numeroAcima[n1 - 2] + " e " + numeroBasico[n2];
      }
    }
  }
}
console.log(Conversor(26));
