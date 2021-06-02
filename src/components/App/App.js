import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header'
import Form from '../Form/Form'
import './App.css';

function App() {
  const [displayAddTask, setDisplayAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

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
    </>
  )}/>


      </main>
    </Router>
  );
}

export default App;
