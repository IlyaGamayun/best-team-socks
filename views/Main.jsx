const React = require('react');
const Layout = require('./Layout');

function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="slogan">
        Есть idea - есть soсkskea!
      </div>
      <h2>Добро пожаловать в магазин потных носков!</h2>
      <div className="contentBody">
        <img className="image" src="/img/nosok.jpg" width="250" alt="nosok" />
        <div className="imageText">
          Надоели ваши старые грязные и дырявые носки?
          Выход есть - мы предлагаем вам замутить свои кастомные носки, заходи в
          конструктор по кнопке и решай, как должен выглядеть твой идеальный мега-носок!
          <form action="/socks/new">
            <button type="submit">GO</button>
          </form>
        </div>
      </div>

    </Layout>
  );
}

module.exports = Main;
