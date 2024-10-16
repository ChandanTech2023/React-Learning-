import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  // All required variable filled set using usestate
  const [length, setlength] = useState(5) // here default value 5
  const [numAllow, setnumAllow] = useState(false) // here default value false
  const [charAllow, setcharAllow] = useState(false)
  const [Password, setPassword] = useState("")

  //UseRef hook
  const passwordref = useRef(null) //null show currently we have no reference

  const passwordgen = useCallback(() => { //usecallback used for memorized fun() as much possible

    let Password = "";
    let string = " ABCDEFGHIJabcdefghijklmnop"
    if (numAllow) {
      string += "0123456789"
    }
    if (charAllow) {
      string += '*&$#@!_+()_%^'
    }
    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * string.length + 1)
      Password += string.charAt(char) //append/concatinate values
    }
    setPassword(Password) //method

  }, [length, numAllow, charAllow, setPassword])
  //This directly call not allow because React limits the number of renders to prevent an infinite loop.so preventing this we use "useEffect Hooks"
  // passwordgen() 

  const CopyPassword = useCallback(() => {
    passwordref.current?.select(); //Used to show selecting password
    window.navigator.clipboard.writeText(Password) //For selecting password

    // passwordref.current?.setSelectionRange(0,4) // used to select within range

  }, [Password])

  //useEffect Hooks use 
  useEffect(() => { //For Run
    passwordgen();
  }, [length, numAllow, charAllow, passwordgen])

  return (

    <>
      <h1 className='text-4xl text-center py-11 text-violet-900 text-clip'>Password generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-5 my-5  text-orange-400 bg-neutral-500'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text"
            value={Password}
            className='outline-none w-full py-2 px-3'
            placeholder='password' readOnly
            ref ={passwordref}  //Now we have reference pass

          />
          <button
            onClick={CopyPassword}
            className='outline-none bg-blue-600 text-white px-5 py-3 hover:bg-blue-500'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={4}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={numAllow}
         
              onChange={() => {
                setnumAllow((prev) => !prev);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={setcharAllow}
              id='charInput'
              onChange={() => {
                setcharAllow((prev) => !prev);
              }} />
            <label htmlFor='charInput'>Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
