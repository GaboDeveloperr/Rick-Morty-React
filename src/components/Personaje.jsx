import React from 'react'


const Personaje = ({ personaje }) => {


	return (
		<>
				<div className="mb-3 aa2 p-2 m-3 shadowCustomize">
				  <div className="card">
					  <img src={personaje.image} className="card-img-top" alt=""/>
					  <div className="card-body">
					    <h5 className="card-title colorAll">{personaje.name}</h5>
					    <p className="card-text"><span className='fw-bold'>Gender: </span><span className='fw-bold colorAll'>{personaje.gender}</span></p>
					    <p className="card-text"><span className='fw-bold'>Species:</span> <span className='fw-bold colorAll'>{personaje.species}</span></p>
					    <p className="card-text"><span className='fw-bold'>Status: </span><span className='fw-bold colorAll'>{personaje.status}</span></p>
					    <p className="card-text"><span className='fw-bold'>Origin: </span><span className='fw-bold colorAll'>{personaje.location.name}</span></p>

					    <buttom
					    	className='btn btn-block btn-success w-100'
					    >Save</buttom>

					  </div>
					</div>
				</div>

		</>
	)
}


export default Personaje