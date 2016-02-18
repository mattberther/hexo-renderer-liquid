/* global hexo */

'use strict';

var engine = require('./lib/engine');
var renderer = require('./lib/renderer');

module.exports = {
  Engine: engine,
  Renderer: renderer
};

if (typeof hexo !== 'undefined') {
  hexo.extend.renderer.register('liquid', 'html', renderer);
}
