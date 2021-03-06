// Jquery
window.$ = window.jQuery = require('./js/jquery.min.js');
var view = require('./js/view.js');
var literature = require('./js/literature.js');
var webWikipedia = require('./js/webWikipedia.js');
var sideBar = require('./js/sidenav.js');
var sidePlayer = require('./js/musicPlayer.js');
var musicGalerie = require('./js/music.js');
var divImagesPosts = require('./js/imageS.js');
var divDDDmodels = require('./js/3DModels.js');
var videoGall = require('./js/videoDiv.js');
var path = require('path');
// use strict?

  // Structure
  {
      let docMy = document.createElement('div');
      docMy.setAttribute("id","sidenav");
      document.body.appendChild(docMy);

      docMy = document.createElement('div');
      docMy.setAttribute("class","content");
      document.body.appendChild(docMy);
      //--------------------

      //--------------------
      // Essential video
      docMy = document.createElement('div');
      docMy.setAttribute("class","hide");
      docMy.setAttribute("id","video");
      document.getElementsByClassName('content')[0].appendChild(docMy);
      // Essential musicDiv
      docMy = document.createElement('div');
      docMy.setAttribute("class","hide");
      docMy.setAttribute("id","musicDiv");
      document.getElementsByClassName('content')[0].appendChild(docMy);
      // Essential webWikipedia
      docMy = document.createElement('div');
      docMy.setAttribute("class","hide");
      docMy.setAttribute("id","webWikipedia");
      document.getElementsByClassName('content')[0].appendChild(docMy);
      // Essential Pictures
      docMy = document.createElement('div');
      docMy.setAttribute("class","hide");
      docMy.setAttribute("id","models");
      document.getElementsByClassName('content')[0].appendChild(docMy);
      // Essential dModels
      docMy = document.createElement('div');
      docMy.setAttribute("class","hide");
      docMy.setAttribute("id","DDDmodel");
      document.getElementsByClassName('content')[0].appendChild(docMy);

      // Essential literature
      docMy = document.createElement('div');
      docMy.setAttribute("class","hide");
      docMy.setAttribute("id","literature");
      document.getElementsByClassName('content')[0].appendChild(docMy);
      // Essential Footer
      docMy = document.createElement('div');
      docMy.setAttribute("id","footer");
      docMy.setAttribute("class","hide");
      document.getElementsByClassName('content')[0].appendChild(docMy);
      docMy = document.createElement('p');
      docMy.innerHTML = "</br> Made by </br>  Roman Fedorov </br> 2017 </br> All rights reserved. </br>";
      document.getElementById('footer').appendChild(docMy);


      sideBar.createMenuFrom(); // don't need path
      literature.createLiteratureDiv();// don't need path

    }
//setTimeout(webWikipedia.createFrameAndWiki,000); //// can't use webcontent due to it's mailfunction // don't need path


//document.getElementsByTagName('body')[0].style.visibility = "visible";

$('.navigation').click(function(){
  view.exactly($(this).attr('id'));
});


$(document.body).show("slow",function () {
  //  document.getElementById('1').click();
    goMP();
});

var goMP = function () {

  sidePlayer.myPlayer();

  // do need actual path
  let pth = path.join(__dirname,"/");// means .../Media-Look/

  // here all Posts must be made!
  let afterEv = function () {
    musicGalerie.musicForm(pth);
    webWikipedia.createFrameAndWiki();
    divImagesPosts.allImgAndPosts(pth);
    divDDDmodels.allImgAndPosts(pth);
    videoGall.videoForm(pth);
  }
  //afterEv();
  //setInterval();
  setTimeout(afterEv,300);

};
