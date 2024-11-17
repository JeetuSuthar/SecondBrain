import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CiCirclePlus } from "react-icons/ci";
import './App.css'
import { Button } from './components/ui/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button  startIcon={<CiCirclePlus/>} variant='secondary'  text='Add Content' />
      <Button variant='primary'  text='Share'/>
      
    </div>
  )
}

export default App
