import React from "react";

export const Encabezado = (prop) => (
    <h1>
        { prop.titulo }: { prop.valor }
    </h1>
);

const Producto = (prop) => (
    <li className= "producto" onClick= {(e) => prop.onProductoClick(prop, e)}>
        Nombres  : {prop.nombre}, Cantidad: {prop.cantidad}
    </li>
);

export const Productos = (prop) => (
    <ul>
        {prop.productos.map((item) => (
            <Producto 
            key = { item.codigo }
            codigo =  { item.codigo } 
            nombre = {item.nombre}
            cantidad = { item.cantidad }
            onProductoClick = { prop.onProductoClick }/>
        ))}
    </ul>
);