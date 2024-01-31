'use client'

import React, { useState } from 'react'

const ProductForm = () => {

const [ product , setProduct] = useState({
        name: "",
        descripcion : "",
        price: 0
})

    const HandleChange = e => {
        console.log(e)
    }
  return (
    <form className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
            <label className='text-gray-800 block   font-bold mb-2 text-sm '> Nombre del Producto</label>
            <input type='text' placeholder='Ingresar Nombre' onChange={HandleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-black'/>

            <label className='text-gray-800 block  font-bold mb-2 text-sm '> Precio del Producto</label>
            <input type='number' placeholder='Ingresar Precio' onChange={HandleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-black'/>

            <label className='text-gray-800 block  font-bold mb-2  text-sm '> Descripcion del Producto</label>
            <textarea rows={3} type='text' placeholder='Ingresar Descripcion' onChange={HandleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-black'/>
        </form>
  )
}

export default ProductForm