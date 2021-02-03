import { Id } from "../src/common/models/Id";
import { Picture } from "../src/pictures/classes/Picture";
import { User } from "../src/common/models/User";
import { PictureModel } from "../src/pictures/models/picture.model";
let title = "Picture 1";
let title2 = "Picture 2";
let description = "Test Picture 1";
let description2 = "Test Picture 2";
let source = `${__dirname}/../assets/example/picture.png`;
let source2 = `${__dirname}/../assets/example2/picture2.png`;
let new_user = new User("Gabriel", "Castro", "test@gmail.com");
let user2 = new User("Gabriel", "Castro Muñoz", "test2@gmail.com");
let undefined_user = new User("","","")
let id = new Id("73f78175-6f2b-4532-9b05-a8478ebdd3e7");
let id2 = new Id();
let new_picture = new Picture(id, new_user, title, description, source);
let new_picture2 = new Picture(id2, new_user, title2, description2, source2);
let no_source_picture = new Picture(id, new_user, title, description, "");
let no_author_picture = new Picture(id, undefined_user, title, description, source);
let updated_picture = new Picture(
    id,
    new_user,
    title,
    description2,
    source
  );
  let new_controller = new PictureModel();
let sample ={new_picture, new_picture2,no_source_picture, no_author_picture, new_user, user2, id, id2, updated_picture, new_controller};

module.exports = sample; 


