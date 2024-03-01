import { useState } from 'react'
import { UsuarioContext } from './UsuarioContext'

// Primera forma como se utilizo
// const usuario = {
//     nombre: 'KelvinComputing',
//     tecnologia: 'React',
//     email: 'kelvincomputing@gmail.com',
//     redes: '@kelvincomputing'
// }

export const UsuarioProvider = ({children}) => {

  const [usuario, setUsuario] = useState({})
  return (
    <UsuarioContext.Provider value= {{ usuario, setUsuario }}>
        {children}
    </UsuarioContext.Provider>
  )
}
