import React from 'react'
import Clock from './Clock.jsx'
function App() {
  return (
   <>
    <div className="clock-container flex items-center justify-center h-screen bg-[url('https://images.pexels.com/photos/841286/pexels-photo-841286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover">
   <Clock />
   </div>
   </>
  )
}

export default App
