class TargetingSolution {
  constructor(arg) {
    this.x = arg.x;
    this.y = arg.y;
    this.z = arg.z;
  };
  target() {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")";
  }

}
