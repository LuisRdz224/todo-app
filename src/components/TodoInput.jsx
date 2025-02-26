import { useState } from 'react'
import PropTypes from 'prop-types'

export const TodoInput = ({ onNewTodo }) => {
    const [todo, setTodo] = useState('')

    const handleAddTodoChange = ({ target }) => {
        setTodo(target.value)
    }

    const handleAddTodoSubmit = (event) => {
        event.preventDefault()
        if (todo.trim().length <= 0) return
        onNewTodo(todo.trim())
        setTodo('')
    }

    return (
        <>
            <form onSubmit={handleAddTodoSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add a new task"
                        value={todo}
                        onChange={handleAddTodoChange}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="button-addon2">
                        Add
                    </button>
                </div>
            </form>
        </>
    )
}

TodoInput.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}
