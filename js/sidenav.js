//Side navigation bar
//      Fixed
//          Wikipedia, Literature, Music, Video, Models, Galerie
exports.createMenuFrom = function () {
    let sidenav = document.getElementById('sidenav');
    let ulForMenu = document.createElement("ul");
        sidenav.appendChild(ulForMenu);
    createLiForMe("Home","homeBTN");
    createLiForMe("Wikipedia","0");
    createLiForMe("Literature","1");
    createLiForMe("All Posts","2");
    createLiForMe("Music","3");
    createLiForMe("Images","4");
    createLiForMe("Models 3D","5");
    createLiForMe("Video", "6");



    function createLiForMe(textToLi, id) {
        let li = document.createElement("li");
            li.setAttribute("class","navigation");
            li.innerHTML = textToLi;
            li.setAttribute("id",id);
        ulForMenu.appendChild(li);
    }
      {
        //Create fixed togle audio button
        let togl = document.createElement('div');
            togl.setAttribute("class","navigation");
            togl.innerHTML = "<h4>Audio Player</h4>";
            togl.style.position = "fixed";
            togl.style.bottom = "14px";
            togl.style.textAlign = "center";
            togl.setAttribute("id","fix");
        document.body.appendChild(togl);
      }
};
