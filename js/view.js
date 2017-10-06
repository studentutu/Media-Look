exports.exactly = function (number) { // 0 wiki, 1 literature, 2 Galerie, fix audioplayer

   var execute = {
    "0": function () {
      show("webWikipedia");
      hide("literature");
      hide("musicDiv");
      hide("models");
      hide("DDDmodel");
      hide("video");
    },
    "1": function () {
      hide("webWikipedia");
      show("literature");
      hide("musicDiv");
      hide("models");
      hide("DDDmodel");
      hide("video");
    },
    "2": function () {
      hide("webWikipedia");
      show("literature");
      show("musicDiv");
      hide("models");
      hide("DDDmodel");
      hide("video");
    },
    "3": function () {
      hide("webWikipedia");
      hide("literature");
      show("musicDiv");
      hide("models");
      hide("DDDmodel");
      hide("video");
    },
    "4": function () {
      hide("webWikipedia");
      hide("literature");
      hide("musicDiv");
      show("models");
      hide("DDDmodel");
      hide("video");
    },
    "5": function () {
      hide("webWikipedia");
      hide("literature");
      hide("musicDiv");
      hide("models");
      show("DDDmodel");
      hide("video");
    },
    "6": function () {
      hide("webWikipedia");
      hide("literature");
      hide("musicDiv");
      hide("models");
      hide("DDDmodel");
      show("video");
    },
    "fix": function () {
      if (document.getElementById("audioplayer").className === "hide"){
          show("audioplayer");
      } else {  hide("audioplayer");hide("volumeBar");}
    },
    "homeBTN": function () {
           show("footer");
           hide("webWikipedia");
           hide("literature");
           hide("musicDiv");
           hide("models");
           hide("DDDmodel");
           hide("video");
    }
  }

  //Excepts not only nubmers!!
  execute[number]();

        function hide(id) {

                //jquery
                $(document.getElementById(id)).hide("slow");
                document.getElementById(id).className = "hide";
        };

        function show(id) {
          
                //jquery
                $(document.getElementById(id)).show("slow");
                document.getElementById(id).className = "visible";
        };
};
