const React = require('react');

module.exports = function Head() {
  return (
    <div className="header">
      <div className="logo">
        <h1>
          <a href="/">
            <strong>
              Soсkskea
            </strong>
          </a>
        </h1>
      </div>
      <div className="menu">
        <div className="headLinkLeft">
          <a href="/fav">Избранное</a>
        </div>
        <div className="headLinkRight">
          <a href="/cart">Корзина</a>
        </div>
      </div>
      <div className="menu">
        <div className="headLinkLeft">
          <a href="/auth">Войти</a>
        </div>
        <div className="headLinkRight">
          <a href="/reg">Регистрация</a>
        </div>
      </div>
    </div>
  );
};
