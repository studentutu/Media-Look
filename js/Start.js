// Jquery
window.$ = window.jQuery = require('./js/jquery.min.js');
var view = require('./js/view.js');
var literature = require('./js/literature.js');
var webWikipedia = require('./js/webWikipedia.js');
var sideBar = require('./js/sidenav.js');
var sidePlayer = require('./js/musicPlayer.js');
var musicGalerie = require('./js/music.js');
const path = require('path');
// use strict?
// functions must be named in order to be used!


let docMy = document.createElement('div');
docMy.setAttribute("id","sidenav");
document.body.appendChild(docMy);
docMy = document.createElement('div');
docMy.setAttribute("class","content");
document.body.appendChild(docMy);
docMy = document.createElement('div');
docMy.setAttribute("class","hide");
docMy.setAttribute("id","video");
document.getElementsByClassName('content')[0].appendChild(docMy);
docMy = document.createElement('div');
docMy.setAttribute("class","hide");
docMy.setAttribute("id","musicDiv");
document.getElementsByClassName('content')[0].appendChild(docMy);
docMy = document.createElement('div');
docMy.setAttribute("class","hide");
docMy.setAttribute("id","webWikipedia");
document.getElementsByClassName('content')[0].appendChild(docMy);
docMy = document.createElement('div');
docMy.setAttribute("class","hide");
docMy.setAttribute("id","models");
document.getElementsByClassName('content')[0].appendChild(docMy);
docMy = document.createElement('div');
docMy.setAttribute("class","hide");
docMy.setAttribute("id","literature");
document.getElementsByClassName('content')[0].appendChild(docMy);

docMy = document.createElement('div');
docMy.setAttribute("id","footer");
document.getElementsByClassName('content')[0].appendChild(docMy);
docMy = document.createElement('p');
docMy.innerHTML = "</br></br>  Copyright 2017 by Roman Fedorov </br>Magistr  </br>";
document.getElementById('footer').appendChild(docMy);




sideBar.createMenuFrom(); // don't need path
webWikipedia.createFrameAndWiki();// can't use webcontent due to it's mailfunction // don't need path
literature.createLiteratureDiv();// don't need path



//document.getElementsByTagName('body')[0].style.visibility = "visible";

$('.navigation').click(function(){
  view.exactly($(this).attr('id'));
});

$(document).ready(function() {
  $(document.body).show("slow",goMP);
});

//path.join(__dirname, 'index.html')
//sedePlayer.loadNewSource();
var goMP = function () {
  sidePlayer.myPlayer();

  // here Post can be made!
  // do need actual path
  let pth = path.join(__dirname,"/");// means ./Media-Look/
  //console.log(pth);
  musicGalerie.musicForm(pth);
  
};
