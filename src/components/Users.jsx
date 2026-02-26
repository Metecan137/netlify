import { NavLink, Outlet} from 'react-router-dom'
import { useState, useEffect, useRouteMatch } from 'react'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .catch(e => console.log(e))
    }, [])
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    users.map((user) => 
                        (<li key={user.id}>
                        {/* Link verirken başına slash koyma, o anki yolun sonuna ekler */}
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? "red" : 'black'
                        })} to={user.id.toString()} className={({ isActive }) => (isActive ? "aktif-link" : "normal-link")}>{user.name}</NavLink>
                        </li>))
                }
            </ul>
            <div style={{ borderTop: "2px solid gray", marginTop: "20px" }}>
                <h3>Kullanıcı Detayı Aşağıda Görünecek:</h3>

                {/* URL /users ise burası boştur. */}
                {/* URL /users/1 ise <User /> buraya yüklenir. */}
                <Outlet />{/* yer tutucu olarak çalışır basılan user detayları tam burada görüntülenecek */}
            </div>
        </div>
    )
}

export default Users