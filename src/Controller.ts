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
    return this.canBeAdded(picture)
      ? this.pictureList.push(picture)
        ? true
        : false
      : false;
  }

  canBeAdded(picture: Picture): boolean {
    let conditions: boolean[] = [
      picture.isValid(),
      this.isNotDuplicate(picture),
    ];
    return !conditions.includes(false);
  }

  isNotDuplicate(picture: Picture): boolean {
    return !this.pictureList.includes(picture);
  }
}
