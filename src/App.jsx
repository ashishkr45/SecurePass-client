import { useState, useCallback, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import bgImg from './assets/back1.jpg'
import PasswordGenerator from './passwordGen'
import './App.css'
 
function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)
  const passwordRef = useRef(null)

  const generate = useCallback(() => {
    return PasswordGenerator(length, numAllowed, charAllowed)
  }, [length, numAllowed, charAllowed])

  useEffect(() => {
    setPassword(generate())
  }, [generate])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setCopied(true)

    setTimeout(() => setCopied(false), 1500)
}, [password])


  return (
    <>
      <div className='min-h-screen bg-cover bg-center flex justify-center items-center' 
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className='bg-neutral-500/80 p-8 max-w-md mx-auto my-3 shadow-md rounded-lg flex flex-col gap-2'>
          <h1 className='font-bold text-lg text-gray-900 text-center'>GenHmm</h1>
          <div className='flex'>
            <input 
              type="text" 
              value={password} 
              className='outline-none w-full py-1 px-4 bg-gray-50/60 text-gray-900 rounded-l-xl' 
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="outline-none bg-orange-600/60 hover:bg-orange-600/80 text-white px-3 py-0.5 shrink-0 rounded-r-xl cursor-pointer min-w-20"
              onClick={copyPassword}
            >
              <motion.span
                key={copied ? "copied" : "copy"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {copied ? "Copied" : "Copy"}
              </motion.span>
            </motion.button>

          </div>
          <div className='flex gap-2 m-auto '>
            <input 
              type="range"
              min={6}  
              max={80}
              value={length}
              onChange={(e) => { setLength(Number(e.target.value)) }}
              className='cursor-pointer'
            />
            <label className='text-gray-900 font-mono'>Length: {length}</label>
          </div>
          <section className='flex gap-2 mx-auto'>
            <input 
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => { setCharAllowed(curr => !curr) }} 
              className='cursor-pointer' type="checkbox" 
            />
            <label className='text-gray-900 font-mono' htmlFor="checkbox">Character</label>

            <input 
              defaultChecked={numAllowed}
              id='numInput'
              onChange={() => { setNumAllowed(curr => !curr) }} 
              className='cursor-pointer' type="checkbox" 
            />
            <label className='text-gray-900 font-mono' htmlFor="checkbox">Number</label>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
