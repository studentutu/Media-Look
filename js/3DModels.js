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
  let imgSrcMini = actPath +"media/pic10.png";

  // parent, {kind 0-Img, 1-Aud, 2-Vid,  3-DDD}, src,imgsrc,title, text // 6
    post.createPost(DmodelsDiv,3,"",imgSrcMini,"Drag",text);
  //  text = "Not Here";
    text = "2";
    imgSrcMini = actPath +"media/pic11.png";
    post.createPost(DmodelsDiv,3,"",imgSrcMini,"Dynamic",text);

};
