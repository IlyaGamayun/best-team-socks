const {
  Model,
} = require('sequelize');

module.exports = (DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Order.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      userSockId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'UserSocks',
          key: 'id',
        },
      },
    },
  });
  return Order;
};
