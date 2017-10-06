//Vertex shader source code
         var vertCode =
            'attribute vec4 coordinates;' + 
            'uniform mat4 u_xformMatrix;' +
            'void main(void) {' +
               '  gl_Position = u_xformMatrix * coordinates;' +
            '}';
               
         //Create a vertex shader program object and compile it                
         var vertShader = gl.createShader(gl.VERTEX_SHADER);
         gl.shaderSource(vertShader, vertCode);
         gl.compileShader(vertShader);

/*===================scaling==========================*/
          
         var Sx = 1.0, Sy = 1.5, Sz = 1.0;
         var xformMatrix = new Float32Array([
            Sx,   0.0,  0.0,  0.0,
            0.0,  Sy,   0.0,  0.0,
            0.0,  0.0,  Sz,   0.0,
            0.0,  0.0,  0.0,  1.0  
         ]);
   
         var u_xformMatrix = gl.getUniformLocation(shaderProgram, 'u_xformMatrix');
         gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
