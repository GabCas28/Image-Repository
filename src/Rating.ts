import { User } from "./User";

export class Rating {
  author: User;
  value: Number;

  constructor(author: User, value: Number) {
    this.author = author;
    this.value = value;
  }

  toString() {
    return `${this.author} - Rating:${this.value}`;
  }
}
