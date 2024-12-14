import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Itemcard = ({title,text,link})=>{
    const navigate = useNavigate()
    return(
        <Card className='card'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant='success' onClick={()=>navigate(link)}>Go to Example</Button>
            </Card.Body>
        </Card>
    )
}
export default Itemcard