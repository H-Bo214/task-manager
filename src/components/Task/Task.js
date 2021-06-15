import deleteIcon from '../../assets/cancel-icon.svg'
import format from 'date-fns/format'
import PropTypes from 'prop-types'
import '../Task/Task.css'

const Task = ( { task, deleteTask, togglePriority } ) => {
  let newDate = new Date(task.date)
  
  let formattedDate = () => {
    return format(newDate, 'MMMM d, yyyy, h:mm aa')
}

  return (
    <section className={task.priority ? 'priority' : 'single-task'}>
      <section className='text-date' onDoubleClick={() => togglePriority(task.id)}>
        <p className="task-text">{task.text}</p>
        <p>{formattedDate()}</p>
      </section>
      <img
        className='delete-icon' 
        src={deleteIcon}
        alt='Red circle icon with white x in the center.'
        onClick={() => deleteTask(task.id)}
      />
    </section>
  )
}

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  togglePriority: PropTypes.func
}

export default Task