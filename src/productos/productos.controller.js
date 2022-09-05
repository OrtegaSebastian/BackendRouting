const ProductosService = require("./productos.services");

const getProductos = async (req, res)=> {
        const productos = await ProductosService.getProductos();
        res.send(productos);
}
//segun id pendiente
const getProducto = async (req, res)=> {
    const productos = await ProductosService.getProductos();
    const producto = productos.find((producto) => producto.id == id);
    if(producto){
        return producto;
    }else{
        return "no se encontró"
    }
   
};

const addProducto = async (req, res)=> {
    const {title, price, tumnail} = req.body;
    Productos.push({title, price, tumnail})
    res.send({added:{title, price, tumnail} })
};

const updateProducto = async (req, res)=> {
    
};

const deleteProducto = async (req, res)=> {
    
};

module.exports = {
    getProductos,
    getProducto,
    addProducto,
    updateProducto,
    deleteProducto
};