//console.log("Hello, world!")
const express = require('express'); //Importar módulo express
const { engine } = require('express-handlebars');

const app = express(); //App

app.get('/',function(req,res){
    res.write("Hello, dady!");
    res.end(' pague o que me deve'); //Resposta ao cliente
}); //Rota de teste

//Servidor
app.listen(8080); //Porta 8080

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.set('views', 'views');



