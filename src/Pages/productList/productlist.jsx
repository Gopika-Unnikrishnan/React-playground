import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ProductList() {

    const navigate = useNavigate();
  return (
    <Container>
      {/* Other rows here */}

      <Row className="mt-3">
        <Col className="text-end">
          <Button variant="primary" onClick={()=>navigate("/add-product")}>Add Product</Button>
        </Col>
      </Row>
    </Container>
  );
}


export default ProductList