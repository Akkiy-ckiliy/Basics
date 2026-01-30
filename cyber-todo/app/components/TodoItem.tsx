type Props = {
    todo: Todo;
    onToggle: (id: number) => void
    onDelete: (id: number) => void
    // ここの関数たちは親からの値を使うだけなのでreturnはないってことでvoid
    // (実行結果はこっちのhtmlで使うだけだからね)。
}

//htmlの入れ込み関数を見つけたらとりあえず切り出し(コンポーネント化第一歩)
export const TodoItem = ({todo, onToggle, onDelete}: Props) => {
    return (
        <li
                className="border-l-4 border-cyan-500 bg-cyan-950/30 p-3 flex justify-between items-center animate-pulse-once"
              >
                {/* animate-pulse-once:標準にないやつだし応用(global.css参照) */}
                <span
                  onClick={() => onToggle(todo.id)}
                  className={`cursor-pointer select-none ${todo.completed ? "line-through text-gray-500" : ""}`}
                >
                  {todo.text}
                </span>
                {/* select-none:テキストの選択をできないようにする line-through:取り消し線の追加 */}
                <button
                  onClick={() => onDelete(todo.id)}
                  className="text-xs text-red-500 hover:text-red-400"
                >
                  [DELETE]
                </button>
              </li>
    )
}