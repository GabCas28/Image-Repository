import { Rating } from "./Rating";
import { Review } from "./Review";
import { User } from "./User";

export class Picture {
  author: User;
  title: String;
  description: String;
  source: String;
  reviews: Review[];
  ratings: Rating[];

  constructor(
    author: User,
    title: String,
    description: String,
    source: String
  ) {}
}
