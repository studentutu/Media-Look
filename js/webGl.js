var justPath;
exports.setPath = function (somePath) {
  justPath = somePath;
}

exports.createDDD = function (num,canvS) {
  let imp;
  switch (num) {
    case "1": imp = require("./PLainJSwithWebGl/dragAndRotate.js");
              imp.getWEBGLgo(canvS);
              break;
    case "2": imp = require("./PLainJSwithWebGl/3dCubeRotations.js");
              imp.getWEBGLgo(canvS);
              break;

  }
};
