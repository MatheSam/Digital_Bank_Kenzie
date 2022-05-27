import imgInitialScreen from './../../imgs/telaInicial.png'
import logo from './../../imgs/Nu Kenzie.png'
import './style.css'
import { Link } from 'react-router-dom'

function TelaInicial() {

  return (
    <main>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <Link className='buttonInitial' to="/main">Iniciar</Link>
      </div>
      <div className='imgInitial'>
        <img src={imgInitialScreen} alt="Imagem ilustrativa aplicativo" />
      </div>
    </main>
  )
}

export default TelaInicial