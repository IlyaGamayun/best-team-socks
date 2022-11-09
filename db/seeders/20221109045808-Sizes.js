/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Sizes', [{
      size: 'XS',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      size: 'S',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      size: 'M',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      size: 'L',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      size: 'XL',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      size: 'XXL',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Sizes');
  },
};
