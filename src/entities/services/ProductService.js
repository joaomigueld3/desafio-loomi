class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getAllProducts() {
    return this.productRepository.findAll();
  }

  async getProductById(productId) {
    return this.productRepository.findById(productId);
  }

  async createProduct(productData) {
    return this.productRepository.create(productData);
  }

  async updateProduct(productId, productData) {
    return this.productRepository.update(productId, productData);
  }

  async deleteProduct(productId) {
    return this.productRepository.delete(productId);
  }

  async getProductsByFilters(filters) {
    return this.productRepository.findByFilters(filters);
  }

  async updateProductQuantity(productId, quantityChange) {
    const product = await this.productRepository.findById(productId);

    if (!product) {
      throw new Error('Product not found.');
    }

    const newQuantity = product.quantityInStock + quantityChange;

    await this.productRepository.update(productId, { quantityInStock: newQuantity });
  }
}

export default ProductService;
