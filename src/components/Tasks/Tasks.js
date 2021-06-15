import  Task  from '../Task/Task'
import PropTypes from 'prop-types'
import '../Tasks/Tasks.css'

const Tasks = ( { tasks, deleteTask, togglePriority } ) => {
  const singleTask = tasks.map((task) => 
    <Task  
      key={task.id}
      task={task} 
      deleteTask={deleteTask} 
      togglePriority={togglePriority}
    />
  )

  return (
    <section className='all-tasks'>
      {!tasks.length ? <p style={{color: '#A8DADC'}}>No tasks to display</p> : singleTask}
    </section>
  )

}

Tasks.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  togglePriority: PropTypes.func
}

export default Tasks