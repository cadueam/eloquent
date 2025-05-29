// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.


let arr = [[1, 2, 3], [4, 5], [6]];

function concat(arr) {

  let newArr = arr.reduce((acc, val) => acc.concat(val));

  return newArr

}


console.log(concat(arr));


function every(array, test) {

  for (let n of array) {
    return test(n)
  };
}


console.log(every([1, 3, 5], n => n > 3))
