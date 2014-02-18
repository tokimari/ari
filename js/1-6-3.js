/**
 * 1-6-3. ハードルが上がった「くじびき」
 * n^3 * log nのアルゴリズム
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
console.log('実行時間目安：', Math.pow(1000, 3) * Math.log(1000), (Math.pow(1000, 3) * Math.log(1000) < Math.pow(10, 8)));

/**
 * @method main
 */
function main(){
  k.sort(compareNumber);
  for ( var x = 0; x < n; x++ ) {
    for ( var y = 0; y < n; y++ ) {
      for ( var z = 0; z < n; z++ ){
        if ( binarySearch( m - k[x] - k[y] - k[z] ) ) {
          return {
            res: 'Yes',
            selectNumber: [ k[x], k[y], k[z], m-k[x]-k[y]-k[z] ]
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
 * @method binarySearch
 */
function binarySearch(x) {
  var min = 0,
      max = k.length - 1;

  while ( max - min >= 1 ) {

    var i = Math.round((min + max) / 2);
    if( k[i] === x ) {
      console.log('あった', k[max], k[min], k[i], x);
      return true;
    } else if ( x < k[i] ) {
    //  console.log('ちいさい', k[max], k[min], k[i], x);
      max = i - 1;
    } else {
    //  console.log('おおきい', k[max], k[min], k[i], x);
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
