import React, { useState, useContext } from 'react'
import { PersonajesContext } from '../context/PersonajesContext'

const Formulario = () => {

	const [ busqueda, guardarBusqueda ] = useState({
		nameCh: '',
		gender: '',
		status: ''
	})

	const { guardarPersonaje, guadarConsultar, guardarPaginaActual, actualizarInicio, guardarTotalPaginas } = useContext(PersonajesContext)

	const { nameCh, gender, status } = busqueda

	const [ error, actualizarError ] = useState(false)


	const datosForm = e => {
		guardarBusqueda({
			...busqueda,
			[e.target.name] : e.target.value
		})
	}

	const formSubmit = e => {
		e.preventDefault()

		if( nameCh.trim() === '' || gender.trim() === '' || status.trim() === '') {
			actualizarError(true)
			return
		}

		actualizarError(false)

		guardarPersonaje(busqueda)
		guadarConsultar(true)
		guardarPaginaActual(1)
		guardarTotalPaginas(1)
		actualizarInicio(false)

	}

	return (

		<>
			{ error ? <h5 className='text-center fw-bold text-danger'>Busca un personaje valido</h5> : null}
			<form
				onSubmit={ formSubmit }
			>
					<div className='row mt-5 text-white text-center p-2'>
						<div className='col-md-3 py-2'>
							<input
								type="text"
								className='form-control'
								placeholder='Search By Name'
								onChange = { datosForm }
								name='nameCh'
								value={ nameCh }
							/>
						</div>

						<div className='col-md-3 py-2'>
							<select className='form-control'
								onChange = { datosForm }
								name='gender'
								value={ gender }
							>
								<option value="">-- Gender --</option>
								<option value="female">Female</option>
								<option value="male">Male</option>
								<option value="genderless">Genderless</option>
								<option value="unknown">Unknown</option>
							</select>
						</div>

						<div className='col-md-3 py-2'>
							<select className='form-control'
								onChange = { datosForm }
								name='status'
								value={ status }
							>
								<option value="">-- Status --</option>
								<option value="alive">Alive</option>
								<option value="dead">Dead</option>
								<option value="unknown">Unknown</option>
							</select>
						</div>

						<div className='col-md-3 py-2'>
							<input
								type="submit"
								className='btn btn-block btn-primary w-100'
								value='Search'
							/>
						</div>
					</div>
				</form>

			</>

	)
}


export default Formulario