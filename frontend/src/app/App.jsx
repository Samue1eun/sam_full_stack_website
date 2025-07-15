import { Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <>
      <div 
        className="min-h-screen text-white"
        style={{ backgroundColor: '#212b31' }}
      >
        <Outlet />
      </div>
    </>
  )
}

export default App