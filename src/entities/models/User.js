import { Model, DataTypes, Op } from 'sequelize';

const UserType = {
  Admin: 'Admin',
  Client: 'Client',
};

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(80),
          allowNull: false,
          set(value) {
            this.setDataValue('name', value.toUpperCase());
          },
        },
        email: {
          type: DataTypes.STRING(150),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(120),
          allowNull: false,
        },
        type: {
          type: DataTypes.ENUM(...Object.values(UserType)),
          defaultValue: UserType.Client,
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'table_users',
        timestamps: true,
        underscored: true,
      },
    );
  }

  // eslint-disable-next-line no-unused-vars
  static associate(models) {

  }

  toDict() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      type: this.type,
    };
  }

  static async findByName(name) {
    const whereCondition = name ? {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    } : {};

    const users = await this.findAndCountAll({
      where: whereCondition,
      order: [['name', 'ASC']],
    });

    return users;
  }

  static async findById(id) {
    return this.findByPk(id);
  }
}

export default User;
