exports.exactly = function (number) { // 0 wiki, 1 literature, 2 Galerie, fix audioplayer

   var execute = {
    "0": function () {
      show("webWikipedia");
      hide("literature");
      hide("musicDiv");
    },
    "1": function () {
      hide("webWikipedia");
      show("literature");
      hide("musicDiv");
    },
    "2": function () {
      hide("webWikipedia");
      show("literature");
      show("musicDiv");
    },
    "3": function () {
      hide("webWikipedia");
      hide("literature");
      show("musicDiv");
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
    }
  }
  execute[number]();

/*
        switch (number) {
          case "0":
          show("webWikipedia");
          hide("literature");
          hide("musicDiv");
          break;
          case "1":
          hide("webWikipedia");
          show("literature");
          hide("musicDiv");
          break;
          case "2":
          show("webWikipedia");
          show("literature");
          hide("musicDiv");
          break;
          case "3":
          hide("webWikipedia");
          hide("literature");
          show("musicDiv");
          break;
          case "fix":
                if(document.getElementById("audioplayer").className === "hide"){show("audioplayer");}else{hide("audioplayer");}
          break;

        }
        */

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
