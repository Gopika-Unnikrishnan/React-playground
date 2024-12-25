import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Grid = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {/* First card */}
        <div className="col mb-4">
          <Card>
            <Card.Img variant="top" src="/images/card-1.jfif" />
            <Card.Body>
              <Card.Title>TaskTracker</Card.Title>
              <Card.Text>My professional and educational background is outlined below</Card.Text>
              <Button variant="primary">Go to Example</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Second card */}
        <div className="col mb-4">
          <Card>
            <Card.Img variant="top" src="your-image-url-2.jpg" />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>Some quick example text for Card 2.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Third card (visible only in desktop view) */}
        <div className="col d-none d-lg-block">
          <Card>
            <Card.Img variant="top" src="your-image-url-3.jpg" />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>Some quick example text for Card 3.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col d-none d-lg-block">
          <Card>
            <Card.Img variant="top" src="your-image-url-3.jpg" />
            <Card.Body>
              <Card.Title>Card Title 4</Card.Title>
              <Card.Text>Some quick example text for Card 3.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col d-none d-lg-block">
          <Card>
            <Card.Img variant="top" src="your-image-url-3.jpg" />
            <Card.Body>
              <Card.Title>Card Title 5</Card.Title>
              <Card.Text>Some quick example text for Card 3.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Grid;
