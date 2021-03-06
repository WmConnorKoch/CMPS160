var shader = null;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene);


  var idMatrix = new Matrix4();
  // Initialize shader
  shader = new Shader(gl, ASG3_VSHADER, ASG3_FSHADER);
  shader2 = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);


  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  shader.addAttribute("a_TexCoord");
  shader.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);


  shader2.addAttribute("a_Position");
  shader2.addAttribute("a_Color");

  // Add uniforms

  // Add uniforms
  //shader.addUniform("u_Sampler", "sampler2D", 0);
  shader2.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);


  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();


  var image = new Image();
  // Tell the browser to load an image
  image.src = 'objs/sky.jpg';

  // Register the event handler to be called on loading an image
  image.onload = function () {
    console.log("hello");
    var shape = new TexCube(shader, .25, .25, .5, image);
    scene.addGeometry(shape);
    if (image == null) image.onload;
  };
  
}
