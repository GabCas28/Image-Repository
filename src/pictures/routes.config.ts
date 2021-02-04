const PicturesController = require('./controllers/picture.controller.ts');
const PictureMiddleware = require('./middleware/picture.middleware')	

exports.routesConfig = function(app: any) {
	app.get('/pictures', [
		PicturesController.listAll
	]);
	app.get('/pictures/:id', [
		PictureMiddleware.findPicture,
		PicturesController.getPicture
	]);
	app.post('/pictures', [
		PictureMiddleware.parseAuthor,
		PictureMiddleware.parsePicture,
		PicturesController.addPicture
	]);
	app.patch('/pictures/:id', [
		PictureMiddleware.parseAuthor,
		PictureMiddleware.parsePicture,
		PictureMiddleware.findPicture,
		PicturesController.patchPicture
	]);
	
	app.delete('/pictures/:id', [
		PictureMiddleware.findPicture,
		PicturesController.deletePicture
	]);
};
