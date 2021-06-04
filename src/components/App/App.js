import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header'
import Form from '../Form/Form'
import Tasks from '../Tasks/Tasks'
import Footer from '../Footer/Footer'
import { mockData } from '../../mockData'
import './App.css';

function App() {
  const [displayAddTask, setDisplayAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(mockData)
  }, [])

  return (
    <Router>
      <main className="app-container">
        <Header 
          title = 'Task Manager'
          displayAddTask={displayAddTask}
          showForm={()=> setDisplayAddTask(!displayAddTask)}
        />
        <Route exact path='/' render={(props) => (
          <>
            {displayAddTask && <Form />}
            <Tasks 
              tasks={tasks}
              // onDelete={}
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
