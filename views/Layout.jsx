const React = require('react');
const Head = require('./Head');
const Foot = require('./Foot');

function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <link href="/css/style.css" rel="stylesheet" />
        <script defer src="/js/client.js" />
        <title>{title}</title>
      </head>
      <body>
        <Head />
        {children}
        <Foot />
      </body>
    </html>
  );
}

module.exports = Layout;
