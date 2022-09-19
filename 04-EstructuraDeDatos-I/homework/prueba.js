function nFibonacci(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

nFibonacci(4);

// nFibonacci(4)=> nFibonacci(3)+nFibonacci(2)=> nFibonacci(2)+2=>1+0+2=> 3
