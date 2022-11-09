const React = require('react');
const Layout = require('./Layout');

module.exports = function Auth({ title }) {
  return (
    <Layout title={title}>
      <div className="contentBody">
        <form action="/auth">
          <strong>E-mail: </strong>
          <br />
          <input type="email" placeholder="Ваш e-mail" />
          <br />
          <strong>Пароль: </strong>
          <br />
          <input type="password" minLength="5" maxLength="10" placeholder="Ваш пароль" />
          <br />
          <button type="submit">Войти</button>
        </form>
      </div>
    </Layout>
  );
};
