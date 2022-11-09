const router = require('express').Router();
const Auth = require('../views/Auth');

router
  .get('/', (req, res) => {
    res.renderComponent(Auth, { title: 'Sockskead - Авторизация' });
  });

module.exports = router;
