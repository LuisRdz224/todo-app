import { useState } from 'react'
import { TodoGrid } from './components/TodoGrid'
import { TodoInput } from './components/TodoInput'

export const App = () => {
    const [todoItems, setTodoItems] = useState([])

    const onAddTodo = (todo) => {
        if (todoItems.includes(todo)) return
        console.log(`Adding todo: ${todo}`)
        setTodoItems([...todoItems, todo])
    }

    return (
        <>
            <h1>Todo List</h1>
            <hr />
            <TodoInput onNewTodo={onAddTodo} />
            <TodoGrid tasks={todoItems} />
        </>
    )
}
