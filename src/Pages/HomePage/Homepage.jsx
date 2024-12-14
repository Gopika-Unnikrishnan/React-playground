import "./style.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Itemcard from '../../Components/Itemcard';


const Homepage = () => {
    return (
        <div>
            <Container className='card-container'>
               
                <Itemcard
                    title="TaskTracker"
                    text="This is an simple Task tracker application. Note: you need to run 'npm run server' to view this section "
                    link="/task"
                />
              
                <Itemcard
                    title="Form submission"
                    text="in this form example, we are learning use state and use effect"
                    link="/forms"
                />
                  
                <Itemcard
                    title="Fetch User Data"
                    text="Here we are displaying userdata in table"
                    link="/fetch-userdata"
                />

                <Itemcard
                    title="Grid"
                    text="this example gives you idea on bootstrap grids and cards"
                    link="/grid"
                />
               

            </Container>
        </div>
    )
}

export default Homepage