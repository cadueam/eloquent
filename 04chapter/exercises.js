//uma função que recebe start e end e retorna um array com todos os numeros
//
//
//




/* function sumAll(start, end) {
  let arrNums = [];
  for (let i = start; i < end; i++) {
    let num = i;
    console.log(`Num ${num} add to the arr`)
    arrNums.push(num);

  }

  return arrNums;
}


console.log(sumAll(5, 20)); */


function sum(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    soma = num + soma
  } return soma
}


console.log(sum([1, 2, 3, 4, 5, 6]));
