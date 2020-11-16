import { Picture } from "./Picture";

export class Controller {
  private pictures: Picture[];

  get [Symbol.toStringTag]() {
    return "Controller";
  }
  constructor() {
    this.pictures = [];
  }

  public getPictures(): Picture[] {
    return [...this.pictures];
  }

  public getPictureBySource(): Picture[] {
    return [...this.pictures];
  }

  public addPicture(picture: Picture): boolean {
    return this.canBeAdded(picture)
      ? this.setPictures(this.augmentedPictureList(picture))
      : false;
  }

  public deletePicture(picture: Picture): boolean {
    return this.canBeDeleted(picture)
      ? this.setPictures(this.filteredPictureList(picture))
      : false;
  }

  private setPictures(pictureList: Picture[]): boolean {
    this.pictures = pictureList;
    return true;
  }

  private augmentedPictureList(picture: Picture): Picture[] {
    return [picture, ...this.getPictures()];
  }

  private filteredPictureList(picture: Picture): Picture[] {
    return this.getPictures().filter((elem) => elem !== picture);
  }

  private canBeAdded(picture: Picture): boolean {
    return picture.isValid() && !this.isDuplicate(picture);
  }

  private canBeDeleted(picture: Picture): boolean {
    return this.isDuplicate(picture);
  }

  private isDuplicate(picture: Picture): boolean {
    return this.getPictures().includes(picture);
  }
}
