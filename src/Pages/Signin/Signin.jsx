import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import React,{useRef,useState} from 'react'
import { Card, Form, Button, Alert } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { SET_TOKEN } from "../../Store/action/userAction"
import { useNavigate } from 'react-router-dom'

function SignIn() {
const emailRef=useRef()
const passwordRef=useRef()
const dispatch=useDispatch();
const navigate=useNavigate();

const [error,setError] = useState("")
const [loading,setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        setError("")
        setLoading(true)
        
        const loginPayLoad = {
            email:emailRef.current.value,
            password:passwordRef.current.value
        }

        const response = await axios.post("https://node-express-jwt-tds0.onrender.com/api/login",loginPayLoad);
        const decoded = jwtDecode(response.data.token);
        const reduxData = {
            token: response.data.token,
            decoded: decoded
        }

        dispatch({type:SET_TOKEN,payload:reduxData});
        localStorage.setItem('token', response.data.token);

        navigate("/")
        }
        catch(e){
            console.log("error",e)
            setError("Failed to Sigin")
        }
        setLoading(false)
    }

  return (
    <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} type="email" required />
                        </Form.Group>
                        <Form.Group id="Password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Signin
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
  )
}

export default SignIn;