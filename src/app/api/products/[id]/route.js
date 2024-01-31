const { NextResponse } = require("next/server");
import { conn  } from "@/libs/mysql";

export async function GET( request , { params }) {
   try {
   const result = await conn.query("SELECT * FROM product WHERE ID = ?" , [params.id])
   if( result.length === 0) return NextResponse.json({message : "Producto no encontrado"})
   return NextResponse.json( result[0] )
   } catch (error) {
    return NextResponse.json({message : error.message} , {status : 500})
   }
}

export async function DELETE(request , {params}){
    try {
        
    const result = await conn.query("DELETE FROM product WHERE ID = ?" , [params.id])
    
    if(result.affectedRows ===0){
        return NextResponse.json(
            {
                message: "Producto no encontrado"
            },
            {
                status : 404
            }
        )
    }
    return new Response( null , {status : 204} )

    } catch (error) {
        return NextResponse.json( {message : error.message} )
    }
}

export async function PUT( request , {params}){
 try {
    const data = await request.json()
    const result = await conn.query("UPDATE product SET ? WHERE ID= ?" , [data , params.id] )

    if( result.affectedRows === 0 ){
        return NextResponse.json({ message :"Producto no encontrado"}, {status: 404})
    }

    const updateProduct = await conn.query("SELECT * FROM product WHERE id = ? " , [ params.id] )
   
    return NextResponse.json(updateProduct[0])
 } catch (error) {
    return NextResponse({message : error.message}, {status: 500})
 }
   
} 