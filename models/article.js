'use strict';

var db = require('./database');
var S = require('sequelize');

// Asegurate que tu Postgres este corriendo!

var User = require('./user');

//---------VVVV---------  tu código aquí abajo  ---------VVV----------

class Article extends S.Model {}
Article.init({
  
  
}, { sequelize: db, modelName: 'article' });
//---------^^^---------  tu código aquí arriba  ---------^^^----------

module.exports = Article;
