import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Pages/About/About';
import Homepage from './Pages/HomePage/Homepage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AgeInput from './Pages/Ages/Ages';
import TaskTracker from './Pages/TaskTracker/Tasktracker';
import Container from 'react-bootstrap/Container';
import FetchUserData from './Pages/FetchUserData/FetchUserData';

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
        <Container>
        <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/age" element={<AgeInput/>}/>
        <Route path="/task" element={<TaskTracker/>}/>
        <Route path="/fetch-userdata" element={<FetchUserData/>}/>
        </Routes>
        </Container>
      </Router> 
  );
}

export default App;
