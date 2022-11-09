const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Order, Favourite, UserSock }) {
      User.belongsToMany(UserSock, { through: Order, foreignKey: 'userId', otherKey: 'userSockId' });
      User.belongsToMany(UserSock, { through: Favourite, foreignKey: 'userId', otherKey: 'userSockId' });
      User.hasMany(UserSock, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
