"use client";

import { TodoItem } from "./components/TodoItem";
import { TodoInput } from "./components/TodoInput";
import { useTodos } from "./hooks/useTodos";

export default function TodoPage() {
  const {todos, handleAdd, handleDelete, handleToggle} = useTodos()

  return (
    <div className="min-h-screen bg-black text-cyan-400 p-8 font-mono">
      {/*一番外側(Root)画面全体 min-h-screen:コンテンツが少なくても背景色を一番下までいくようにする font-mono:等幅フォント設定 */}
      <div className="max-w-md mx-auto border-2 border-cyan-900 shadow-[0_0_20px_rgba(6,182,212,0.2)] p-6">
        {/* max-w-md:ttodoリストが横に伸びすぎないようにする(md=スマホ～タブレット幅) mx-auto:margin-xを自動にして真ん中に調整 border-2:borderを2pxに変更 
            shadow-[0_0_20px_rgba(6,182,212,0.2)]:発光表現(tailwindの標準クラスにないものは[]内に書く) */}
        <h1 className="text-3xl font-bold mb-8 tracking-tighter uppercase border-b-4 border-cyan-500 pb-2">
          {/* text-3xl:約30px(通常の2倍) flex-1:残りのスペースをすべて埋める tracking-tighter:文字同士の間隔詰め uppercase:強制的に大文字にする 
              xs:12px, sm:14px, bace:16px, lg:18px, xl:20px, 2xl:24px, 3xl:30px*/}
          Task Terminal v1.0
        </h1>

        <div className="space-y-4">
          {/* space-y-4: 子要素同士の縦の距離感の調節 */}
          <TodoInput onAdd={handleAdd} />
          <ul className="mt-8 space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
