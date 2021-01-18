const express = require("express");
const bodyParser = require("body-parser");

//router
const authRouter = require('./routes/auth/auth');

let app = express();

app.set('port',  process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//rutas

app.use('/api/auth', authRouter)
app.get('/', function(req,res) {
    res.send("holla")
})
const server = app.listen(app.get('port'), function() {
    console.log('server corriendo');
});