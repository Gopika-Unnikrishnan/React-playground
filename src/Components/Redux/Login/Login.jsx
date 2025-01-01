import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Login() {
    const dispatch = useDispatch()
    const users = useSelector((state)=>state.login.users)

    const dispatchHandler=(e)=>{
        const login=e.target.value
        dispatch({type:"LOGIN",payLoad:login})
        console.log(login)
    }

  return (
    <div className='customDiv'>
        <h3>Login</h3>
        <hr></hr>
        <select onChange={(e)=>{dispatchHandler(e)}}>
        {users.map((user, index)=>{
            return(
                <option key={index} value={user}>{user}</option>
            )
        })}
        </select>
    </div>
  )
}

export default Login