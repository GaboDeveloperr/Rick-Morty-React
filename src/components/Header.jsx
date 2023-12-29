import React from 'react'
import Formulario from './Formulario'


const Header = () => {

	return (
		<>
			<h1 className='mt-2 text-center text-white fw-bold text_header p-3'>
				<span className='color_header jumbotron'>Rick</span> And <span className='color_header'>Morty</span> App
			</h1>

			<p className='fw-bold text-center text-white p_header p-3'>"¡Me he convertido en un pepinillo, <span className='color_header'>Morty!</span> ¡Soy <span className='color_header'>Pickle Riiiick!"</span>
			</p>

			<Formulario />
		</>
	)
}


export default Header