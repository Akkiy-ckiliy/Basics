//hooksファイルは.ts
//基本的にhtmlのコンポーネント化したいところを切り出してからhooksを作る。
//export先はpageにすると散らからなくて済む。ロジックも一緒に切り取ってくる。
import { useEffect, useState } from "react"

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [isInitialized, setIsInitialized] = useState(false)

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos")
        if(savedTodos) {
            setTodos(JSON.parse(savedTodos))
        } else {
            setTodos([
                {id:1, text:"INITIALIZE_SYSTEM", completed:false},
                {id:2, text:"CHECK_NEURAL_LINK", completed:false},
            ])
        }
        setIsInitialized(true)
    }, [])

    useEffect(() => {
        if(!isInitialized) return
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos, isInitialized])

    const handleAdd = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const handleDelete = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    const handleToggle = (id: number) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
        setTodos(newTodos)
    }

    return { //返す値たちの設定。
        todos,
        handleAdd,
        handleDelete,
        handleToggle,
    }
}