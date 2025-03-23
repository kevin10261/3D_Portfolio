import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-indigo-900 items-center justify-center flex fond-bold shadow-md">
            <p className="blue-gradient_text">SYU</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-indigo-600': 'text-indigo-700'} >About</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-indigo-600': 'text-indigo-700'} >Projects</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-indigo-600': 'text-indigo-700'}>Contact</NavLink>
        </nav>
    
    </header>
  )
}

export default Navbar