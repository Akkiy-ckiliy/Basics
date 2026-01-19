"use client";
//これを書いたところのコードはブラウザ側(フロント)で動く。
//Reactを使うためにはuse clientが必要

export default function PlayButton({ songId }) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "一時停止" : "再生"}
        </button>
    );
}