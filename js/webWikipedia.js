exports.createFrameAndWiki = function () {
  //  iframe  webWikipedia
  //      Title  iFrame Footer
  //

  let webWikipedia = document.getElementById('webWikipedia');
      webWikipedia.style.height = "400px";
      webWikipedia.style.width = "90%";
      webWikipedia.style.margin = "auto";
  let title = document.createElement('p');
      title.setAttribute('class','title');
      title.setAttribute("display","block");
      title.innerHTML = " Wikipedia ";
      webWikipedia.appendChild(title);

  let iframeInside = document.createElement("iframe");
      iframeInside.setAttribute("width","100%");
      iframeInside.setAttribute("height","90%");
      iframeInside.setAttribute("src","https://en.wikipedia.org/wiki/User_story");

      webWikipedia.appendChild(iframeInside);
};
