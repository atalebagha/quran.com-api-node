'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

function load(PATH) {
  var files = fs.readdirSync(PATH);
  var models = {};

  files.forEach(function(file) {
    if (fs.statSync(path.join(PATH, file)).isDirectory()) {
      models[file] = load(path.join(PATH, file));
    } else if ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')) {
      var model = sequelize.import(path.join(PATH, file));

      models[model.name] = model;
    }
  });

  return models;
}

db = load(__dirname);

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].name === undefined) {
    Object.keys(db[modelName]).forEach(function(name) {
      if (db[modelName][name].associate) {
        db[modelName][name].associate(db);
      }
    });
  } else if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
