//  literature
//          add: change className onclick event
//
exports.createLiteratureDiv = function () {
  // body...

    var literature = document.getElementById('literature');
        literature.style.width = "100%";
    var olForLiteracy = document.createElement('ol');
        literature.appendChild(olForLiteracy);
    createLiterSourcs("w3schools.com/css");
    createLiterSourcs("w3schools.com/DOM");
    createLiterSourcs("w3schools.com/Html");
    createLiterSourcs("Electron - git -documentation");
    createLiterSourcs("stackoverflow.com");
    createLiterSourcs("google.com");
    createLiterSourcs("YouDon'tKnowJS book");
    createLiterSourcs("Node.js - official documentation");
    createLiterSourcs("npm - official documentation");
    createLiterSourcs("Electron-packager - official documentation");
    createLiterSourcs("MSI - documentation");
    createLiterSourcs("Wikipedia - free encyclopedia");

    function createLiterSourcs( textToLi) {
          var li = document.createElement("li");
              li.setAttribute("class","itemsForOl");
              li.innerHTML = textToLi;
          olForLiteracy.appendChild(li);
    }
};
