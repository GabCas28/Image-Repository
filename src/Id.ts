export class Id {
  private id: String;

  get [Symbol.toStringTag]() {
    return "Id";
  }
  constructor(id?: String) {
    this.id = id ? id : this.generateId();
  }
  private generateId(): String {
    return `${Math.floor(Math.random() * 10 ** 16)}`;
  }
  valueOf() {
    return this.id;
  }
  toString() {
    return `${this.id}`;
  }
}
