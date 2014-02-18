/**
 * 1-6-2. 三角形
 */
var L = process.argv[2]; // length
var x = [];              // 各アリの現在位置
for(var i = 3; i< process.argv.length; i++) {
  // 第４引数以降はアリの現在位置
  x.push(+process.argv[i]);
}
var n = x.length;
console.log('長さ：', L, 'アリの数：', n, 'アリの場所：', x);
console.log("答え：", main());

/**
 * @method main
 */
function main(){
  // アリはぶつかってもそのまま進むのと変わらない

  var minT = 0; // 最小の時間。全てのアリがぶつからずに落ちる
  var maxT = 0; // 最大の時間。
  var t = [];   // 各アリの落ちるまでの時間：最小
  var T = [];   // 各アリの落ちるまでの時間：最大

  // min: 左、右、右
  for ( var i = 0; i < n; i++ ) {
    if ( L - x[i] > L/2 ) {
      t[i] = x[i];
      T[i] = L - x[i];
    } else {
      t[i] = L - x[i];
      T[i] = x[i];
    }
    minT = ( t[i] > minT ) ? t[i] : minT;
    maxT = ( T[i] > maxT ) ? T[i] : maxT;
  }

  return {
    max: maxT,
    min: minT
  };

}

