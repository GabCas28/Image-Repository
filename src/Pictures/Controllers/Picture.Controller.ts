import { writeFile } from "fs";
import { Id } from "../../Common/Models/Id";
import { Picture } from "../Models/Picture";

export class Controller {
  private pictures: Picture[];

  get [Symbol.toStringTag]() {
    return "Controller";
  }
  constructor() {
    this.pictures = [];
  }

  public getPicture(id: Id): Picture {
    if (!this.searchById(id)) {
      throw new Error("Picture can't be found");
    }
    return this.searchById(id);
  }
  
  public uploadPicture(picture: Picture, data: Buffer): void {
    writeFile(picture.getSource(), data, this.handleError);
  }

  private handleError(err: any) {
    if (err) throw err;
  }

  public getPictures(): Picture[] {
    return [...this.pictures];
  }

  public updatePicture(picture: Picture): void {
    if (this.canBeAdded(picture)) {
      throw new Error("Picture can't be updated");
    }
    this.setPictures([picture, ...this.getFilteredPictureList(picture)]);
  }

  public addPicture(picture: Picture): void {
    if (!this.canBeAdded(picture)) {
      throw new Error("Picture can't be added");
    }
    this.setPictures(this.augmentedPictureList(picture));
  }

  public deletePicture(picture: Picture): void {
    if (!this.canBeDeleted(picture)) {
      throw new Error("Picture not found");
    }
    this.setPictures(this.getFilteredPictureList(picture));
  }

  private setPictures(pictureList: Picture[]): boolean {
    this.pictures = pictureList;
    return true;
  }

  private augmentedPictureList(picture: Picture): Picture[] {
    return [picture, ...this.getPictures()];
  }

  private getFilteredPictureList(picture: Picture): Picture[] {
    return this.getPictures().filter(
      (elem) => elem.getId() !== picture.getId()
    );
  }

  private canBeAdded(picture: Picture): boolean {
    return picture.isValid() && !this.isDuplicate(picture);
  }

  private canBeDeleted(picture: Picture): boolean {
    return this.isDuplicate(picture);
  }

  private isDuplicate(picture: Picture): boolean {
    return this.searchById(picture.getId()) ? true : false;
  }

  private searchById(id: Id): Picture {
    return this.getPictures().filter((e) => this.eqId(e.getId(), id))[0];
  }

  private eqId(e1: Id, e2: Id) {
    return e1 === e2;
  }
}
