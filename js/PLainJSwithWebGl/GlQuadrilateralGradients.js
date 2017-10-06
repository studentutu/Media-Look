exports.createDDD = function (canvS) {
    getWEBGLgo(canvS);
};	
function getWEBGLgo(canvas){
/* Step1: Prepare the canvas and get WebGL context */

         //var canvas = document.getElementById('my_Canvas');
         var gl = canvas.getContext('experimental-webgl');


/* Step2: Define the geometry and store it in buffer objects */

          var vertices = [
             -0.5,0.5,0.0,
             -0.5,-0.5,0.0,
             0.5,-0.5,0.0,
             0.5,0.5,0.0
          ];

          var indices = [1,2,3,3,1,0];
          var colors = [ 0,0,1, 1,0,0, 0,1,0, 0,0,0,];

         // Coord  buffer
         // Create a new buffer object
         var vertex_buffer = gl.createBuffer();
         // Bind an empty array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
         // Pass the vertices data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
         // Unbind the buffer
         gl.bindBuffer(gl.ARRAY_BUFFER, null);

        // Indecies buffer
        // Create an empty buffer object to store Index buffer
         var Index_Buffer = gl.createBuffer();
         // Bind appropriate array buffer to it
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
         // Pass the vertex data to the buffer
         gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
         // Unbind the buffer
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

         // Color buffer
         var color_buffer = gl.createBuffer ();
         gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
         // Unbind the buffer
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

/* Step3: Create and compile Shader programs */

//---------------------------------------------
         // Vertex shader source code

         //Color into vertShader and then apply to FragmentShader!!!
         var vertCode =
         'attribute vec3 coordinates;'+
         'attribute vec3 color;'+
         'varying vec3 vColor;'+

         'void main(void) {' +
            ' gl_Position = vec4(coordinates, 1.0);' +
            'vColor = color;'+
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
        'precision mediump float;'+
        'varying vec3 vColor;'+
        'void main(void) {'+
           'gl_FragColor = vec4(vColor, 1.0);'+
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

         // Bind vertex buffer object
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
         // Bind index buffer object
         gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
         // Get the attribute location
         var coord = gl.getAttribLocation(shaderProgram, "coordinates");

         // Point an attribute to the currently bound VBO
         /*

             Location − returned by the getAttribLocation().

             Size −  number of components per vertex X,Y,Z =3

             Type − It specifies the type of data. ! Float!

             Normalized − This is a Boolean value.  true, non-floating  is normalized to [0, 1];
             False, it is normalized to [-1, 1].

             Stride −  number of bytes between different vertex data elements,
             zero for default stride.

             Offset − It specifies the offset (in bytes)  from the beginning, offset = 0.

         */
         gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
         // Enable the attribute
         gl.enableVertexAttribArray(coord);

         //Next is color
         // bind the color buffer
         gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
         // get the attribute location
         var color = gl.getAttribLocation(shaderProgram, "color");
         // point attribute to the volor buffer object
         gl.vertexAttribPointer(color, 3, gl.FLOAT, false,0,0) ;
         // enable the color attribute
         gl.enableVertexAttribArray(color);


/* Step5: Drawing the required object (triangle) */

         // Clear the canvas
         gl.clearColor(0.9, 0.1, 0.1, 1); //  ( 0-1)

         // Enable the depth test
         gl.enable(gl.DEPTH_TEST);

         // Clear the color buffer bit
         gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

         // Set the view port
         gl.viewport(0,0,canvas.width,canvas.height);
         // Draw the triangle
              //If coordinates :
              //gl.drawArrays(gl.TRIANGLES, 0, 3);
              //gl.drawArrays(gl.POINTS, 0, 3)

              // If Indecies then
              gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);


}
