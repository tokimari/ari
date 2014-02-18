var k = +process.argv[2];
a = [];
for(var i = 3; i< process.argv.length; i++) {
  // 第４引数以降は紙に書かれている数字
  a.push(+process.argv[i]);
}
var n = a.length;
console.log(n, a, k);
console.log(dfs(0, 0));

/**
 * 2-1-1. 深さ優先検索(Depth-First Search)
 * RangeError: Maximum call stack size exceeded って出て終わる。。
 * "$ node 2-1-1-dfs.js 13 1 2 4 7"
 */
function dfs(x, sum) {
  console.log(x, sum);
  // n個試したら、今までの和sumがkと等しいかを返す
  if ( x === n ) { return sum === k; }
  
  // a[i]を採用しない場合
  if ( dfs( i + 1, sum ) ) return true;
  
  // a[i]を採用する場合
  if ( dfs( i + 1, sum + a[i] ) ) return true;

  return false;
}
