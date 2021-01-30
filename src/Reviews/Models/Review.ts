import { User } from "../../Common/Models/User";

export class Review {
  author: User;
  title: String;
  body: String;
  votes: Number;

  constructor(author: User, title: String, body: String) {
    this.author = author;
    this.title = title;
    this.body = body;
    this.votes = 0;
  }

  toString(): String {
    return `${this.author}:\n${this.title}\n${this.body.slice(
      0,
      80
    )}...\nVotes:${this.votes}`;
  }
}
