"use client"

import { useState } from "react"

type Props = {
    onAdd: (text: string) => void
    // 親から値をもらうだけなので…(以下略)
}

export const TodoInput = ({ onAdd }: Props) => {
    const [inputValue, setInputValue] = useState("")

// イベント情報をもらうのと、空検出・送信後に空にするために関数の中に関数を入れてる
    const handleSubmit = () => {
        if (inputValue === "") return
        onAdd(inputValue)
        setInputValue("")
    }

    return (
        <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 bg-gray-900 border border-cyan-800 p-2 focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="ENTER NEW TASK..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {/* outline-none:ブラウザ標準の枠線の削除 focus~:入力欄をクリックした後の入力状態時になった瞬間の挙動 transition~:マウスを乗せた時とかの色の変化を滑らかにする*/}
            <button
              onClick={handleSubmit}
              className="bg-cyan-900 hover:bg-cyan-700 text-cyan-100 px-4 py-2 font-bold transition-all active:scale-95"
            >
              {/* active~:押したときの変化 transition-all:色だけでなくすべての変化を滑らかにする*/}
              ADD
            </button>
          </div>
    )
}