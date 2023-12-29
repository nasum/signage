import { useState } from 'react'
import './App.css'

function App() {
  const images = import.meta.glob('../images/*.png', {eager: true})

  const pathArray = Object.keys(images)

  const [currentNum, setCurrentNum] = useState(0)

  setTimeout(() => {
    if (currentNum === pathArray.length - 1) {
      setCurrentNum(0)
    } else {
      setCurrentNum(currentNum + 1)
    }
  }, 5000)
    
  return (
    <div className="background">
      {
        pathArray.map((path, index) => {
          return (
            <img 
              className="images" 
              id={`${index}`} 
              key={index} 
              src={path} 
              style={
                {
                  opacity: index === currentNum ? 1 : 0,
                }
              } 
            />
          )
        })
      }
    </div>
  )
}

export default App
