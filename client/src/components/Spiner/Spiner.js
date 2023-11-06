import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
export default function Spiner() {
  return (
    <div className='container text-center mt-5 '>
         Loading <Spinner animation="grow" size='sm' variant="danger" />
        <Spinner animation="grow" size='sm' variant="primary" /> 
        <Spinner animation="grow" size='sm' variant="info" /> 
        
        
    </div>
  )
}
