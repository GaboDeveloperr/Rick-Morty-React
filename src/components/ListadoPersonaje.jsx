import React, { useContext } from 'react'
import Personaje from './Personaje'
import { PersonajesContext } from '../context/PersonajesContext'

const ListadoPersonaje = () => {

	const { listadopersonaje, errorcode } = useContext(PersonajesContext)
	const { paginaAnterior, paginaSiguiente, paginaactual, totalpaginas, guadarConsultar } = useContext(PersonajesContext)

	return (

		<>
			<div className='container text-center p-3'>
				{ errorcode ? <h5 className='text-center fw-bold text-danger'>Lo Sentimos No Se Encontro el Personaje...</h5> : null}

				{ listadopersonaje.map( (personaje) => (
					<Personaje
						key={personaje.url}
						personaje={personaje}
					/>
				))}
			</div>

			<div className='text-center'>
			{ (paginaactual === 1) ? null : (
                <button
                    type='button'
                    className='btn btn-info mr-4 m22'
                    onClick={ () => paginaAnterior() }

                >&laquo; Anterior</button>
            )}

        { (paginaactual === totalpaginas) ? null : (
            <button
                type='button'
                className='btn btn-info mr-2'
                onClick={ () => paginaSiguiente() }

            >Siguiente &raquo;</button>
        )}
        </div>


			<footer></footer>
		</>

	)
}


export default ListadoPersonaje