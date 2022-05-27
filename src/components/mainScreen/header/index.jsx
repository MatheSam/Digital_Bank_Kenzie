import { Link } from 'react-router-dom'
import logo from './../../../imgs/Nu Kenzie.svg'
import './style.css'

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <Link className='button' to="/">Início</Link>
      </div>
    </header>
  )
}

export default Header