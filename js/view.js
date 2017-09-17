exports.exactly = function (number) {
        switch (number) {
          case "0":
          show("webWikipedia");
          hide("literature");
          break;
          case "1":
          hide("webWikipedia");
          show("literature");
          break;
          case "2":
          show("webWikipedia");
          show("literature");
          break;

        }
        function hide(updateText) {
                //jquery
                $(document.getElementById(updateText)).hide("slow");
                document.getElementById(updateText).className = "hide";
        };

        function show(updateText) {
                //jquery
                $(document.getElementById(updateText)).show("slow");
                document.getElementById(updateText).className = "visible";
        };
};
