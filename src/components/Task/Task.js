import deleteIcon from '../../assets/cancel-icon.svg'
import '../Task/Task.css'
import format from 'date-fns/format'

const Task = ( { task, deleteTask, togglePriority } ) => {
  let newDate = new Date(task.date)
  
  let formattedDate = () => {
    return format(newDate, 'MMMM d, yyyy, h:mm aa')
}

  return (
    <section className={task.priority ? 'priority' : 'single-task'}>
      <section className='text-date' onDoubleClick={() => togglePriority(task.id)}>
        <h4>{task.text}</h4>
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

export default Task