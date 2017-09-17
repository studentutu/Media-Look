exports.exactly = function (number) {
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
