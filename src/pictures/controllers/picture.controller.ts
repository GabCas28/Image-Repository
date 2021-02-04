import { Id } from '../../common/models/Id';
import { PictureModel } from '../models/picture.model';

let picture_controller = new PictureModel();

exports.listAll = (req: any, res: any) => {
	console.log('LIST ALL');
	res.status(200).send({ 'controller': picture_controller });
};

exports.getPicture = (req: any, res: any) => {
	console.log('GET PICTURE');
	res.status(200).send({ 'picture': picture_controller.getPicture(new Id(req.params.id)) });
};

exports.addPicture = (req: any, res: any) => {
	console.log('ADD PICTURE');
	picture_controller.addPicture(req.picture);
	res.status(201).send({ 'controller': picture_controller });
};

exports.patchPicture = (req: any, res: any) => {
	console.log('UPDATE PICTURE');
	picture_controller.updatePicture(req.picture);
	res.status(200).send({ 'controller': picture_controller });
};

exports.deletePicture = (req: any, res: any) => {
	console.log('DELETE PICTURE');
	picture_controller.deletePicture(req.picture);
	res.status(200).send({ 'controller': picture_controller });
};
exports.picture_controller = picture_controller;
