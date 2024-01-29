
import './App.css';
import About from './Pages/About/About';
import Homepage from './Pages/HomePage/Homepage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import AgeInput from './Pages/Ages/Ages';

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
        </Routes>
      </Router> 
  );
}

export default App;
