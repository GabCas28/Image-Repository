import { Id } from '../../common/models/Id';
import { User } from '../../common/models/User';
import { Picture } from '../classes/Picture';
let PC = require('../controllers/picture.controller')
exports.parsePicture = (req: any, res: any, next: any) => {
    let parsed_Id = (req.body.id) ? new Id(req.body.id.id) : new Id();

    let parsed_picture = new Picture(parsed_Id, req.author, req.body.title, req.body.description, req.body.source);
    if (parsed_picture.isValid()){
        console.log("PICTURE IS VALID")
        req.picture = parsed_picture
        next()
    }else{
        res.status(400).send({'error': 'Picture not Valid'})
    }
};

exports.parseAuthor = (req: any, res: any, next: any) => {
    if (hasAuthor(req)) {
        console.log("AUTHOR PARSED")
        res.author = new User(req.body.author.name, req.body.author.surname, req.body.author.email);
        next();
    } else{
        res.status(400).send({'error': 'Author not Valid'})
    }
};

let hasAuthor = (req: any) => {
    return req.body.author && req.body.author.name && req.body.author.surname && req.body.author.email ? true : false;
}

exports.findPicture = (req: any, res: any, next: any) => {
    if (req.params.id && PC.picture_controller.searchById(new Id(req.params.id))) {
        console.log("PICTURE FOUND")
        req.picture = PC.picture_controller.getPicture(new Id(req.params.id))
        next();
    } else{
        res.status(404).send({'error': 'Picture not Found'})
    }
};
