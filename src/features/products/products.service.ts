import { DataSource, DeepPartial, Repository } from 'typeorm';

import { Product } from './products.entity';

class ProductsService {
  // ----------------------------------------------------------------------------------------------
  productsRepository: Repository<Product>;

  constructor(dataSource: DataSource) {
    this.productsRepository = dataSource.getRepository(Product);
  }

  // ----------------------------------------------------------------------------------------------

  async getAllProducts() {
    return await this.productsRepository.find();
  }

  // ----------------------------------------------------------------------------------------------

  async getProductById(id: number) {
    return await this.productsRepository.findOneBy({ id });
  }

  // ----------------------------------------------------------------------------------------------

  async createProduct(productData: DeepPartial<Product>) {
    const newProduct = this.productsRepository.create(productData);
    return await this.productsRepository.save(newProduct);
  }

  // ----------------------------------------------------------------------------------------------

  async updateProduct(id: number, productData: DeepPartial<Product>) {
    const productToUpdate = await this.productsRepository.findOneBy({ id });
    if (!productToUpdate) return null;

    // Merge the existing product with the new data
    const updatedProduct = Object.assign(productToUpdate, productData);

    return await this.productsRepository.save(updatedProduct);
  }

  // ----------------------------------------------------------------------------------------------

  async deleteProduct(id: number) {
    const productToDelete = await this.productsRepository.findOneBy({ id });
    if (!productToDelete) return null;

    return await this.productsRepository.remove(productToDelete);
  }

  // ----------------------------------------------------------------------------------------------
}

export default ProductsService;
