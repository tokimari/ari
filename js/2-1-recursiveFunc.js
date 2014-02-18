var n = process.argv[2];
console.log(func(n));

/**
 * 2-1. 再帰関数
 * n! を求める
 * n! = n * (n-1)!
 */
function func(n) {
  if( n === 0 ) {
    return 1; 
  }
  return n * func(n-1);
}
