//app/page.tsxに書くやつ。ここにかいたものはサーバー側で動くから安全で速い
//エラー多いのは気にしないでただのサンプルだから。

//import { db } from ~~~ 本来はいろいろimportして使う

export default async function MusicPage() {
    const songs = await db.query("SELECT * FROM songs")

    //ー余談ー
    //サーバー側なのでデータベースとかに直接アクセスできるし
    //クライアントコンポーネントも呼べる

    return (
        <div>
            <h1>人気曲ランキング</h1>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        {song.title}
                        <PlayButton songId={song.id} />
                    </li>
                ))}
            </ul>
        </div>
    );
}