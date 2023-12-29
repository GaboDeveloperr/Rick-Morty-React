import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PersonajesContext = createContext()


const PersonajesProvider = ( props ) => {

	const [ personaje, guardarPersonaje ] = useState({})
	const [ listadopersonaje, guardarListadoPersonaje ] = useState([])
	const [ inicio, actualizarInicio ] = useState(true)

	const [ consultar, guadarConsultar ] = useState(false)
	const [ errorcode, guardarErrorCode ] = useState(false)

	const [ paginaactual, guardarPaginaActual ] = useState(1)
	const [ totalpaginas, guardarTotalPaginas ] = useState(1)

	const { nameCh, gender, status } = personaje

	useEffect( () => {

		if(inicio) {
			const consultarInicio = async () => {
				const url = `https://rickandmortyapi.com/api/character?page=${paginaactual}`
				const resultado = await axios.get(url)
				const imagenesPagina2 = 20

				guardarListadoPersonaje(resultado.data.results)

				const calcularPaginas = Math.ceil( resultado.data.info.count / imagenesPagina2 )
        guardarTotalPaginas(calcularPaginas)

        const junbotron = document.querySelector('.jumbotron')
        junbotron.scrollIntoView({ behavior: 'smooth'})
			}
			consultarInicio()
		}

		if(consultar) {
			const consultarAPI = async () => {
				const url = `https://rickandmortyapi.com/api/character/?page=${paginaactual}&name=${nameCh}&status=${status}&gender=${gender}`
				const imagenesPagina = 20

				const resultado = await axios.get(url)
					.then((resultado) => {
							guardarListadoPersonaje(resultado.data.results)

							const calcularPaginas = Math.ceil( resultado.data.info.count / imagenesPagina )
        			guardarTotalPaginas(calcularPaginas)

        			const junbotron = document.querySelector('.jumbotron')
        			junbotron.scrollIntoView({ behavior: 'smooth'})

							guardarErrorCode(false)
							//guadarConsultar(false)
							return
					    }).catch((error) => {
					        if(error.code === 'ERR_BAD_REQUEST'){
					        	guardarListadoPersonaje([])
					        	guardarErrorCode(true)
					        	guardarPaginaActual(1)
					        	//guardarTotalPaginas(1)
					        	return
					        }
		    			});
				//const resultado = await axios.get(url)
				//guardarListadoPersonaje(resultado.data.results)
				//guadarConsultar(false)
			}
			consultarAPI()
		}


	}, [personaje, paginaactual])

	const paginaAnterior = () => {
      const nuevaPaginaActual = paginaactual - 1

      if( nuevaPaginaActual === 0 ) return;

      guardarPaginaActual(nuevaPaginaActual)
      //guadarConsultar(true)
    }

    const paginaSiguiente = () => {
      const nuevaPaginaActual = paginaactual + 1

      if( nuevaPaginaActual > totalpaginas ) return;

      guardarPaginaActual(nuevaPaginaActual)
     	//guadarConsultar(true)
    }


	return (

		<PersonajesContext.Provider
			value={{
					guardarPersonaje,
					guadarConsultar,
					listadopersonaje,
					errorcode,
					paginaAnterior,
					paginaSiguiente,
					paginaactual,
					totalpaginas,
					actualizarInicio,
					guardarPaginaActual,
					guardarTotalPaginas
			}}
		>
			{props.children}
		</PersonajesContext.Provider>
	)
}

export default PersonajesProvider