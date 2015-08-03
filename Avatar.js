var DOMElement = require('famous/dom-renderables/DOMElement');

// options - Object
// options.src - image src
// options.size - image size
function Avatar(node, options) {
  var size = options.size ? options.size : 48;
  var ava = node.addChild();
  ava
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(size, size)
  ava.el = new DOMElement(ava, {tagName: 'img'});
  ava.el.setAttribute('src', options.src);
  ava.el.setProperty('border-radius', size / 2 + 'px');
}

module.exports = Avatar;
