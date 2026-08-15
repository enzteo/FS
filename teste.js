// ## Aula 37 — Operadores de comparação

// Comparam dois valores e retornam `true` ou `false`.

// | Operador | Nome | O que compara |
// |---|---|---|
// | `>` | maior que | apenas valor |
// | `>=` | maior ou igual | apenas valor |
// | `<` | menor que | apenas valor |
// | `<=` | menor ou igual | apenas valor |
// | `==` | igualdade | apenas valor (faz conversão de tipo) |
// | `===` | igualdade estrita | valor **e** tipo |
// | `!=` | diferença | apenas valor (faz conversão de tipo) |
// | `!==` | diferença estrita | valor **e** tipo |

// ```js
// console.log(10 > 5);     // true
// console.log(10 >= 15);   // false
// console.log(5 < 10);     // true
// console.log(5 <= 3);     // false

// console.log(10 == "10");  // true  → compara só o valor
// console.log(10 === "10"); // false → tipos diferentes (number vs string)
// console.log(10 === 10);   // true

// console.log(10 != "10");  // false
// console.log(10 !== "10"); // true
// ```

// **Ponto de atenção:** sempre prefira `===` e `!==` no dia a dia. O `==`/`!=` faz conversão de tipo automática (coerção), o que pode gerar bugs difíceis de rastrear.

// ---

// ## Aula 38 — Operadores Lógicos

// | Operador | Nome | Regra |
// |---|---|---|
// | `&&` | AND (E) | true só se **todas** as expressões forem true |
// | `\|\|` | OR (OU) | true se **pelo menos uma** expressão for true |
// | `!` | NOT (NÃO) | inverte o valor booleano |

// ```js
// console.log(true && true);   // true
// console.log(true && false);  // false
// console.log(true && true && true && true); // true

// console.log(true || false);  // true

// console.log(!true);  // false
// console.log(!false); // true
// console.log(!!true); // true  → dupla negação "converte" para boolean
// ```

// ### Valores Falsy (considerados `false` em contexto booleano)
// ```
// false
// 0
// ""  ''  ``
// null
// undefined
// NaN
// ```
// Qualquer valor fora dessa lista é **truthy** (equivale a `true`).

// ```js
// const tenhoGrana = NaN; // falsy

// if (tenhoGrana) {
//   console.log('vou sair de casa');
// } else {
//   console.log('Nao vou sair de casa'); // executa isso
// }
// ```

// ---

// ## Aula 39 — Avaliação de Curto-Circuito (Short-Circuit)

// *(não estava no seu código, mas é continuação direta da aula 38 — resumo essencial)*

// O JavaScript **para de avaliar** a expressão assim que o resultado já está definido:

// - `&&` → para no primeiro valor **falsy** e retorna ele. Se todos forem truthy, retorna o último.
// - `||` → para no primeiro valor **truthy** e retorna ele. Se todos forem falsy, retorna o último.

// ```js
// console.log(0 && "qualquer coisa");    // 0 (para no primeiro falsy)
// console.log("A" && "B");               // "B" (todos truthy, retorna o último)

// console.log(0 || "padrão");            // "padrão" (0 é falsy, segue pro próximo)
// console.log("valor" || "padrão");      // "valor" (já é truthy, para aqui)
// ```

// **Uso prático comum:** definir valores padrão (`const nome = usuario.nome || "Anônimo"`) ou evitar erros ao acessar propriedades (`usuario && usuario.endereco`).

// ---

// ## Aula 40 — if, else if e else (1)

// Regras:
// - `if` pode ser usado sozinho.
// - `else` sempre exige um `if` antes.
// - Pode haver **vários** `else if`.
// - Só pode haver **um** `else` por bloco.
// - É possível usar `if`/`else` sem `else if`.

// ```js
// const numero = 10;

// if (numero <= 10) {
//   console.log("O numero é menor ou igual a 10");
// }
// ```

// ---

// ## Aula 41 — if, else if e else (2)

// Encadeamento completo com faixas de valores:

// ```js
// const numero = 10;

// if (numero >= 0 && numero <= 5) {
//   console.log("O numero esta entre 0 e 5");
// } else if (numero >= 6 && numero <= 8) {
//   console.log("O numero esta entre 6 e 8");
// } else if (numero >= 9 && numero <= 11) {
//   console.log("O numero esta entre 9 e 11"); // executa esta
// } else {
//   console.log("O numero esta fora do intervalo 0-11");
// }
// ```

// Exemplo aplicado (saudação por horário):
// ```js
// const hora = 50; // valor inválido de propósito, cai no else

// if (hora >= 0 && hora <= 11) {
//   console.log('Bom dia');
// } else if (hora >= 12 && hora <= 17) {
//   console.log('Boa Tarde');
// } else if (hora >= 18 && hora <= 23) {
//   console.log('Boa Noite');
// } else {
//   console.log('Ola'); // executa isso
// }
// ```

// ---

// ## Aula 46 — Objeto Date

// Referência oficial: [MDN — Date](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)

// ```js
// const data = new Date('2019-04-20 20:15:59.100');

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // getMonth() começa em 0 (jan=0)
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 = Domingo, 6 = Sábado
// console.log(data.toString());
// ```

// ### Função utilitária: formatar data no padrão brasileiro (dd/mm/aaaa hh:mm:ss)

// ```js
// function zeroAEsquerda(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function formataData(data) {
//   const dia = zeroAEsquerda(data.getDate());
//   const mes = zeroAEsquerda(data.getMonth() + 1);
//   const ano = data.getFullYear(); // ano não precisa de zero à esquerda
//   const hora = zeroAEsquerda(data.getHours());
//   const min = zeroAEsquerda(data.getMinutes());
//   const seg = zeroAEsquerda(data.getSeconds());

//   return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
// }

// const dataBrasil = formataData(new Date());
// console.log(dataBrasil);
// ```

// > **Correção em relação ao seu código original:** no seu arquivo, `zeroAEsquerda` também estava sendo aplicada ao `ano` (`zeroAEsquerda(data.getFullYear())`). Isso é desnecessário e incorreto — a função só faz sentido para valores de 0 a 9 (dia, mês, hora, min, seg). Ano nunca precisa de zero à esquerda. Corrigido acima.

// ---

function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo'
        return diaSemanaTexto
    case 1:
        diaSemanaTexto = 'segunda'
        return diaSemanaTexto
    case 2:
        diaSemanaTexto = 'terça'
        return diaSemanaTexto
    case 3:
        diaSemanaTexto = 'quarta'
        return diaSemanaTexto
    case 4:
        diaSemanaTexto = 'quinta'
        return diaSemanaTexto
    case 5:
        diaSemanaTexto = 'sexta'
        return diaSemanaTexto
    case 6:
        diaSemanaTexto = 'sabado'
        return diaSemanaTexto
}
return diaSemanaTexto
}



const data = new Date()
const diaSemanaTexto
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)

console.log(diaSemana, diaSemanaTexto)

