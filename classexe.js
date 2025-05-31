class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(second) {
    return new Vec(this.x + second.x, this.y + second.y)
  }
  minus(second) {
    return new Vec(this.x - second.x, this.y - second.y)

  }
}



let v1 = new Vec(3, 4);
let v2 = new Vec(1, 2);

console.log(v1.plus(v2));     // Vec { x: 4, y: 6 }
console.log(v1.minus(v2));    // Vec { x: 2, y: 2 }
console.log(v1.length);       // 5

