const { NextResponse } = require("next/server");

export function GET(){
    return NextResponse.json({ message : "Listando Productos"})
}

export function POST() {
    return NextResponse.json('Creando Producto')
}