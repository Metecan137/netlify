import './App.css'
import { Routes, Route, NavLink } from "react-router-dom";

//pages
import User from './components/User';
import Users from './components/Users';

function Home() {
  return <h2>Burası Ana Sayfa</h2>;
}


function App() {
  return (
    <div>
      <h1>Netlify</h1>
      <nav>
        {/*NavLinkin bize sunduğu nesne sayesinde isActive kullanıp aktif olduğu durumlara göre bir stil verdik */}
        <NavLink style={({isActive}) => ({ 
          color: isActive ? "red" : 'black'
        })} to="/">Home</NavLink> {/*Basılıcak Linkler oluşturuldu Link etiketi pathın sonuna to içinde yazanı ekler*/}
        <NavLink style={({ isActive }) => ({
          color: isActive ? "red" : 'black'
        })} to="/users" end>Users</NavLink>
      </nav>

      <Routes>
        {/* Sıralama fark etmez, v6 en doğru olanı bulur */}
        <Route path="/" element={<Home />} />
        {/* DİKKAT: Users rotasını kapatmıyoruz, içine child yazıyoruz */}
        <Route path="users" element={<Users />}>
        {/* ":id" demek, buraya dinamik bir sayı gelecek demek (users/1 gibi) */}
          <Route path=":id" element={<User />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
