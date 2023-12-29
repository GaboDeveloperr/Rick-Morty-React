import React from 'react'
import Header from './components/Header'
import ListadoPersonaje from './components/ListadoPersonaje'

import PersonajesProvider from './context/PersonajesContext'

function App() {

  return (
    <>
      <PersonajesProvider>
        <div className='container'>
            <Header />

            <div className=''>
              <ListadoPersonaje />
            </div>

        </div>
      </PersonajesProvider>
    </>
  )
}

export default App
