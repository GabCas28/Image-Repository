import { Picture } from "./Picture";

export class Controller {
  
  constructor() {}

  get [Symbol.toStringTag]() {
    return "Controller";
  }

  listPictures(): Picture[] {
    return [];
  }
}
