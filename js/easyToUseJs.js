// Jquery
window.$ = window.jQuery = require('./js/jquery.min.js');
var view = require('./js/view.js');
var literature = require('./js/literature.js');
var webWikipedia = require('./js/webWikipedia.js');
var sideBar = require('./js/sidenav.js');
// used strict mode
// functions must be named in order to be used!

$(document).ready(function() {

    sideBar.createMenuFrom();
    webWikipedia.createFrameAndWiki();// can't use webcontent due to it's mailfunction
    literature.createLiteratureDiv();

    $(function () {
        $('.navigation').click(function(){
          view.exactly($(this).attr('id'));
        });
    });


});
