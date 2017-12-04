var justPath;
let imp;
exports.setPath = function (somePath) {
  justPath = somePath;
}

exports.createDDD = function (num,canvS) {

  switch (num) {
    case "1": imp = require("./PLainJSwithWebGl/dragAndRotate.js");
              imp.getWEBGLgo(canvS);
              break;
    case "2": imp = require("./PLainJSwithWebGl/3dCubeRotations.js");
              imp.getWEBGLgo(canvS);
              break;

  }
};

exports.deleteProgram = function(num){

  switch (num) {
    case "1": imp = require("./PLainJSwithWebGl/dragAndRotate.js");
              imp.deleteThisProgram();
              break;
    case "2": imp = require("./PLainJSwithWebGl/3dCubeRotations.js");
              imp.deleteThisProgram();
              break;

  }
}
