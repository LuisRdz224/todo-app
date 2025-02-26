import { useState } from 'react'
import PropTypes from 'prop-types'

export const TodoGridItem = ({ newTask }) => {
    const [isCompleted, setIsCompleted] = useState(false)

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted)
    }

    return (
        <>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleCheckboxChange}
                style={{ marginRight: '10px' }}
            />
            <p
                style={{
                    textDecoration: isCompleted ? 'line-through' : 'none',
                    margin: 0
                }}>
                {newTask}
            </p>
        </>
    )
}

TodoGridItem.propTypes = {
    newTask: PropTypes.string.isRequired
}
