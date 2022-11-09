const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserSock extends Model {
    static associate({ Order, Favourite, User }) {
      UserSock.belongsToMany(User, { through: Order, foreignKey: 'userId', otherKey: 'userSockId' });
      UserSock.belongsToMany(User, { through: Favourite, foreignKey: 'userId', otherKey: 'userSockId' });
      UserSock.hasMany(User, { foreignKey: 'userId' });
    }
  }
  UserSock.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    colorId: DataTypes.INTEGER,
    patternId: DataTypes.INTEGER,
    picId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserSock',
  });
  return UserSock;
};
