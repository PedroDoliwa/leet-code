// 4. Validação de Parênteses
// Descrição: Verifique se uma string com parênteses, colchetes e chaves está corretamente
// balanceada.
// Entrada: "{[()()]}" -> válido | "([)]" -> inválido
// Saída esperada: Válido ou Inválido
// Nível: Difícil

function ValidarParenteces(lista) {
  let pilha = [];

  for (let i = 0; i < lista.length; i++) {
    let x = pilha[pilha.length - 1];
    if (lista[i] == "(" || lista[i] == "{" || lista[i] == "[") {
      pilha.push(lista[i]);
    } else if (
      (x == "(" && lista[i] == ")") ||
      (x == "{" && lista[i] == "}") ||
      (x == "[" && lista[i] == "]")
    ) {
      pilha.pop();
    } else return "Inválido";
  }

  return "Válido";
}

const entrada = "{[()()]}";
const saida = ValidarParenteces(entrada);
console.log(saida);
