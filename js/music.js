//TO DO:
//        create Tiles of posts
//              Title Music
var posts = require('./Post.js');
var pth;
exports.musicForm = function (actPth) {
  // body...
      pth = actPth;//   .../Media-Look/
  let musDiv = document.getElementById("musicDiv");
      musDiv.style.width = "95%";
      musDiv.style.height = "600px";

  let title = document.createElement('p');
      title.setAttribute('class','title');
      title.innerHTML = " Music Galerie ";
      musDiv.appendChild(title);
  //posts direct under
  let text = "Piano man by Billy Joel.";
  posts.createPost(musDiv,1,"./media/piano.mp3",pth +"media/quality_control_certified_1005x1008.png","Piano Man",text); // parent, (kind 0-Img, 1-Aud, 2-Vid,  3-DDD), src,imgsrc,title, text
    //  text = "LOL TITANIC";
  //posts.createPost(musDiv,1,pth +"media/EMOTIONAL-TITANIC-FLUTE-DISTORTED.mp3",pth+"media/quality_control_certified_1005x1008.png","Distorted",text); // parent, (kind 0-Img, 1-Aud, 2-Vid,  3-DDD), src,imgsrc,title, text

};
