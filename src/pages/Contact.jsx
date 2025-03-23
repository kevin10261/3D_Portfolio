import { useState,useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'

import Luffy from '../models/Luffy'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'
import { div } from 'three/tsl'


const Contact = () => {
  // const formRef = useRef(null)
  const [form, setForm] = useState({name: '', email: '',message: ''})
  const[currentAnimation, setCurrentAnimation] = useState('wave')
  const [isLoading, setIsLoading] = useState(false)
  const{alert, showAlert, hideAlert} = useAlert()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('run')

    emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
      {
      from_name: form.name,
      to_name: "Seongeun",
      from_email: form.email,
      to_email: 'kyyse1026@gmail.com',
      message: form.message
    }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_ID
  ).then(() => {
      setIsLoading(false)
      showAlert({show: true, text: 'Message sent successfully', type: 'success'})
      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('wave')
        setForm({
          name: '',
          email: '',
          message: '',})
      },[3000])

    }).catch((error) => {
      setIsLoading(false)
      setCurrentAnimation('punch')
      console.log(error)
      showAlert({show: true, text: 'Failed to send message', type: 'danger'})
  })
  }
  const handlechange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleFocus = () => {
    setCurrentAnimation('walk')
  }
  const handleBlur = () => {
    setCurrentAnimation('wave')
  }

  return (
    <div className="bg-gray-900 min-h-screen">
    <section className='relative flex lg:flex-row flex-col max-container bg-gray-900'>
      {alert.show && <Alert {...alert}/>}
      <div className = "flex-1 min-w-[50%] flex flex-col">
        <h1 className='text-indigo-400 text-4xl font-bold'>Let's Connect</h1>

        <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}>
          <label className='font-semibold text-indigo-400'>
            Name
            <input type="text"
              name="name"
              className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md w-full mt-1"
              placeholder='name'
              required
              value = {form.name}
              onChange={handlechange}
              onFocus={handleFocus}
              onBlur={handleBlur}

             />
          </label>
          <label className='font-semibold text-indigo-400'>
            Email
            <input type="email"
              name="email"
              className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md w-full mt-1"
              placeholder='john@gmail.com'
              required
              value = {form.email}
              onChange={handlechange}
              onFocus={handleFocus}
              onBlur={handleBlur}

             />
          </label>
          <label className='font-semibold text-indigo-400'>
            Leave a message
            <textarea 
              name="message"
              rows={4}
              className="bg-gray-800 text-white border border-gray-600 p-2 rounded-md w-full mt-1"
              placeholder='Please enter your message here'
              required
              value = {form.message}
              onChange={handlechange}
              onFocus={handleFocus}
              onBlur={handleBlur}
             />
          </label>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-5 rounded-md transition-all"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>

      <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 75,
        near: 0.1,
        far: 1000
      }}
      >
        <directionalLight intensity={1.2} position={[0, 0, 1]} />
        <ambientLight intensity={0.2} />
        
        <Suspense fallback={<Loader />}>
          <Luffy
          currentAnimation={currentAnimation}
          position={[0.5, -1.5, 0]}
          rotation={[0.2, 0, 0]}
          scale={[1.3, 1.3, 1.3]}
          />
          </Suspense>
      </Canvas>
      </div>
  </section>
  </div>
  )
}

export default Contact