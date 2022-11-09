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
const authRoute = require('./Routes/authRoute');

app.use('/', mainRoute);
app.use('/auth', authRoute);

app.listen(PORT, () => {
  console.log('Носок шуршит...');
});
