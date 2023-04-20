export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Define clone method using a Symbol
    const cloneMethod = Symbol('clone');
    this[cloneMethod] = function () {
      return new Car(this._brand, this._motor, this._color);
    };
  }

  cloneCar() {
    // Call the clone method defined using the Symbol
    const cloneMethod = Symbol.for('clone');
    return this[cloneMethod]();
  }
}
