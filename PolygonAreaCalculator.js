class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set_width(setValW) {
    this.width = setValW;
  }
  set_height(setValH) {
    this.height = setValH;
  }
  get_area() {
    let area = this.width * this.height;
    return area;
  }
  get_perimeter() {
    let perimeter = 2 * this.width + 2 * this.height;
    return perimeter;
  }
  get_diagonal() {
    let diagonal = (this.width ** 2 + this.height ** 2) ** 0.5;
    return diagonal;
  }

  get_picture() {
    let lines = "";
    if ((this.width > 50) | (this.height > 50)) {
      return "Too big for picture.";
    } else {
      for (let h = 0; h < this.height; h++) {
        let line = "";
        for (let w = 0; w < this.width; w++) {
          line += "*";
        }
        lines += `${line} \n`;
      }
      return lines;
    }
  }
  get_amount_inside(shapeArg) {
    return Math.trunc(this.get_area() / shapeArg.get_area());
  }
}

class Square extends Rectangle {
  constructor(side) {
    super();
    this.side = side;
    this.height = side;
    this.width = side;
  }

  set_side(setValS) {
    this.side = setValS;
    this.height = setValS;
    this.width = setValS;
  }
}

let rect = new Rectangle(10, 5);
console.log(rect.get_area());
rect.set_height(3);
console.log(rect.get_perimeter());
console.log(rect);
console.log(rect.get_picture());

let sq = new Square(9);
console.log(sq.get_area());
sq.set_side(4);
console.log(sq.get_diagonal());
console.log(sq);
console.log(sq.get_picture());

rect.set_height(8);
rect.set_width(16);
console.log(rect.get_amount_inside(sq));
