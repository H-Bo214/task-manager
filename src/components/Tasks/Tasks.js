import  Task  from '../Task/Task'
import '../Tasks/Tasks.css'

const Tasks = ( { tasks, deleteTask } ) => {
  console.log('TASKS', tasks)
  const singleTask = tasks.map((task) => <Task  key={task.id}task={task} deleteTask={deleteTask}/>)
  return (
    <section className='all-tasks'>
      {!tasks.length ? 'No tasks to display' : singleTask}
    </section>
  )
}

export default Tasks