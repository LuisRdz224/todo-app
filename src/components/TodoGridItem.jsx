import { useState } from 'react'
import PropTypes from 'prop-types'
import { CustomCheckbox } from './CustomCheckbox'

export const TodoGridItem = ({ newTask }) => {
    const [isCompleted, setIsCompleted] = useState(false)

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted)
    }

    return (
        <>
            <CustomCheckbox
                checked={isCompleted}
                onChange={handleCheckboxChange}
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
