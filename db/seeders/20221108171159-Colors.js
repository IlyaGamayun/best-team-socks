/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Colors', [{
      color: 'Белый',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      color: 'Чёрный',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      color: 'Красный',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      color: 'Синий',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      color: 'Зеленый',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Colors');
  },
};
