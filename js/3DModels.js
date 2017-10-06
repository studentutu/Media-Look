var post = require('./Post.js');

exports.allImgAndPosts = function (actPath) {
  // body...
  let DmodelsDiv = document.getElementById("DDDmodel");
      DmodelsDiv.style.width = "95%";

  let title = document.createElement('p');
      title.setAttribute('class','title');
      title.innerHTML = "3d Models Galerie";
      DmodelsDiv.appendChild(title);
  //posts direct under
  let text = "1";
  let imgSrcMini = actPath +"media/quality_control_certified_1005x1008.png";

  // parent, {kind 0-Img, 1-Aud, 2-Vid,  3-DDD}, src,imgsrc,title, text // 6
    post.createPost(DmodelsDiv,3,"",imgSrcMini,"Number 1",text);
  //  text = "Not Here";
    text = "2";
    imgSrcMini = actPath +"css/volumeBTN.png";
    post.createPost(DmodelsDiv,3,"",imgSrcMini,"Number 2",text);

};
