import React from 'react'


export function ChangeBg () {
  
  const[color, setColor] = useState("")
  const click = color => {
    setColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  }, [color])

  return (

    <div>
      <h2>ChangeBg</h2>
      <button onClick={
        () => click("yellow")

      }>Change color</button>
      </div>
  )
}

