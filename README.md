# [Liquid] renderer for [Hexo]

Add support for [Liquid].

[![NPM](https://nodei.co/npm/hexo-renderer-liquid.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/hexo-renderer-liquid/)

[![Circle CI](https://circleci.com/gh/mattberther/hexo-renderer-liquid.svg?style=shield)](https://circleci.com/gh/mattberther/hexo-renderer-liquid)
[![devDependency Status](https://david-dm.org/mattberther/hexo-renderer-liquid.svg)](https://david-dm.org/mattberther/hexo-renderer-liquid#info=devDependencies)


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
