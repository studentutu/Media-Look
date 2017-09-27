exports.createDDD = function (canvS) {
    getWEBGLgo(canvS);
};
function getWEBGLgo(canvas){
/* Step1: Prepare the canvas and get WebGL context */

         //var canvas = document.getElementById('my_Canvas');
         var gl = canvas.getContext('experimental-webgl');


         /* Step2: Define the geometry and store it in buffer objects */

         var vertices = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5,];

         // Create a new buffer object
         var vertex_buffer = gl.createBuffer();

         // Bind an empty array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         // Pass the vertices data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

         // Unbind the buffer
         gl.bindBuffer(gl.ARRAY_BUFFER, null);


/* Step3: Create and compile Shader programs */

//---------------------------------------------
         // Vertex shader source code
         var vertCode =
            'attribute vec2 coordinates;' +
            'void main(void) {' +
            ' gl_Position = vec4(coordinates,0.0, 1.0);' +
            '}';

         //Create a vertex shader object
         var vertShader = gl.createShader(gl.VERTEX_SHADER);
         //Attach vertex shader source code
         gl.shaderSource(vertShader, vertCode);
         //Compile the vertex shader
         gl.compileShader(vertShader);
//-----------------------------------------------


//-----------------------------------------------
        //Fragment shader source code
         var fragCode =
         'void main(void) {' +
         'gl_FragColor = vec4(0.0, 0.0, 0.0, 0.9);' +
         '}';
         // Create fragment shader object
         var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
         // Attach fragment shader source code
         gl.shaderSource(fragShader, fragCode);
         // Compile the fragment shader
         gl.compileShader(fragShader);
//------------------------------------------------

         // Create a shader program object to store combined Vertex and Frag program
         var shaderProgram = gl.createProgram();
         // Attach a vertex shader
         gl.attachShader(shaderProgram, vertShader);
         // Attach a fragment shader
         gl.attachShader(shaderProgram, fragShader);
         // Link both programs
         gl.linkProgram(shaderProgram);
         // Use the combined shader program object
         gl.useProgram(shaderProgram);


/* Step 4: Associate the shader programs to buffer objects */

         //Bind vertex buffer object
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         //Get the attribute location
         var coord = gl.getAttribLocation(shaderProgram, "coordinates");

         //point an attribute to the currently bound VBO
         gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

         //Enable the attribute
         gl.enableVertexAttribArray(coord);


/* Step5: Drawing the required object (triangle) */

         // Clear the canvas
         gl.clearColor(0.9, 0.1, 0.1, 1); //  ( 0-1)

         // Enable the depth test
         gl.enable(gl.DEPTH_TEST);

         // Clear the color buffer bit
         gl.clear(gl.COLOR_BUFFER_BIT);

         // Set the view port
         gl.viewport(0,0,canvas.width,canvas.height);
         // Draw the triangle
         gl.drawArrays(gl.TRIANGLES, 0, 3);
}


// set  global objects
/*
var gl =null;
var vertexPositionBuffer=null;
var shaderProgram =null;
var aVertexPosition = null;

function getWEBGLgo(canvS){
  var canvas = canvS;
  initGL(canvas);
  initBuffers();
  initShaders();
  //black sreen
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  setInterval(drawScene, 15);

}

// 1. very good and stable
 function initGL(canvas) {
   try {
     gl = canvas.getContext("experimental-webgl");
     gl.viewportWidth = canvas.width;
     gl.viewportHeight = canvas.height;
   } catch(e) {
   }
   if (!gl) {
     alert("Could not initialise WebGL, sorry :-(");
   }
 }

 // 2. very good even with points
 function initBuffers() {
   //Create Buffer Vertices
   vertexPositionBuffer = gl.createBuffer();

   //Bind to array_buffer
   gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);

   // add vertices
   var vertices = [
        1.0,  1.0,
       -1.0,  1.0,
        1.0, -1.0,
       -1.0, -1.0,
   ];

   // enter vertices to current array buffer
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
   vertexPositionBuffer.itemSize = 2;
   vertexPositionBuffer.numItems = 4;
   // Unbind the buffer
   gl.bindBuffer(gl.ARRAY_BUFFER, null);
 }

// 3. shaders ??????????????????????????????????????????????????????????????????
 function initShaders() {
   var fragmentShader = getShader(gl, "shader-fs");
   var vertexShader = getShader(gl, "shader-vs");
   shaderProgram = gl.createProgram();
   gl.attachShader(shaderProgram, vertexShader);
   gl.attachShader(shaderProgram, fragmentShader);
   gl.linkProgram(shaderProgram);
   if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
     alert("Could not initialise shaders");
   }
   gl.useProgram(shaderProgram);
   aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");
   gl.enableVertexAttribArray(aVertexPosition);
   aPlotPosition = gl.getAttribLocation(shaderProgram, "aPlotPosition");
   gl.enableVertexAttribArray(aPlotPosition);
 }


 function getShader(gl, id) {
   var shaderScript = document.getElementById(id);
   if (!shaderScript) {
     return null;
   }
   var str = "";
   var k = shaderScript.firstChild;
   while (k) {
     if (k.nodeType == 3) {
       str += k.textContent;
     }
     k = k.nextSibling;
   }
   var shader;
   if (shaderScript.type == "x-shader/x-fragment") {
     shader = gl.createShader(gl.FRAGMENT_SHADER);
   } else if (shaderScript.type == "x-shader/x-vertex") {
     shader = gl.createShader(gl.VERTEX_SHADER);
   } else {
     return null;
   }
   gl.shaderSource(shader, str);
   gl.compileShader(shader);
   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
     alert(gl.getShaderInfoLog(shader));
     return null;
   }
   return shader;
 }

 var centerOffsetX = 0;
 var centerOffsetY = 0;
 var zoom;
 var zoomCenterX;
 var zoomCenterY;

 var baseCorners = [
     [ 0.7,  1.2],
     [-2.2,  1.2],
     [ 0.7, -1.2],
     [-2.2, -1.2],
 ];
 function drawScene() {
   gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
   gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
   gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffer);
   gl.vertexAttribPointer(aVertexPosition, vertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
   var plotPositionBuffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, plotPositionBuffer);
   var cornerIx;
   corners = [];
   for (cornerIx in baseCorners) {
     x = baseCorners[cornerIx][0];
     y = baseCorners[cornerIx][1];
     corners.push(x / zoom + centerOffsetX);
     corners.push(y / zoom + centerOffsetY);
   }
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(corners), gl.STATIC_DRAW);
   gl.vertexAttribPointer(aPlotPosition, 2, gl.FLOAT, false, 0, 0);
   gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
   gl.deleteBuffer(plotPositionBuffer)
   zoom *= 1.02;
   document.getElementById("zoomOutput").value = zoom;
   if (centerOffsetX != zoomCenterX) {
     centerOffsetX += (zoomCenterX - centerOffsetX) / 20;
   }
   document.getElementById("centerOffsetXOutput").value = centerOffsetX;
   if (centerOffsetY != zoomCenterY) {
     centerOffsetY += (zoomCenterY - centerOffsetY) / 20;
   }
   document.getElementById("centerOffsetYOutput").value = centerOffsetY;
 }
 function resetZoom() {
   zoom = 1.0;
   zoomCenterX = parseFloat(document.getElementById("zoomCenterXInput").value);
   zoomCenterY = parseFloat(document.getElementById("zoomCenterYInput").value);
 }
*/
