/* global hexo */

'use strict';

var renderer = require('./lib/renderer');

hexo.extend.renderer.register('liquid', 'html', renderer);
