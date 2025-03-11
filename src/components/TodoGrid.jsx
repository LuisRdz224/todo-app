import PropTypes from 'prop-types'
import { TodoGridItem } from './TodoGridItem'

export const TodoGrid = ({ tasks }) => {
    return (
        <div>
            <div className="container">
                {tasks.length === 0 && (
                    <div
                        key={'not-task'}
                        className="col mb-3 d-flex align-items-center">
                        <p className="text-center">No tasks available</p>
                    </div>
                )}
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="row m-3 border border-light rounded-4 shadow p-3">
                        <TodoGridItem newTask={task} />
                    </div>
                ))}
            </div>
        </div>
    )
}

TodoGrid.propTypes = {
    tasks: PropTypes.array.isRequired
}
