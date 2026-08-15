// // // // // /*
// // // // // Operadores de comparação
// // // // // */

// // // // // // > maior que
// // // // // console.log(10 > 5); // true

// // // // // // >= maior que ou igual a
// // // // // console.log(10 >= 10); // true
// // // // // console.log(10 >= 15); // false

// // // // // // < menor que
// // // // // console.log(5 < 10); // true

// // // // // // <= menor que ou igual a
// // // // // console.log(5 <= 5); // true
// // // // // console.log(5 <= 3); // false

// // // // // // == igualdade (compara apenas o valor)
// // // // // console.log(10 == "10"); // true

// // // // // // === igualdade estrita (compara valor e tipo)
// // // // // console.logf(10 === "10"); // false
// // // // // console.log(10 === 10);   // true

// // // // // // != diferente (compara apenas o valor)
// // // // // console.log(10 != "10"); // false
// // // // // console.log(10 != 20);   // true

// // // // // // !== diferente estrito (compara valor e tipo)
// // // // // console.log(10 !== "10"); // true
// // // // // console.log(10 !== 10);   // false


// // // // // /*
// // // // // Operadores lógicos
// // // // // && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
// // // // // -------------------------------------------------------------------------------------
// // // // // const expressao1 = true && true;
// // // // // console.log(expressao1); // true

// // // // // const expressao2 = true && false;
// // // // // console.log(expressao2); // false

// // // // // console.log(true && true); // verdadeiro
// // // // // console.log(true && false); // falso

// // // // // const expressaoAnd = true && true && true && true;
// // // // // console.log(expressaoAnd); // true
// // // // // ----------------------------------------------------------------------------------------
// // // // // || -> OR -> OU

// // // // // const expressaoOr = true || false;
// // // // // console.log(expressaoOr); // true

// // // // // Se tiver um true (verdadeiro) em qualquer expressão, o resultado será true (verdadeiro)
// // // // // Se tiver todos os falsos, o resultado será false (falso)
// // // // // -----------------------------------------------------------------------------------------
// // // // // ! -> NOT -> NÃO

// // // // // console.log(!true); // false
// // // // // console.log(!false); // true

// // // // // console.log(!!true) retorna o valor verdadeiro (true)
// // // // // console.log(!!false) retorna o valor falso (false)
// // // // // */


// // // // // /*

// // // // // false
// // // // // 0
// // // // // ""
// // // // // ''
// // // // // ``
// // // // // null
// // // // // undefined
// // // // // NaN
// // // // // */

// // // // // const hora = 50;

// // // // // if (hora >= 0 && hora <= 11) {
// // // // //     console.log('Bom dia')
// // // // // } else if (hora >= 12 && hora <= 17) {
// // // // //     console.log('Boa Tarde')
// // // // // } else if (hora >= 18 && hora <= 23) {
// // // // //     console.log('Boa Noite')
// // // // // } else {
// // // // //     console.log('Ola')
// // // // // }

// // // // /*
// // // // if pode ser utlizado sozinho
// // // // sempre que eu utilizo a palavra else, preciso de um if antes
// // // // eu posso varios else if na checagem
// // // // so posso ter um else na checagem
// // // // Podemos utilizar condições sem else if, apenas utlizando else e if

// // // // */

// // // // const tenhoGrana = NaN

// // // // if (tenhoGrana){
// // // //     console.log('vou sair de casa')
// // // // } else {
// // // //     console.log('Nao vou sair de casa')
// // // // }


// // // // const numero = 10

// // // // //Se (numero >= 0 && numero <= 5) ocorrer, faça isso {codigo}
// // // // // Se nao faça isso {o codigo}

// // // // if (numero <= 10) {
// // // //     console.log("O numero é menor ou igual a 10")
// // // // }

// // // // if (numero >= 0 && numero <= 5) {
// // // //     console.log("O numero esta entre 0 e 5")
// // // // } else if (numero >= 6 && numero <= 8) {
// // // //     console.log("O numero esta entre 6 e 8")
// // // // } else if (numero >= 9 && numero <= 11) {
// // // //     console.log("O numero esta ente 9 e 11")
// // // // } else {
// // // //     console.log("O numero esta entre 0 e 11 ")
// // // // }

// // // // console.log("...Aqui vai o resto do codigo")
----------------------------------------------------------------------------------------------------
// // // // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// // // // const tresHoras = 60 * 60 * 3 * 1000;
// // // // const umDia = 60 * 60 * 24 * 1000;
// // // // const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
// // // // const data = new Date(2019, 3); // a, m, d, h, M, s, ms
// // // const data = new Date('2019-04-20 20:15:59.100');
// // // console.log('Dia', data.getDate());
// // // console.log('Mês', data.getMonth() + 1); // Mês começa do zero
// // // console.log('Ano', data.getFullYear());
// // // console.log('Hora', data.getHours());
// // // console.log('Min', data.getMinutes());
// // // console.log('Seg', data.getSeconds());
// // // console.log('ms', data.getMilliseconds());
// // // console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// // // console.log(data.toString());
// // // // console.log(Date.now());


// // function zeroAEsquerda (num) {
// //   return num >= 10 ? num : `0${num}`;
// // }

// // function formataData(data) {
// //   const dia = zeroAEsquerda(data.getDate());
// //   const mes = zeroAEsquerda(data.getMonth() + 1);
// //   const ano = zeroAEsquerda(data.getFullYear());
// //   const hora = zeroAEsquerda(data.getHours());
// //   const min = zeroAEsquerda(data.getMinutes());
// //   const seg = zeroAEsquerda(data.getSeconds());

// //   return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
// // }

// // const data = new Date();
// // const dataBrasil = formataData(data);
// // // console.log(dataBrasil)