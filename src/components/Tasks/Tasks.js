import  Task  from '../Task/Task'
import '../Tasks/Tasks.css'

const Tasks = ( { tasks } ) => {
  const singleTask = tasks.map((task) => <Task  key={task.id}task={task} />)
  return (
    <section className='all-tasks'>
      {!tasks.length ? 'No tasks to display' : singleTask}
    </section>
  )
}

export default Tasks