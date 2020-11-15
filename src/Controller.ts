import { Picture } from "./Picture";

export class Controller {
  private pictureList: Picture[];

  get [Symbol.toStringTag]() {
    return "Controller";
  }
  constructor() {
    this.pictureList = [];
  }

  public addPicture(picture: Picture): boolean {
    return this.canBeAdded(picture)
      ? this.setPictureList(this.augmentedPictureList(picture))
      : false;
  }

  public deletePicture(picture: Picture): boolean {
    return this.canBeDeleted(picture)
      ? this.setPictureList(this.filteredPictureList(picture))
      : false;
  }

  public getPictureList(): Picture[] {
    return this.pictureList;
  }

  private setPictureList(pictureList: Picture[]): boolean {
    this.pictureList = pictureList;
    return true;
  }


  private augmentedPictureList(picture: Picture): Picture[] {
    return [picture, ...this.pictureList];
  }

  private filteredPictureList(picture: Picture): Picture[] {
    return this.pictureList.filter((elem) => elem !== picture);
  }

  private canBeAdded(picture: Picture): boolean {
    return picture.isValid() && !this.isDuplicate(picture);
  }

  private canBeDeleted(picture: Picture): boolean {
    return this.isDuplicate(picture);
  }

  private isDuplicate(picture: Picture): boolean {
    return this.pictureList.includes(picture);
  }
}
