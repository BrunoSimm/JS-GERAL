console.log(typeof Object)

console.log(typeof new Object)

class Produto {} /* Classes are in fact "special functions", 
and just as you can define function expressions and function declarations, 
the class syntax has two components: class expressions and class declarations  */
console.log(typeof Produto)

let Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  console.log(Rectangle.name)