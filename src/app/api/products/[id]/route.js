const { NextResponse } = require("next/server");

export function GET() {
    return NextResponse.json('Obteniendo Producto')}

export function DELETE(){
    return NextResponse.json('Eliminando Producto')
}

export function PUT(){
    return NextResponse.json('Actualizando Producto')
}