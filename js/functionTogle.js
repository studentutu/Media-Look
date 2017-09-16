exports.hide = function (updateText) {
        //jquery
        $(document.getElementById(updateText)).hide("slow");
        document.getElementById(updateText).className = "hide";
};

exports.show = function (updateText) {
        //jquery
        $(document.getElementById(updateText)).show("slow");
        document.getElementById(updateText).className = "visible";
};
