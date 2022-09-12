"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  const arr = num.toString().split("");
  const numberArr = [];
  for (const number of arr) {
    numberArr.push(Number(number));
  }

  let totalDecimal = 0;
  for (let i = 0; i < numberArr.length; i++) {
    console.log(numberArr[i] + " and " + Math.pow(2, numberArr.length - i - 1));
    totalDecimal =
      totalDecimal + numberArr[i] * Math.pow(2, numberArr.length - i - 1);
  }
  return totalDecimal;
}

console.log(BinarioADecimal(1011));

function DecimalABinario(num) {
  // tu codigo aca
  let arr = [];
  while (num >= 1) {
    if (num % 2 === 0) {
      arr.push(0);
      num = num / 2;
    } else {
      arr.push(1);
      num = (num - 1) / 2;
    }
  }
  arr = arr.reverse();
  let binario = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    binario += arr[i];
  }

  return binario;
}

console.log(DecimalABinario(4));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
