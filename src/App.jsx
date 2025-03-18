import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <header>
        <h1>Futebol - O Maior Esporte do Mundo</h1>
    </header>

    <section class="intro">
        <h2>O que é Futebol?</h2>
        <p>O futebol é o esporte mais popular do planeta. Com milhões de fãs ao redor do mundo, o futebol une culturas, países e pessoas.</p>
        <img src="https://www.exemplo.com/imagem-futebol.jpg" alt="Jogo de Futebol">
    </section>

    <section class="historia">
        <h2>História do Futebol</h2>
        <p>O futebol tem suas origens na Inglaterra, no século 19, mas logo se espalhou pelo mundo, tornando-se uma verdadeira paixão global.</p>
    </section>

    <footer>
        <p>&copy; 2025 Futebol - Todos os direitos reservados.</p>
    </footer>
    </>
  )
}

export default App
