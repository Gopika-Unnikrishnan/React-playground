
import './App.css';
import About from './Pages/About/About';
import Homepage from './Pages/HomePage/Homepage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AgeInput from './Pages/Ages/Ages';
import TaskTracker from './Pages/TaskTracker/Tasktracker';

const App=()=> {
  return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/age" element={<AgeInput/>}/>
        <Route path="/task" element={<TaskTracker/>}/>
        </Routes>
      </Router> 
  );
}

export default App;
