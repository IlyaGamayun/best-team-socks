require('@babel/register');
const express = require('express');

const app = express();
const PORT = 3000;
const ssr = require('./middleware/ssr');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(express.static('public'));

const mainRoute = require('./Routes/mainRoute');

app.use('/', mainRoute);

app.listen(PORT, () => {
  console.log('Носок шуршит...');
});
