class Add {
  // _a = 0;
  // _b = 0;

  set a(v) {
    this._a = v;
  }

  set b(v) {
    this._b = v;
  }

  calc() {
    return this._a + this._b;
  }
}


export default Add