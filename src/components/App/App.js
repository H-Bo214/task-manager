import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchTasks, fetchTask, addTask, removeTask } from '../../apiCalls'
import Header from '../Header/Header'
import Form from '../Form/Form'
import Tasks from '../Tasks/Tasks'
import Footer from '../Footer/Footer'
import { mockData } from '../../mockData'
import './App.css';

function App() {
  const [displayAddTask, setDisplayAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  //fetch existing tasks on page load
  useEffect(() => {
    const getTasks = async () => {
      try {
        const allTasks = await fetchTasks()
        if (allTasks) {
          setTasks(allTasks)
        }
      } catch (error) {
        setError('An error occurred getting your tasks.')
      }
    }
    getTasks()
  }, [])

  //add a new task
  const addNewTask = async (task) => {
    try {
      const newTask = await addTask(task)
      if (newTask) {
        setTasks([...tasks, newTask])
      }
    } catch (error) {
      setError('An error occurred adding a new task.')
    }
  }

  // delete Task

  const deleteTask = async (id) => {
    try {
      const deleted = await removeTask(id)
      if (deleted) {
        setTasks(tasks.filter(task => task.id !== id))
      }
    } catch (error) {
      setError('An error occurred deleting your tasks.')
    }
  }
  
  return (
    <Router>
      <main className="app-container">
        <Header 
          title = 'Task Manager'
          displayAddTask={displayAddTask}
          showForm={()=> setDisplayAddTask(!displayAddTask)}
        />
        <>
        {error}
        </>
        <Route exact path='/' render={(props) => (
          <>
            {displayAddTask && <Form addNewTask={addNewTask}/>}
            <Tasks 
              tasks={tasks}
              deleteTask={deleteTask}
              // onToggle={}
            />
          </>
        )}/>
        <Footer />

      </main>
    </Router>
  );
}

export default App;
