export default class ClassRoom {
  constructor(maxStudentsSize) {
    this.maxStudentsSize = maxStudentsSize;
  }

  // eslint-disable-next-line
  get _maxStudentsSize() {
    return this.maxStudentsSize;
  }
}
