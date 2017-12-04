//TO DO :
//        first comes div with displaModel
//            second comes div Galerie
//                  third comes all small Posts with title and Model
//                        when clicked - div displaModel showed and can be manupulated
//                              on every menu - hideAll()
var post = require('./Post.js');
exports.allImgAndPosts = function (actPath) {
  // body...
  let imgDiv = document.getElementById("models");
      imgDiv.style.width = "95%";

  let title = document.createElement('p');
      title.setAttribute('class','title');
      title.innerHTML = " Image Galerie ";
      imgDiv.appendChild(title);
  //posts direct under
  let text = "Imagine Dog out here!";
  let imgSrcMini = actPath +"media/webGL.png";

  // parent, (kind 0-Img, 1-Aud, 2-Vid,  3-DDD), src,imgsrc,title, text // 6
    post.createPost(imgDiv,0,"",imgSrcMini,"WebGl",text);
    text = "Go to Website of WebGL";
    imgSrcMini = actPath +"media/pic5.png";
    post.createPost(imgDiv,0,"",imgSrcMini,"Cool stuff",text);
    text = "Electron Logo";
    imgSrcMini = actPath +"media/electron.png";
    post.createPost(imgDiv,0,"",imgSrcMini,"Electron",text);

};
