import { Link } from "react-router-dom"

const Homepage = () =>{
    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/age">useState, useEffect example</Link>
            <div>
            <Link to="/task">Task Tracker</Link>
            </div>
        </div>
    )
}

export default Homepage