// 4. Validação de Parênteses
// Descrição: Verifique se uma string com parênteses, colchetes e chaves está corretamente
// balanceada.
// Entrada: "{[()()]}" -> válido | "([)]" -> inválido
// Saída esperada: Válido ou Inválido
// Nível: Difícil

function ValidarParenteces(lista) {
  let listaOrg = String();

  for (let i = 0; i < lista.length; i++) {
    if (
      lista[i] == "(" ||
      lista[i] == "{" ||
      lista[i] == "[" ||
      lista[i] == ")" ||
      lista[i] == "}" ||
      lista[i] == "]"
    ) {
      listaOrg += lista[i];
    }
  }

  console.log(listaOrg);

  let pilha = [];

  for (let i = 0; i < listaOrg.length; i++) {
    let x = pilha[pilha.length - 1];
    if (listaOrg[i] == "(" || listaOrg[i] == "{" || listaOrg[i] == "[") {
      pilha.push(listaOrg[i]);
    } else if (
      (x == "(" && listaOrg[i] == ")") ||
      (x == "{" && listaOrg[i] == "}") ||
      (x == "[" && listaOrg[i] == "]")
    ) {
      pilha.pop();
    } else return "Inválido";
  }

  if (pilha.length === 0) {
    return "Váildo";
  } else return "Inválido";
}

const entrada = "{as[(1)43(--)s}";
const saida = ValidarParenteces(entrada);
console.log(saida);
