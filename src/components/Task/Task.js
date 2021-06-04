import deleteIcon from '../../assets/cancel-icon.svg'
import '../Task/Task.css'

const Task = ( { task } ) => {
  return (
    <section className='single-task'>
      <h3>{task.text}</h3>
      <p>{task.date}</p>
      <img
        className='delete-icon' 
        src={deleteIcon}
        alt='Red circle icon with white x in the center.'
        onClick={() => console.log('x')}
      />
    </section>
  )
}

export default Task