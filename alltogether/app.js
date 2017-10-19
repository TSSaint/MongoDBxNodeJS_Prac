var express = require('express');
var app = express();
var engines = require('consolidate');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

