import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <main className="app-container">
        <Header />
      </main>
    </Router>
  );
}

export default App;
