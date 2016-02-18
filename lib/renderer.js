'use strict';

var Liquid = require('liquid-node');
var assign = require('object-assign');
var engine = new Liquid.Engine();

function liquidRenderer(data, locals, callback) {
  engine.parseAndRender(data.text, assign({filename: data.path}, locals))
    .then(function(result) {
      callback(null, result);
    })
    .catch(function(err) {
      callback(err);
    });
}

module.exports = liquidRenderer;
