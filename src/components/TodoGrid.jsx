import PropTypes from 'prop-types'
import { TodoGridItem } from './TodoGridItem'

export const TodoGrid = ({ tasks }) => {
    return (
        <div>
            <div className="container">
                <div className="row flex-column">
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
                            className="col mb-3 mt-3 d-flex align-items-center">
                            <TodoGridItem newTask={task} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

TodoGrid.propTypes = {
    tasks: PropTypes.array.isRequired
}
