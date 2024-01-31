import { conn } from "@/libs/mysql" ;
import axios from "axios";

async function  LoadProductos() {
    const {data} = await axios.get("http://localhost:3000/api/products")
    return data
}

const ProductsPage = async() => {
  const products = await LoadProductos()
  return (
    <div className="grid gap-4 grid-cols-4 text-black">
        { products.map( (producto , index ) => (
           <div key={index} className="bg-white rounded-lg border-gray-800">
            <h2 className="text-lg font-bold"> {producto.name} </h2>
            <h2 className="text-2xl text-slate-500"> {producto.price} </h2>
            <p>  {producto.descripcion} </p>
        
           </div>
        ))}
    </div>
  )
}

export default ProductsPage