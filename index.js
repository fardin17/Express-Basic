var express = require('express');
var app = express();
var admin = express();
//app.use(express.json()); application/json
//app.use(express.raw()); application/octet-stream
//app.use(express.text()); text/plain
//app.use(express.urlencoded()); //application/x-www-form-urlencoded
//app.use(express.static(`${__dirname}/public/`));

admin.use(express.Router());

admin.get('/dashbord', (req, res) => {
	res.send('Admin dashbord');
});

app.use('/admin', admin);
app.get('/', (req, res) => {
	console.log('Hello fardin');
	res.send('Hello fardin');
});
app.post('/about', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});
app.listen('3000', () => {
	console.log(`Successfully listen at 3000`);
});
