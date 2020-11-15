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
    if (this.canBeAdded(picture)) {
      this.pictureList.push(picture);
      return true;
    }
    return false;
  }

  canBeAdded(picture: Picture): boolean {
    let result: boolean;
    result = picture.isValid()
      ? this.pictureList.includes(picture)
        ? false
        : true
      : false;
    return result;
  }
}
