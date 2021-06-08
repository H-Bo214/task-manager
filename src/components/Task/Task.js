import deleteIcon from '../../assets/cancel-icon.svg'
import '../Task/Task.css'

const Task = ( { task, deleteTask, togglePriority } ) => {
  return (
    <section className={task.priority ? 'priority' : 'single-task'}>
      <section className='text-date' onDoubleClick={() => togglePriority(task.id)}>
        <h4>{task.text}</h4>
        <p>{task.date}</p>
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