import {useRef, useState } from "react"
import { Card, Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"


const SignUp = () => {
const emailRef=useRef()
const passwordRef=useRef()
const confirmPasswordRef=useRef()
const { signup } = useAuth()
const navigate = useNavigate()

const [error,setError] = useState("")
const [loading,setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError("Password do not match")
        }
        try {
        setError("")
        setLoading(true)
        await signup(emailRef.current.value,passwordRef.current.value)
        navigate("/")
        }
        catch(e){
            console.log("error",e)
            setError("Failed to create an account")
        }
        setLoading(false)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control ref={confirmPasswordRef} type="password" required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Signup
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
export default SignUp