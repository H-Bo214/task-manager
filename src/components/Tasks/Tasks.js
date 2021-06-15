import  Task  from '../Task/Task'
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

export default Tasks