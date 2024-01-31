'use client'

import React, { useRef, useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation'

const ProductForm = () => {

const [ product , setProduct] = useState({
        name: "",
        descripcion : "",
        price: 0
})

const form = useRef(null)
const router= useRouter()

    const HandleChange = e => {
        console.log(e.target.value , e.target.name)
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(product)

     const res = await axios.post('/api/products' , product)
     console.log(res)
     form.current.reset()
     router.push("/products")
    }
  return (
    <form className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit} ref={form}>
            <label className='text-gray-800 block   font-bold mb-2 text-sm '> Nombre del Producto</label>
            <input name= "name" type='text' placeholder='Ingresar Nombre' onChange={HandleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-black' autoFocus/>

            <label className='text-gray-800 block  font-bold mb-2 text-sm '> Precio del Producto</label>
            <input  name= "price"  type='number' placeholder='Ingresar Precio' onChange={HandleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-black'/>

            <label className='text-gray-800 block  font-bold mb-2  text-sm '> Descripcion del Producto</label>
            <textarea  name= "descripcion" rows={3} type='text' placeholder='Ingresar Descripcion' onChange={HandleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-black'/>

            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font bold py-2 px-4 rounded'> Guardar Producto </button>
        </form>
  )
}

export default ProductForm