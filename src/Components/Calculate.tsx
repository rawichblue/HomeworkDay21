import React from 'react'
import { useState, useEffect } from 'react'


const Calculate = () => {

  const [Weight, setWeight] = useState<number>(0);
  const [Result, setResult] = useState<number>(0);
  const [DarkMode, setDarkMode] = useState<boolean>(false);


  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value)
    setResult((Weight * 2.2 * 30) / 2)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Submitted")
  }

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', DarkMode ? '#051937' : '#fcf0dd');
    root.style.setProperty('--text-color', DarkMode ? '#ffffff' : '#000000');
    root.style.setProperty('--btn-mode', DarkMode ? '#800080' : '#e6e6e6');
    root.style.setProperty('--btn-text-mode', DarkMode ? '#ffffff' : '#000000');
  }, [DarkMode]);

  const toggleMode = () => {
    setDarkMode(!DarkMode);
  };



  return (
    <>
      <div className='box'>
        <h1>คุณควรดื่มน้ำวันละเท่าไหร่ ?</h1>
        <h1>{Math.floor(Result)} มิลลิลิตร</h1>
        <form onSubmit={onSubmit}>
          <input type='Weight' id='Weight' name='name' onChange={onChangeWeight} placeholder='น้ำหนักตัวเป็นกิโลกรัม เช่น 50.0' className='inputcal'></input>
        </form>
        <button className='MyMode' onClick={toggleMode}>{DarkMode ? 'Dark Mode 🌒' : 'Light Mode ⛅'}</button>

      </div>
    </>
  )
}

export default Calculate