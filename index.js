const moment = require('moment');
const date = moment().format('DD/MM/YYYY HH:mm');
const PORT = 2000;


require('http')
.Server((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.end(`<h1>Нюхалов Денис</h1><h2>${date}</h2>`);
 })
.listen(PORT || process.env.PORT); //process.env.PORT