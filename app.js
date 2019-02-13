/*задание обработчиков для разных URL в понятияхa
MVC это router и controller одновременно в 
Django это urls.py и views.py*/
const express = require('express');
var models = require('./models');
const app = express();
var z = new models.Courier(1, "Вася");
var b = new models.Courier(2, 'Аджика');
var c = new models.Courier(3, 'Серега')
let names = [z, b, c];

//a_name = a.getName();
var make_responce = function(names){
	var response = [];
	for (var courier in names){
		var qstring = {};
		qstring[names[courier].getId()] =names[courier].getName()
		response.push(qstring);
	};
	return response;
};
var response = make_responce(names);
console.log(response);
app.get('/', function(req, res)
{
	res.json(response);
	
});
app.listen(3000, function(){
	console.log('запрос пошел');
});



