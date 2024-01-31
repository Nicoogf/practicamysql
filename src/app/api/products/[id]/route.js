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

export function DELETE(){
    return NextResponse.json('Eliminando Producto')
}

export function PUT(){
    return NextResponse.json('Actualizando Producto')
}