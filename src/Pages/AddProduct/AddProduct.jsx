import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

const categories = [
  'Smartphones',
  'Laptops',
  'Tablets',
  'Televisions',
  'Cameras',
  'Headphones',
  'Smart Watches',
];

function AddProduct() {

    const token = useSelector(state=> state.user.auth.token)
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    color: '',
    size: '',
    storage: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.price || isNaN(formData.price) || formData.price < 0) newErrors.price = 'Valid price is required';
    if (!formData.color.trim()) newErrors.color = 'Color is required';
    if (!formData.size.trim()) newErrors.size = 'Size is required';
    if (!formData.storage.trim()) newErrors.storage = 'Storage is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    if (!validate()) return;

    try {
      const response = await axios.post('https://node-express-jwt-tds0.onrender.com/api/products', formData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); // update URL as needed
      console.log('Product added:', response.data);
      setSuccessMessage('Product added successfully!');
      setFormData({
        name: '',
        category: '',
        description: '',
        price: '',
        color: '',
        size: '',
        storage: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={formData.category}
            onChange={handleChange}
            isInvalid={!!errors.category}
          >
            <option value="">Select a category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            placeholder="Enter product description"
            value={formData.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                isInvalid={!!errors.price}
              />
              <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3" controlId="formColor">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                name="color"
                placeholder="Enter color"
                value={formData.color}
                onChange={handleChange}
                isInvalid={!!errors.color}
              />
              <Form.Control.Feedback type="invalid">{errors.color}</Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group className="mb-3" controlId="formSize">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                name="size"
                placeholder="Enter size"
                value={formData.size}
                onChange={handleChange}
                isInvalid={!!errors.size}
              />
              <Form.Control.Feedback type="invalid">{errors.size}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formStorage">
          <Form.Label>Storage</Form.Label>
          <Form.Control
            type="text"
            name="storage"
            placeholder="Enter storage details"
            value={formData.storage}
            onChange={handleChange}
            isInvalid={!!errors.storage}
          />
          <Form.Control.Feedback type="invalid">{errors.storage}</Form.Control.Feedback>
        </Form.Group>

        <div className="text-end">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>

      {successMessage && (
        <Alert variant="success" className="mt-3">
          {successMessage}
        </Alert>
      )}
    </Container>
  );
}

export default AddProduct;
