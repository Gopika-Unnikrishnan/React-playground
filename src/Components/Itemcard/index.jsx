import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Itemcard = ({title,text,link,buttonText,imageSrc})=>{
    const navigate = useNavigate()
    return(
        <div className="col mb-4">
          <Card>
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Button variant="success" onClick={()=>navigate(link)}>{buttonText}</Button>
            </Card.Body>
          </Card>
        </div>
    )
}
export default Itemcard