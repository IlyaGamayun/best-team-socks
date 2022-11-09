/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Илья Гамаюн',
      email: 'il.gamayun@gmail.com',
      password: 'Elbrus666',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Анна Кремзер',
      email: 'kreemzer.anet@gmail.com',
      password: 'Elbrus666',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Иван Судоргин',
      email: 'geo.vox95@gmail.com',
      password: 'Elbrus666',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Дмитрий Мельников',
      email: 'noclub88@gmail.com',
      password: 'Elbrus666',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
