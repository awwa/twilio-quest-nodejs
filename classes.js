class Materializer {
  activated = false;
  constructor(arg) { this.target = arg; }
  activate() { this.activated = true; }
  materialize() { 
    if (this.activated) {
      return this.target;
    } else {
      return undefined;
    }
  }
}
