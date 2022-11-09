/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserSocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      colorId: Sequelize.INTEGER,
      patternId: Sequelize.INTEGER,
      picId: Sequelize.INTEGER,
      sizeId: Sequelize.INTEGER,
    }, {
      Sequelize,
      modelName: 'UserSock',
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('UserSocks');
  },
};
