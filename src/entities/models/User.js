import { Model, DataTypes } from 'sequelize';

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
      created_at: this.created_at,
      updated_at: this.updated_at,
      type: this.type,
    };
  }
}

export default User;
