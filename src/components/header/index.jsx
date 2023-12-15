import React, { useEffect, useRef, useState } from 'react'
import './header.css'

const Header = () => {

    const [inputValue, setInputValue] = useState("")
    const [refresh, setRefresh] = useState(false)
    const [count, setCount] = useState(0)
    const inputRef = useRef()

    /* useEffect(() => {
      console.log("Bu kod isledi")
      setCount(5)
    }, [refresh, number, count]) */

    /* useEffect(() => {
      setRefresh(true)
    }, []) */

    /* const handleInputChange = () => {
      setInputValue(inputRef.current.value)
    } */

    const handleButtonClick = () => {
      setCount(count + 1)
    }

  return (
    <div className="header">
        {count}
        {/* <input type="text" ref={inputRef} onChange={handleInputChange} /> */}
        <button onClick={handleButtonClick}>Click me</button>
    </div>
  )
}

export default Header