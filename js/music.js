//TO DO:
//        create Tiles of posts
//              Title Music
var posts = require('./Post.js');

exports.musicForm = function (actPth) {
  // body...
  // actPth;//   .../Media-Look/
  let musDiv = document.getElementById("musicDiv");
      musDiv.style.width = "95%";
      //musDiv.style.height = "600px";

  let title = document.createElement('p');
      title.setAttribute('class','title');
      title.innerHTML = " Music Galerie ";
      musDiv.appendChild(title);
  //posts direct under
  let text = "Piano man by Billy Joel.";
  let mainSRC = "./media/piano.mp3";
  let imgSrcMini = actPth +"media/pic3.png";
  // parent, (kind 0-Img, 1-Aud, 2-Vid,  3-DDD), src,imgsrc,title, text

  posts.createPost(musDiv,1,mainSRC,imgSrcMini,"Piano Man",text);
        text = "LOL TITANIC";
        mainSRC = "./media/EMOTIONAL-TITANIC-FLUTE-DISTORTED.mp3";
        imgSrcMini = actPth+"media/pic4.png";
  // parent, (kind 0-Img, 1-Aud, 2-Vid,  3-DDD), src,imgsrc,title, text
  posts.createPost(musDiv,1,mainSRC,imgSrcMini,"Distorted",text);

};
