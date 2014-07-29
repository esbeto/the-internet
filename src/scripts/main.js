(function(){

  bespoke.plugins.backgroundElement = function(deck) {
    var el = document.createElement('div');
    el.className = 'background';
    deck.parent.appendChild(el);
  };

  bespoke.plugins.audio = function(deck) {
    deck.on('activate', function(e) {
      if (typeof e.slide.dataset.bespokeState !== "undefined") {
        if (e.slide.dataset.bespokeState.indexOf("audio") != -1) {
          var audiofile = e.slide.dataset.bespokeState.split(' ')[0];
          var audiotag = document.createElement('audio');
          audiotag.src = "../audio/" + audiofile + ".ogg";
          audiotag.load();
          deck.parent.appendChild(audiotag);
          audiotag.play();
        }
      }
    });
  };

  bespoke.from('article', {
    backgroundElement: true,
    audio: true,
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
