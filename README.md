# [Liquid] renderer for [Hexo]

Add support for [Liquid].

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