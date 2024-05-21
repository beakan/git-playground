import { Request, Response } from 'express';
import { DataSource } from 'typeorm';

import ProductsService from './products.service';

class ProductsController {
  // ----------------------------------------------------------------------------------------------
  private productsService: ProductsService;

  constructor(dataSource: DataSource) {
    this.productsService = new ProductsService(dataSource);
  }

  // ----------------------------------------------------------------------------------------------

  getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await this.productsService.getAllProducts();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  // ----------------------------------------------------------------------------------------------

  getProductById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const product = await this.productsService.getProductById(parseInt(id, 10));
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json(product);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  // ----------------------------------------------------------------------------------------------

  createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const newProduct = await this.productsService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  // ----------------------------------------------------------------------------------------------

  updateProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const updatedProduct = await this.productsService.updateProduct(parseInt(id, 10), req.body);
      if (!updatedProduct) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json(updatedProduct);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  // ----------------------------------------------------------------------------------------------

  deleteProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const deletedProduct = await this.productsService.deleteProduct(parseInt(id, 10));
      if (!deletedProduct) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json({ message: 'Product deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  // ----------------------------------------------------------------------------------------------
}

export default ProductsController;
