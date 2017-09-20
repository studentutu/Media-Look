//TO DO:
//        create Tiles of posts
//              Title Music
exports.musicForm = function () {
  // body...
  let musDiv = document.getElementById("musicDiv");
      musDiv.style.width = "100%";

  let title = document.createElement('p');
      title.setAttribute('class','title');
      title.innerHTML = " Music Galerie ";
      musDiv.appendChild(title);
  //posts direct under 

};
