# [Liquid] renderer for [Hexo]

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Add support for [Liquid].

## Install

``` bash
$ npm install hexo-renderer-liquid --save
```

## Usage
To override the [liquid-node] engine options, you need to reference the exported `Engine` property.

``` javascript
var renderer = require('hexo-renderer-liquid');
var engine = renderer.Engine;

engine.registerFilters({
  prepend: function(input, text) {
    return text + input;
  });
});
```

[Liquid]: https://github.com/Shopify/liquid
[liquid-node]: https://github.com/sirlantis/liquid-node
[Hexo]: http://hexo.io/
[npm-image]: https://badge.fury.io/js/hexo-renderer-liquid.svg
[npm-url]: https://npmjs.org/package/hexo-renderer-liquid
[travis-image]: https://travis-ci.org/mattberther/hexo-renderer-liquid.svg?branch=master
[travis-url]: https://travis-ci.org/mattberther/hexo-renderer-liquid
[daviddm-image]: https://david-dm.org/mattberther/hexo-renderer-liquid.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mattberther/hexo-renderer-liquid
