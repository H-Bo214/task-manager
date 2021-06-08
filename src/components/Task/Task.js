import deleteIcon from '../../assets/cancel-icon.svg'
import '../Task/Task.css'

const Task = ( { task, deleteTask } ) => {
  return (
    <section className='single-task'>
      <section className='text-date'>
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