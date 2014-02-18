var n = process.argv[2];
console.log(fib1(n));
var memo = [];
console.log(fib2(n));

/**
 * 2-1. フィボナッチ数列 1
 */
function fib1(n) {
  if ( n <= 1 ) {
    return n; 
  }
  console.log('fib1');
  return fib1( n-1 ) + fib1( n-2 );
}

/**
 * 2-1. フィボナッチ数列 2
 * 一度計算した値は覚えておく
 */
function fib2(n) {
  if ( n <= 1 ) {
    return n; 
  }
  if ( memo[n] ) {
    return memo[n];
  }
  console.log('fib2');
  return memo[n] = fib2( n-1 ) + fib2( n-2 );
}
