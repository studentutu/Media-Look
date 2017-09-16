// Jquery
window.$ = window.jQuery = require('./js/jquery.min.js');
var togle = require('./js/functionTogle.js');
var literature = require('./js/literature.js');
var webWikipedia = require('./js/webWikipedia.js');

      //  Menu bar
      //
      var ul = document.getElementById('menulist');
          [].forEach.call(ul.childNodes, function (li) {
                li.onclick = function () {
                    if(li.id === "hideB"){
                      togle.hide("webWikipedia");
                      togle.hide("literature");
                    } else {
                      togle.show("webWikipedia");
                      togle.show("literature");
                    }
                };
          });

      webWikipedia.createFrameAndWiki();
      literature.createLiteratureDiv();
