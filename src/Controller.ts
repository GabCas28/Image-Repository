import { Picture } from "./Picture";

export class Controller {
  private pictureList: Picture[];
  constructor() {
    this.pictureList = [];
  }

  get [Symbol.toStringTag]() {
    return "Controller";
  }
  getPictureList(): Picture[] {
    return this.pictureList;
  }
  addPicture(picture: Picture): boolean {
    let result: boolean = picture.source ? true : false;
    this.pictureList.includes(picture)
      ? (result = false)
      : this.pictureList.push(picture);
    return result;
  }
