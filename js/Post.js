//
// Universal for videos, music, img and text
// on click :
//           div  + click (hide whole);  Padding 25%  margin auto;
//                  .wholePost zIndex = 20;
var sidePlayer = require('./musicPlayer.js');
 exports.createPost = function (parent, kind, src,imgsrc,title, text) { // 0 img, 1 music , 2 video,3 DDDmodel

  // global div show();
       let miniPost = document.createElement("div");
           //miniPost.setAttribute("class","MiNIVis");
           miniPost.className = "MiNIVis";
           //
       let whole = document.createElement("div");
           whole.setAttribute("class","wholePost");
           whole.style.display= "none";
           //position: absolute;
           //top  -
           //left -
       let back = document.createElement("div");
           back.setAttribute("class","backOfWholePost");
           back.style.display = "none";
           //display : none;
           //position: absolute;
           //top  :0;
           //left :0;
           //background rgba(0,0,0,0.3);

           // somewhere
           //$(".backOfWholePost").click(function (){
           //       $(this).Parent.hide("slow",$(this).hide()); // hide wholePost, then immediatly hide back;
           //
           //
           //});
           whole.appendChild(back);
           miniPost.appendChild(whole);
           parent.appendChild(miniPost);

   if( kind === 0){
      //  miniPostimgPost();
   }
   if( kind === 1){
       miniPost.setAttribute("class", "miniPost audioPost");
       musicPost(miniPost, src, imgsrc,title,text);
   }


 }

function showPostThis() {

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
        miniPost.className = "MiNIVis";

        //Whole
        let divWhole =  document.createElement('img');
            divWhole.setAttribute("src",imgsrc);
            divWhole.setAttribute("class","WholeImg");
          //  divWhole.setAttribute("id",src);
        miniPost.childNodes[0].appendChild(divWhole);// -[ 1]
            tit = document.createElement('p');
            tit.setAttribute("class","wholeText");
            tit.innerHTML = text;
        miniPost.childNodes[0].appendChild(tit);
            divWhole.setAttribute("id",src);

            //let sourcPth = document.createElement("source");
            //console.log(src);
            //sourcPth.setAttribute("src",src);
            //sourcPth.setAttribute("type", "audio/mpeg");
            //divWhole.appendChild(sourcPth);
        miniPost.onclick  = function (){
          if(this.className =="MiNIVis"){
              //this.childNodes[0].childNodes[0].style.display = "block";// display back
              //this.childNodes[0].style.display = "block";  // display whole with text
              //this.childNodes[0].childNodes[1].style.display = "block";  // display wholeIMG with WHOLEtext
              this.setAttribute("class","miniInvis");
              //console.log("Fired Once");

              //this.childNodes[0].childNodes[1].setAttribute("id",sourc);
              //this.childNodes[0].onclick = function () {
              let sourc = this.childNodes[0].childNodes[1].id;

                if(sourc ==$('source').attr("src")){
                  document.getElementById('pButton').click();
                } else {
                  sidePlayer.loadNewSource(sourc);
                }

            } else{
              //this.childNodes[0].childNodes[0].style.display = "none";// display back
              //this.childNodes[0].style.display = "none";  // display whole with text
              //this.childNodes[0].childNodes[1].style.display = "none";  // display wholeIMG with WHOLEtext
              this.setAttribute("class","MiNIVis");
              let sourc = this.childNodes[0].childNodes[1].id;

                if(sourc ==$('source').attr("src")){
                  document.getElementById('pButton').click();
                } else {
                  sidePlayer.loadNewSource(sourc);
                }
                  
            }

          };


}

function imgPost() {

}
function videoPost() {

}
function DDDmodelPost() {

}
