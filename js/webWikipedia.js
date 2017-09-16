exports.createFrameAndWiki = function () {
  //  iframe  webWikipedia
  //          add: change className onclick event
  //
  var webWikipedia = document.getElementById('webWikipedia');
      webWikipedia.style.height = "480px";
      webWikipedia.style.width = "90%";
      webWikipedia.style.margin = "auto";

  var iframeInside = document.createElement("iframe");
      iframeInside.setAttribute("src","https://en.wikipedia.org/wiki/User_story");
      iframeInside.setAttribute("width","100%");
      iframeInside.setAttribute("height","100%");

      webWikipedia.appendChild(iframeInside);
};
