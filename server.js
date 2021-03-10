const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Welcome to Hardeep Worldz!Name-Hardeep Kaur URN-1905421' ));
app.get('/hardeep', (req, res) => res.send('Welcome to Mean Stack Tutorial! Name-Hardeep Kaur URN-1905421'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
