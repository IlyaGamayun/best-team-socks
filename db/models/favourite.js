const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate() {
    }
  }
  Favourite.init({
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
  return Favourite;
};
