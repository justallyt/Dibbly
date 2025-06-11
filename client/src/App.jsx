import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashboardHome from './pages/dashboard/DashboardHome'
import Login from './pages/auth/Login'

function App() {
  return (
    <Routes>
           <Route path='/' element={<DashboardHome />} />
           <Route path='/auth/login' element={<Login />} />
           <Route path='/builder/:id/websites' element={<DashboardHome />} />
    </Routes>
  )
}

export default App
