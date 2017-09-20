//
// Universal for videos, music, img and text
// on click :
//           div  + click (hide whole);  Padding 25%  margin auto;
//                  .wholePost zIndex = 20;
 exports.createPost = function (kind, src,imgsrc, width,height,title, text) { // 0 img, 1 music , 2 video,3 DDDmodel

  // global div show();
       let miniPost = document.createElement("div");
           miniPost.setAttribute("class","miniPost");
           //
       let whole = document.createElement("div");
           whole.setAttribute("class","wholePost");
           //display : none;
           //position: absolute;
           //top  -
           //left -
       let back = document.createElement("div");
           back.setAttribute("class","backOfWholePost");
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

   if( kind===0){
      //  miniPostimgPost();
   }
   if( kind === 1){
       musicPost(miniPost, src, imgsrc, width,height,title,text);
   }


 }

function showPostThis() {

}
function musicPost( miniPost,src,imgsrc, width,height, miniTitle,text) {

}

function imgPost() {

}
function videoPost() {

}
function DDDmodelPost() {

}
