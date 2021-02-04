import { User } from "../../common/models/User";
import { Id } from "../../common/models/Id";

export class Picture {
  private id: Id;
  private author: User;
  private title: String;
  private description: String;
  private source: String;

  constructor(
    id: Id,
    author: User,
    title: String,
    description: String,
    source: String
  ) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.description = description;
    this.source = source;
  }

  get [Symbol.toStringTag]() {
    return "Picture";
  }

  public isValid(): boolean {
    return this.hasSource();
  }

  public getId(): Id {
    return this.id;
  }

  private hasSource(): boolean {
    return this.source ? true : false;
  }

  public getSource(): string {
    return this.source.toString();
  }
  public toString() {
    return `${this.author}:\n${this.title}\n${this.description.slice(
      0,
      80
    )}...\nSource:${this.source}`;
  }
}
