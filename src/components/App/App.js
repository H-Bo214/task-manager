import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header'
import './App.css';

function App() {
  
  return (
    <Router>
      <main className="app-container">
        <Header 
          title = 'Task Manager'
        />
      </main>
    </Router>
  );
}

export default App;
