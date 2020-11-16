import { User } from "./User";
import { Review } from "./Review";
import { Rating } from "./Rating";

export class Picture {
  private author: User;
  private title: String;
  private description: String;
  private source: String;
  private reviews: Review[];
  private ratings: Rating[];

  constructor(
    author: User,
    title: String,
    description: String,
    source: String
  ) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.source = source;
    this.reviews = [];
    this.ratings = [];
  }

  get [Symbol.toStringTag]() {
    return "Picture";
  }
  public isValid(): boolean {
    return this.hasSource();
  }
  private hasSource(): boolean {
    return this.source ? true : false;
  }
  public toString() {
    return `${this.author}:\n${this.title}\n${this.description.slice(
      0,
      80
    )}...\nSource:${this.source}`;
  }
}
