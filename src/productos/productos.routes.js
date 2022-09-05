const ProductosController = require('./productos.controller');
const express = require('express')

const router = express.Router();

// GET '/api/productos' -> devuelve todos los productos.
// GET '/api/productos/:id' -> devuelve un producto según su id.
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
// DELETE '/api/productos/:id' -> elimina un producto según su id.

router.get('/api/productos', (req, res) => {
    res.send(ProductosController.getProductos);
});

router.get('/api/productos/:id', (req, res) => {
    ProductosController.getProducto(req, res);
});

router.post('/api/productos', (req, res) => {
    ProductosController.addProducto(req, res);
});

router.put('/api/productos/:id', (req, res) => {
    ProductosController.updateProducto(req, res);
});

router.delete('/api/productos/:id', (req, res) => {
    ProductosController.deleteProducto(req, res);
});

module.exports = router;