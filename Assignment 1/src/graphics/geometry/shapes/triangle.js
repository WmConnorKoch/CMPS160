/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, x, y, size, color) {
      super(shader);

      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;

      this.vertices = this.generateTriangleVertices(x, y, size, color);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(x, y, size, color) {
      var vertices = []
      console.log(color);
      var vertex1 = new Vertex(x-size, y-size, 0.0, color);
      var vertex2 = new Vertex(x+size, y-size, 0.0, color);
      var vertex3 = new Vertex( x,   y+size, 0.0, color);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      return vertices;
  }
}
