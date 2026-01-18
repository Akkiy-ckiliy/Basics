//ー余談ー
//promiseは成功or失敗を統一作法で扱えるように標準化したクラス(new Promiseっていうやつでこの長いコードを書かずに同じ処理ができる)
//new Promiseができる前まではみんなこうやって書いてたんだって。
//最近はfetchを使うことが多いからあんまりPromiseは使われてないみたい。 fetch(サーバーと通信してPromiseを作る)+async/await(それをきれいに整理)が最強

class MyPromise {
  constructor(executor) {
    //ー余談ー
    //constructorは初期値とかではなくシステムが立ち上がるときに一回だけ実行される準備処理で、メソッド呼び出しの前に行う
    //既定のコンストラクタは空。派生クラスは親クラスを呼んで引数を渡されたものが来る(super(~)で呼び出す。)
    //基本的に派生クラスの場合は派生クラス側のconstructorが先に読まれる(終わるのはsuperで呼んだ親のconstructorが先)

    this.state = "pending"; //初期値たち
    this.value = undefined;
    this.onFulfilledCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
      }
    };

    //ー余談ー
    //これらはthisが主(レシーバ or コンテキスト(エラーはこっちで書かれる))の関数に呼び出されたときは正常に動けるけど、
    //レシーバ不明の関数が引数に入るとthisがundefinedかwindowsになる。
    //それを防ぐためにアロー関数で設定をしてレシーバをthisと固定している。ただの関数だとレシーバは指定できない。

    executor(resolve);
  }

  then(onFulfilled) {
    return new MyPromise((resolve) => {
      const handleCallbalck = (val) => {
        try {
          const result = onFulfilled(val);
          resolve(result);
        } catch (error) {}
      };
      //thenは非同期処理
      if (this.state === "fulfilled") {
        handleCallbalck(this.value);
      } else {
        this.onFulfilledCallbacks.push(handleCallbalck);
      }
    });
  }
}

const p = new MyPromise((resolve) => {
  console.log("1. 最初の処理開始...");
  setTimeout(() => resolve(10), 1000);
});

p.then((val) => {
  console.log(`2. 受け取った値: ${val}`);
  return val * 2;
})
  .then((val) => {
    console.log(`3. チェーンで受け取った値: ${val}`);
    return val + 100;
  })
  .then((val) => {
    console.log(`4. さらに受け取った値: ${val}`);
  });
