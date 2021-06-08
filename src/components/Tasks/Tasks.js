import  Task  from '../Task/Task'
import '../Tasks/Tasks.css'

const Tasks = ( { tasks, deleteTask, togglePriority } ) => {
  console.log('TASKS', tasks)
  const singleTask = tasks.map((task) => <Task  key={task.id}task={task} deleteTask={deleteTask} togglePriority={togglePriority}/>)
  return (
    <section className='all-tasks'>
      {!tasks.length ? 'No tasks to display' : singleTask}
    </section>
  )
}

export default Tasks