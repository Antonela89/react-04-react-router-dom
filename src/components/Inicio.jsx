import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
        <h1>Esta es la página de inicio</h1>
        <Link to='contactos'>Haz click para ir a contacto</Link>
    </div>
  )
}

export default Inicio