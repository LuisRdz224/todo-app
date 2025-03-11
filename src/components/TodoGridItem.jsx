import { useState } from 'react'
import PropTypes from 'prop-types'
import { CustomCheckbox } from './CustomCheckbox'
import './styles/TodoGridItem.css'

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
            <p className={` col task ${isCompleted ? 'completed' : ''}`}>
                {newTask}
            </p>
        </>
    )
}

TodoGridItem.propTypes = {
    newTask: PropTypes.string.isRequired
}
