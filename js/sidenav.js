//Side navigation bar
//      Fixed
//          Wikipedia, Literature, Music, Video, Models, Galerie
exports.createMenuFrom = function () {
    let sidenav = document.getElementById('sidenav');
    let ulForMenu = document.createElement("ul");
        sidenav.appendChild(ulForMenu);
    createLiForMe("Wikipedia","0");
    createLiForMe("Literature","1");
    createLiForMe("Galerie","2");
    createLiForMe("Music","3");

    function createLiForMe(textToLi, id) {
        let li = document.createElement("li");
            li.setAttribute("class","navigation");
            li.innerHTML = textToLi;
            li.setAttribute("id",id);
        ulForMenu.appendChild(li);
    }
};
