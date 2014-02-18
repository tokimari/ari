/**
 * 1-1. くじびき
 */
var m = process.argv[2]; // 勝つ条件。数字の和
var k = [];              // 紙に書かれている数字
for(var i = 3; i< process.argv.length; i++) {
  // 第４引数以降は紙に書かれている数字
  k.push(+process.argv[i]);
}
var n = k.length;

console.log('入力チェック：', checkArgv(n, m, k));
console.log('枚数：', n, '、紙に書かれている数字：', k, '、総和：', m);
console.log('答え：', main());
console.log('実行時間目安：', Math.pow(50, 4), (Math.pow(50, 4) < Math.pow(10, 6)));

/**
 * @method main
 */
function main(){
  for ( var x = 0; x < n; x++ ) {
    for ( var y = 0; y < n; y++ ) {
      for ( var z = 0; z < n; z++ ){
        for ( var w = 0; w < n; w++ ) {
          if( k[x] + k[y] + k[z] + k[w] == m ) {
            return {
              res: 'Yes',
              selectNumber: [ k[x], k[y], k[z], k[w] ]
            }
            break;
          }
        }
      }
    }
  }
  return {
    res: 'No'
  };

}

/**
 * @method checkArgv
 */
function checkArgv(n, m, k) {
  var res = {
    n: false,
    m: false,
    k: true
  };
    
  if( n >= 1 && n <= 50 ) {
    res.n = true;
  }
  if( m >= 1 && m <= Math.pow(10, 8) ) {
    res.m = true;
  }
  for(var i = 0; i < k.length; i++) {
    if( +k[i] <= 0 || +k[i] > Math.pow(10, 8)) {
      res.k = false; // １つでも違えばfalse
    }
  }

  return res;
}
