//
// Universal for videos, music, img and text
// on click :
//           div  + click (hide whole);  Padding 25%  margin auto;
//                  .wholePost zIndex = 20;

var sidePlayer = require('./musicPlayer.js');
var videoPlayer = require('./videoPlayer.js');


var wholeVideoPlayer = videoPlayer.myPlayer();
    wholeVideoPlayer.setAttribute("width","400px");
    wholeVideoPlayer.setAttribute("height","400px");
    wholeVideoPlayer.setAttribute("display","none");
    wholeVideoPlayer.setAttribute("class","WholeImg");
var listVideos = [];
    iterVideo = 0;

// needed for Image Posts
var whole = document.createElement("div");
    whole.setAttribute("class","wholePost");
    whole.style.display= "none";

// needed for Image Posts
var back = document.createElement("div");
    back.setAttribute("class","backOfWhole");
    back.style.display = "none";

    //control by id!
    document.body.appendChild(whole);
    document.body.appendChild(back);
var listOfPosts = [];
var iterPost = 0;


var webGlGo = require('./webGl.js');
var listOfDDD = [];
var iterDDD =0;
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
   if (kind === 2){
      // miniPostVideo
      videoPost(miniPost, src, imgsrc, title, text);
   }
   if (kind === 3){
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

      //needed for multiple posts!
      // set index = 100+ IterPost
      // IterPost++
      //need IterPost == zIndex - 100;
      listOfPosts.push(smth);

    miniPost.onclick = function () {
      let DivWhole = listOfPosts[(this.childNodes[0].zIndex) - 100];

          whole.appendChild(DivWhole);
          back.onclick = function () {
             whole.removeChild(whole.childNodes[0]);
             $(whole).hide("fast");
             $(back).hide("slow");
          }
          $(back).show("fast");
          $(whole).show("slow");
    }


}

function videoPost( miniPost,src,imgsrc, miniTitle,text) {
  let minImg = document.createElement('img');
      minImg.setAttribute("class","miniImg");
      minImg.setAttribute("src",imgsrc);
  miniPost.appendChild(minImg);// 0
      minImg.zIndex = 100 + iterVideo;
      iterVideo++;

  let tit = document.createElement("p");
      tit.setAttribute("class","miniTitle");
      tit.innerHTML = miniTitle;
  miniPost.appendChild(tit);//1

  let smth = document.createElement("div");
      smth.setAttribute("class","DivWhole");

      // create here Video player !
      // put Video playe inside minImg

      let tmpElem = document.createElement("source");
          tmpElem.setAttribute('src',src);
          tmpElem.setAttribute('type',"video/mp4");


      // Do not touch
      tit = document.createElement('p');
      tit.setAttribute("class","wholeText");
      tit.innerHTML = text;
      smth.appendChild(tmpElem);
      smth.appendChild(tit);

      //needed for multiple posts!
      // set index = 100+ IterPost
      // IterPost++
      //need IterPost == zIndex - 100;
      listVideos.push(smth);

    miniPost.onclick = function () {
      // Minipost has 0- mini imge with i --> whole [0]source!

      let Diole = listVideos[(this.childNodes[0].zIndex) - 100];
          let tmpElemSource =  Diole.childNodes[0].cloneNode(false);
          wholeVideoPlayer.appendChild(tmpElemSource);
          wholeVideoPlayer.load();
          whole.appendChild(wholeVideoPlayer);
          whole.appendChild(Diole.childNodes[1].cloneNode(false));

          back.onclick = function () {
             wholeVideoPlayer.removeChild(wholeVideoPlayer.childNodes[0]);
             $(whole).hide("fast");
             $(back).hide("slow");
             whole.removeChild(whole.childNodes[0]);
             whole.removeChild(whole.childNodes[0]);
          }
          $(back).show("fast");
          $(whole).show("slow", function () {
              $(wholeVideoPlayer).show();
          });


    }

}

function DDDmodelPost( miniPost,src,imgsrc, miniTitle,text) {
  let minImg = document.createElement('img');
      minImg.setAttribute("class","miniImg");
      minImg.setAttribute("src",imgsrc);
  miniPost.appendChild(minImg);// 0
      minImg.zIndex = 100 + iterDDD;
      iterDDD++;

  let tit = document.createElement("p");
      tit.setAttribute("class","miniTitle");
      tit.innerHTML = miniTitle;
  miniPost.appendChild(tit);//1

  //without a source for a while
  //without a text for a while.
  // withoit logic for a  while
  let tmpElem = text;


      //needed for multiple posts!
      // set index = 100+ IterPost
      // IterPost++
      //need IterPost == zIndex - 100;
      listOfDDD.push(tmpElem);


    miniPost.onclick = function () {
        miniPost = this;
      	 if(miniPost.className == "MiNIVis"){

           miniPost.appendChild(canvS);
           canvS.style.display ="none";
           $(miniPost.childNodes[1]).hide("slow");
           $(miniPost.childNodes[0]).hide("slow",function () {
             $(canvS).show("slow",function () {

               miniPost.className = "miniInvis";
             });
           });

          //Starts the WebGl content
      	     //miniPost.childNodes[0].style.display = "none";
      	     //miniPost.childNodes[1].style.display = "none";
           webGlGo.createDDD(listOfDDD[miniPost.childNodes[0].zIndex-100],canvS);
      	   } else {
             //Ends the WebGL content
	          $(canvS).hide("slow", function () {
	               miniPost.removeChild(canvS);
                 //webGlGo.deleteProgram(listOfDDD[miniPost.childNodes[0].zIndex-100]);
	          });

            miniPost.className ="MiNIVis";
            $(miniPost.childNodes[0]).show("slow");
            $(miniPost.childNodes[1]).show("slow");
			      //miniPost.childNodes[0].style.display = "inline-block";
      			//miniPost.childNodes[1].style.display = "inline-block";
      		}
    };



}
