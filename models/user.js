'use strict';

var db = require('./database');
var S = require('sequelize');

class User extends S.Model {}

User.init({
  name: S.STRING
}, { sequelize: db, modelName: 'user' });

module.exports = User;
