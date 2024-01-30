const { NextResponse } = require("next/server");
import { conn } from "@/libs/mysql";

export function GET(){
    return NextResponse.json({ message : "Listando Productos"})
}

export async function POST( request ) {
    try {
        const {name ,descripcion , price } = await request.json()   
        const result = await conn.query("INSERT INTO product SET ?" , {
            name,
            descripcion,
            price
        })
        console.log(result)
        return NextResponse.json({
            id : result.insertId,
            name,
            descripcion,
            price
        })
    } catch (error) {
        console.log( error )
        return NextResponse.json(
            { 
                message:error.message 
            } ,
            {
                status : 500
            }
       )
    } 
}