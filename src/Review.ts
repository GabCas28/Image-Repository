import { User } from "./User";

export class Review {
  author: User;
  title: String;
  body: String;
  votes: Number;
  
  constructor(author: User, title: String, body: String) {}
}
