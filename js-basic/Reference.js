let myScore = 100;
let yourScore = myScore;
yourScore = 50;
console.log(myScore);

//ー余談ー
//プリミティブ型(数字,文字列,boolean)はイミュータブルなので中身そのものは書き換えられない
//myScoreの価自体は不変(yourScoreはコピーだから別物だし、letでmyScoreは二回できないからね)

const myTeam = { leader: "私", member: "Aさん" };
const yourTeam = myTeam;
yourTeam.leader = "あなた";
console.log(myTeam.leader);

//ー余談ー
//オブジェクト型({}, [], 関数)はミュータブルだから中身を書き換えることが可能
//Reactで毎回[...items]みたいにスプレッド構文を打つ理由は箱[]の変化しか見てくれないから
//TSの型も同じ理由