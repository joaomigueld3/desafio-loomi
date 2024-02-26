class ProductRepository {
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    return this.model.findAll();
  }

  async findById(productId) {
    return this.model.findByPk(productId);
  }

  async create(productData) {
    return this.model.create(productData);
  }

  async update(productId, productData) {
    const product = await this.findById(productId);
    if (product) {
      return product.update(productData);
    }
    return null;
  }

  async delete(productId) {
    const product = await this.findById(productId);
    if (product) {
      await product.destroy();
    }
  }

  async findByFilters(filters) {
    try {
      const products = await this.model.findAll({
        where: filters,
      });
      return products;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default ProductRepository;
