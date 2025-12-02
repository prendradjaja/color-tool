import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ColorPicker } from './ColorPicker'

function App() {
  const [count, setCount] = useState(0)

  function setColor(index: number, color: string) {
    document.querySelectorAll('svg path')[index].setAttribute('fill', color)
    document.querySelectorAll('svg path')[index].setAttribute('stroke', color)
  }

  return (
    <>
      <ColorPicker initialColor='#b31942' onColorChange={color => setColor(0, color)}/>
      <ColorPicker initialColor='#ffffff' onColorChange={color => setColor(1, color)}/>
      <ColorPicker initialColor='#0a3161' onColorChange={color => setColor(2, color)}/>
    </>
  )
}

export default App
