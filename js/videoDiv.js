//TO DO :
//      player style
//      player only one var
var posts = require('./Post.js');
var pthToWebGl = require('./webGl.js');

exports.videoForm = function (actPth) {
  // body...
  // actPth;//   .../Media-Look/
  pthToWebGl.setPath(actPth);

  let videoDiv = document.getElementById("video");
      videoDiv.style.width = "95%";
      //musDiv.style.height = "600px";

  let title = document.createElement('p');
      title.setAttribute('class','title');
      title.innerHTML = " Video Galerie ";
      videoDiv.appendChild(title);


  //posts direct under
  let text = "Small mp4 for preview.";
  let mainSRC = actPth + "media/small.mp4";
  let imgSrcMini = actPth +"media/quality_control_certified_1005x1008.png";
  // parent, (kind 0-Img, 1-Aud, 2-Vid,  3-DDD), src,imgsrc,title, text

  posts.createPost(videoDiv,2,mainSRC,imgSrcMini,"Video Small",text);
        text = "LOL mario";
        mainSRC = actPth + "media/Mario.mp4";
        imgSrcMini = actPth+"media/quality_control_certified_1005x1008.png";
  // parent, (kind 0-Img, 1-Aud, 2-Vid,  3-DDD), src,imgsrc,title, text
  posts.createPost(videoDiv,2,mainSRC,imgSrcMini,"Mario",text);

};
