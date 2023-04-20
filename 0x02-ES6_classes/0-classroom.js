export default class ClassRoom {
  _maxStudentsSize;

  constructor(maxStudentsSize) {
    // eslint-disable-next-line
    this._maxStudentsSize = maxStudentsSize;
  }

  get maxStudentsSize() {
    return this.maxStudentsSize;
  }
}
