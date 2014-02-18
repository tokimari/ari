/**
 * 1-6-3. ハードルが上がった「くじびき」
 * n^2 * log nのアルゴリズム
 */
var m = process.argv[2]; // 勝つ条件。数字の和
var k = [];              // 紙に書かれている数字
var kk = [];
for(var i = 3; i< process.argv.length; i++) {
  // 第４引数以降は紙に書かれている数字
  k.push(+process.argv[i]);
}
var n = k.length;

console.log('入力チェック：', checkArgv(n, m, k));
console.log('枚数：', n, '、紙に書かれている数字：', k, '、総和：', m);
console.log('答え：', main());
console.log('実行時間目安：', Math.pow(1000, 2) * Math.log(1000), (Math.pow(1000, 2) * Math.log(1000) < Math.pow(10, 8)));

/**
 * @method main
 */
function main(){
  for ( var a = 0; a < n; a++ ) {
    for ( var b = 0; b < n; b++ ) {
      // n^2通りの数字を予めkk[]に代入しておく
      // Yes, Noが分かれば良いので総和はダブりOK
      kk[a * n + b] = k[a] + k[b];
    }
  }

  kk.sort(compareNumber);

  for ( var x = 0; x < n; x++ ) {
    for ( var y = 0; y < n; y++ ) {
      if ( binarySearch( m - k[x] - k[y] ) ) {
        return {
          res: 'Yes',
          selectNumber: [ k[x], k[y], m-k[x]-k[y] ]
        }
      }
    }
  }

  return {
    res: 'No'
  };

}

/**
 * @method binarySearch
 */
function binarySearch(x) {
  var min = 0,
      max = kk.length - 1;

  while ( max - min >= 1 ) {

    var i = Math.round((min + max) / 2);
    if( kk[i] === x ) {
      console.log('あった', kk[max], kk[min], kk[i], x);
      return true;
    } else if ( x < kk[i] ) {
      console.log('ちいさい', kk[max], kk[min], kk[i], x);
      max = i - 1;
    } else {
      console.log('おおきい', kk[max], kk[min], kk[i], x);
      min = i + 1;
    }
  }
  return false;

}

/**
 * @method compareNumber
 * @return {Boolean}
 */
function compareNumber(a, b) {
  return a - b;
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
    
  if( n >= 1 && n <= 1000 ) {
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
