import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Pages/About/About';
import Homepage from './Pages/HomePage/Homepage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import TaskTracker from './Pages/TaskTracker/Tasktracker';
import Container from 'react-bootstrap/Container';
import FetchUserData from './Pages/FetchUserData/FetchUserData';
import NavBar from './Components/Navbar/NavBar';
import SignUp from './Pages/Signup/SignUp';
import {AuthProvider} from "./contexts/AuthContext"
import Grid from './Pages/Grid/Grid';
import FormInput from './Pages/Forms/Form';
import Redux from './Pages/Redux/Redux';
import ProductList from './Pages/productList/productlist';
import SignIn from './Pages/Signin/Signin';
import Logout from './Pages/Logout/Logout';
import UserDashboard from './Pages/Dashboard/UserDashboard';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


const App=()=> {
  return (
      <Router>
        <AuthProvider>
        <NavBar/>
        <Container>
        <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/forms" element={<FormInput/>}/>
        <Route path="/task" element={<TaskTracker/>}/>
        <Route path="/fetch-userdata" element={<FetchUserData/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/grid" element={<Grid/>}/>
        <Route path="/redux" element={<Redux/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/user-dashboard" element={<ProtectedRoute><UserDashboard/></ProtectedRoute>}/>
        </Routes>
        </Container>
        </AuthProvider>
      </Router> 
  );
}

export default App;
