//
// Universal for videos, music, img and text
// on click :
//           div  + click (hide whole);  Padding 25%  margin auto;
//                  .wholePost zIndex = 20;

var sidePlayer = require('./musicPlayer.js');
var whole = document.createElement("div");
    whole.setAttribute("class","wholePost");
    whole.style.display= "none";

var back = document.createElement("div");
    back.setAttribute("class","backOfWhole");
    back.style.display = "none";

    //control by id!
    document.body.appendChild(whole);
    document.body.appendChild(back);
var listOfPosts = [];
var listOfTexts = [];
var iterPost =0;


var webGlGo = require('./webGl.js');
var canvS = document.createElement("canvas");
    canvS.setAttribute("width","400px");
    canvS.setAttribute("height","400px");
    canvS.setAttribute("display","none");
    //canvS.setAttribute("position","fixed");
    //canvS.className ="hide";
    canvS.setAttribute("id","cnv");
    //canvS.setAttribute("top","15%");
    //canvS.setAttribute("left","20%");


 exports.createPost = function (parent, kind, src,imgsrc,title, text) { // 0 img, 1 music , 2 video,3 DDDmodel

  // global div show();
  // parent is different for Music / Audio/ Models/Image
       let miniPost = document.createElement("div");
           miniPost.className = "MiNIVis"; // need this!
           parent.appendChild(miniPost);

   if( kind === 0){
       imgPost(miniPost,imgsrc,title,text);
   }
   if( kind === 1){
       musicPost(miniPost, src, imgsrc,title,text);
   }
   if (kind ===2 ){
      // miniPostVideo
   }
   if (kind ===3 ){
      // DDDmodelPost

      DDDmodelPost(miniPost, src, imgsrc, title, text);
   }


 }

function musicPost( miniPost,src,imgsrc, miniTitle,text) {
        let divImg = document.createElement('img');
            divImg.setAttribute("src",imgsrc);
            divImg.setAttribute("class","miniImg");
        miniPost.appendChild(divImg);
        let tit = document.createElement("p");
            tit.setAttribute("class","miniTitle");
            tit.innerHTML = miniTitle;
        miniPost.appendChild(tit);
        miniPost.setAttribute("id",src);

        miniPost.onclick  = function (){
              let sourc = this.id;
                if(sourc ==$('source').attr("src")){
                  document.getElementById('pButton').click();
                } else {
                  sidePlayer.loadNewSource(sourc);
                }
          };
}

function imgPost( miniPost,imgsrc, miniTitle,text) {
  let minImg = document.createElement('img');
      minImg.setAttribute("class","miniImg");
      minImg.setAttribute("src",imgsrc);
  miniPost.appendChild(minImg);// 0
      minImg.zIndex = 100 + iterPost;
      iterPost++;

  let tit = document.createElement("p");
      tit.setAttribute("class","miniTitle");
      tit.innerHTML = miniTitle;
  miniPost.appendChild(tit);//1

  let smth = document.createElement("div");
      smth.setAttribute("class","DivWhole");

      minImg =  document.createElement('img');
      minImg.setAttribute("src",imgsrc);
      minImg.setAttribute("class","WholeImg");

      tit = document.createElement('p');
      tit.setAttribute("class","wholeText");
      tit.innerHTML = text;
      smth.appendChild(minImg);
      smth.appendChild(tit);
      listOfPosts.push(smth);

    miniPost.onclick = function () {
      let DivWhole = listOfPosts[(this.childNodes[0].zIndex) - 100];

          whole.appendChild(DivWhole);
          $(back).show("fast");
          $(whole).show("slow");
    }
    back.onclick = function () {
       whole.removeChild(whole.childNodes[0]);
       $(whole).hide("fast");
       $(back).hide("slow");
    }

}
function videoPost( miniPost,src,imgsrc, miniTitle,text) {

}
function DDDmodelPost( miniPost,src,imgsrc, miniTitle,text) {
  let minImg = document.createElement('img');
      minImg.setAttribute("class","miniImg");
      minImg.setAttribute("src",imgsrc);
  miniPost.appendChild(minImg);// 0

  let tit = document.createElement("p");
      tit.setAttribute("class","miniTitle");
      tit.innerHTML = miniTitle;
  miniPost.appendChild(tit);//1

  //without a source for a while
  //without a text for a while.
  // withoit logic for a  while


    miniPost.onclick = function () {

      	 if(miniPost.className == "MiNIVis"){

           miniPost.appendChild(canvS);
           canvS.style.display ="none";
           $(miniPost.childNodes[1]).hide("slow");
           $(miniPost.childNodes[0]).hide("slow",function () {
             $(canvS).show("slow",function () {

               miniPost.className = "miniInvis";
             });
           });


      	     //miniPost.childNodes[0].style.display = "none";
      	     //miniPost.childNodes[1].style.display = "none";
           webGlGo.createDDD(canvS);
      	   } else {
	          $(canvS).hide("slow", function () {
	               miniPost.removeChild(canvS);
	          });
            miniPost.className ="MiNIVis";
            $(miniPost.childNodes[0]).show("slow");
            $(miniPost.childNodes[1]).show("slow");
			      //miniPost.childNodes[0].style.display = "inline-block";
      			//miniPost.childNodes[1].style.display = "inline-block";
      		}
    };


}
