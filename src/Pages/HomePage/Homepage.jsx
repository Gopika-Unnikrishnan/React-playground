import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from "react-router-dom"

const Homepage = () =>{
    const navigate = useNavigate()
    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/age">useState, useEffect example</Link>
            <div>
            <Link to="/task">Task Tracker</Link>
            <Card>
            <Card.Body>
                <Card.Title>Task Tracker</Card.Title>
                <Card.Text>
                    This example covers Create Read Update Delete operation
                </Card.Text>
                <Button variant='primary' onClick={()=>navigate("/task")}>Go to Example</Button>
            </Card.Body>
            </Card>
            <Card>
            <Card.Body>
                <Card.Title>Age Tracker</Card.Title>
                <Card.Text>
                    This example covers Create Read Update Delete operation
                </Card.Text>
                <Button variant='primary' onClick={()=>navigate("/age")}>Go to Example</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default Homepage