import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function User() {
    const [user, setUser] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .catch(e => console.log(e))
    },[id])
    return (
        <div>
            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
            </ul>
        </div>
    )
}

export default User