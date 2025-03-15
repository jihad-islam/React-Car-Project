import React from 'react'
import Header from './Header'
import Features from './Features'
import CarList from './CarList'

function CarsMart() {
  return (
    <div className='mx-auto p-4'>
        <Header></Header>
        <Features></Features>
        <CarList></CarList>
    </div>
  )
}

export default CarsMart