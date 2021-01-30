import {
  version as uuidVersion,
  validate as uuidValidate,
  v4 as uuid_v4,
} from "uuid";

export class Id {
  private id: string;

  get [Symbol.toStringTag]() {
    return "Id";
  }
  constructor(id?: string) {
    if (id) {
      this.validateId(id);
      this.checkVersion(id);
    }
    this.id = id ? id : this.generateId();
  }
  private generateId(): string {
    return uuid_v4();
  }
  private validateId(str: string): void {
    if (!uuidValidate(str)) {
      throw new Error("Invalid Id");
    }
  }
  private checkVersion(str: string): void {
    if (uuidVersion(str) != 4) {
      throw new Error("Invalid UUID version");
    }
  }
  toString() {
    return `${this.id}`;
  }
}
