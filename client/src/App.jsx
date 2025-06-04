import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashboardHome from './pages/dashboard/DashboardHome'

function App() {
  return (
    <Routes>
           <Route path='/' element={<DashboardHome />} />
    </Routes>
  )
}

export default App
