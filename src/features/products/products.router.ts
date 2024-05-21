import express, { Router } from 'express';
import { DataSource } from 'typeorm';

import ProductsController from './products.controller';

export function ProductsRouter(dataSource: DataSource) {
  const router: Router = express.Router();
  const productsController = new ProductsController(dataSource);

  // ----------------------------------------------------------------------------------------------
  // RESTful routes
  router.get('/products', productsController.getAllProducts);
  router.get('/products/:id', productsController.getProductById);
  router.post('/products', productsController.createProduct);
  router.patch('/products/:id', productsController.updateProduct);
  router.delete('/products/:id', productsController.deleteProduct);
  // ----------------------------------------------------------------------------------------------
  return router;
}
