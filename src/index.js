import React, {useState} from "react";
import ReactDOM from "react-dom";

import { Encabezado, Productos } from "./productos.component"

const rootElement = document.getElementById("root");
const titulo = "Hola React 2021"
const productosIniciales = [
    { codigo:1, nombre: "producto 1", cantidad: 2},
    { codigo:2, nombre: "producto 5", cantidad: 5}
];

function cuadrado(valor){
    return valor*valor;
}

// const Encabezado = (prop) => (
//     <h1>
//         { prop.titulo }: { prop.valor }
//     </h1>
// );

// const Producto = (prop) => (
//     <li className= "producto" onClick= {(e) => prop.onProductoClick(prop, e)}>
//         Nombre: {prop.nombre}, Cantidad: {prop.cantidad}
//     </li>
// );

// const Productos = (prop) => (
//     <ul>
//         {prop.productos.map((item) => (
//             <Producto 
//             key = { item.codigo }
//             codigo =  { item.codigo } 
//             nombre = {item.nombre}
//             cantidad = { item.cantidad }
//             onProductoClick = { prop.onProductoClick }/>
//         ))}
//     </ul>
// );

const App = () => {
    const [productos, setProductos] = useState(productosIniciales);

    const update = (prop) => {
        const newProductos = productos.slice();
        const producto = newProductos.find((x) => x.codigo === prop.codigo);
        const index = productos.indexOf(producto);
        newProductos[index] = {...producto, cantidad: producto.cantidad + 1};
        setProductos(newProductos);
    }

    return(
        <div>
            <Encabezado titulo = { titulo } valor = {cuadrado( 2 * 4 ) }/>
            <Productos productos = { productos } onProductoClick = {update}/>
        </div>
    );
};

ReactDOM.render(<App/>, rootElement);
