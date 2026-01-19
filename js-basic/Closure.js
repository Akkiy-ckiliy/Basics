function setupAlert() {
  let count = 0;
  
  //ー余談ー
  //関数の中の変数はconstの場合は常に最初の値がスコープ対象。
  //letやグローバル変数の場合はその都度その時の値がスコープ対象

  return function showCount() {
    console.log(count); 
  };
}

const myAlert = setupAlert();
myAlert();