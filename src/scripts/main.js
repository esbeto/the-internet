(function(){

  bespoke.plugins.backgroundElement = function(deck) {
    var el = document.createElement('div');
    el.className = 'background';
    deck.parent.appendChild(el);
  };

  bespoke.from('article', {
    backgroundElement: true,
    bullets: 'li, .bullet',
    keys: true,
    hash: true,
    state: true
  });

  (function preloadBackgroundImages() {

    var matches, image,
      forEach = function(arrayLike, fn) {
        [].slice.call(arrayLike, 0).forEach(fn);
      };

    forEach(document.styleSheets, function(sheet) {
      forEach(sheet.rules, function(rule) {
        if (rule.style && rule.style.backgroundImage) {
          matches = rule.style.backgroundImage.match(/url\((.*)\)/);
          if (matches) {
            image = new Image();
            image.src = matches[1];
          }
        }
      });
    });

  }());

}());
