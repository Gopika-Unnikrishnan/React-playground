import { useState, useEffect } from "react"
import "./style.css"

const FetchUserData = () =>{
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        fetchUserData()
    },[])
    const fetchUserData = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data)
        setUserData(data)
    }
    return(
        <div>
        <h1>Fetch User Data</h1>
        <table>
            <tr>
                <th>name</th>
                <th>username</th>
                <th>email</th>
            </tr>
            {userData.map((user)=>(
                <tr>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
        </table>
        </div>
    )
}
export default FetchUserData