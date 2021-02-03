import { assert, expect } from 'chai';
import { readFile } from 'fs';
import { PictureModel } from '../src/pictures/models/picture.model';
const samples = require('./samples');

describe('Unit Tests Controller.ts', function() {
  
	let id = samples.id;
	let id2 = samples.id2;
	let new_picture = samples.new_picture;
	let new_picture2 = samples.new_picture2;
	let no_source_picture = samples.no_source_picture;
  let updated_picture = samples.updated_picture;
  
	describe(`Load source file: ${__dirname}/../src/Controller.ts`, function() {
		it('Should be loaded', function() {
			assert.ok(PictureModel, 'Not loaded');
		});
	});

	describe('Create Controller Instance', function() {
		it('Should create Controller correctly', function() {
			let new_controller = new PictureModel();
			expect(new_controller).to.be.a('Controller');
		});
	});

	describe('Controller addPicture', function() {
		it('Should be callable', function() {
			let new_controller = new PictureModel();
			assert.doesNotThrow(() => new_controller.addPicture(new_picture), Error);
		});

		it('Should throw error for a Picture with no source', function() {
			let new_controller = new PictureModel();
			assert.throw(() => new_controller.addPicture(no_source_picture), Error, "Picture can't be added");
		});

		it('Should not add Pictures with no source', function() {
			let new_controller = new PictureModel();
			assert.throws(() => new_controller.addPicture(no_source_picture));
			assert.equal(new_controller.getPictures().length, 0, 'The picture with no source is added');
		});

		it('Should not add the same Picture twice', function() {
			let new_controller = new PictureModel();
			assert.throws(() => {
				new_controller.addPicture(new_picture);
				assert.equal(new_controller.getPictures().length, 1);
				new_controller.addPicture(new_picture);
			});
			assert.equal(new_controller.getPictures().length, 1, 'The picture was added twice');
		});

		it('Should throw error when Picture is already added', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.equal(new_controller.getPictures().length, 1);
			assert.throw(() => new_controller.addPicture(new_picture), Error, "Picture can't be added");
		});

		it('Should increase picture list size', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.equal(new_controller.getPictures().length, 1, 'The list size is not increased by one');
		});

		it('Should include the picture in the list', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.isTrue(
				new_controller.getPictures().includes(new_picture),
				'The picture is not included in the list'
			);
		});

		it('Should add two pictures', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			new_controller.addPicture(new_picture2);
			assert.equal(new_controller.getPictures().length, 2, 'The list size is not two');
		});
	});

	describe('Controller deletePicture', function() {
		it('Should return nothing if successful', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.doesNotThrow(() => new_controller.deletePicture(new_picture), Error);
		});

		it('Should throw error if Picture not found', function() {
			let new_controller = new PictureModel();
			assert.throw(() => new_controller.deletePicture(new_picture), Error, 'Picture not found');
		});

		it('Add one picture and delete it. Size should be zero', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			new_controller.deletePicture(new_picture);
			assert.equal(new_controller.getPictures().length, 0, "Function doesn't reduce list size to zero");
		});
		it('Add two pictures and delete one. Size should be one', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			new_controller.addPicture(new_picture2);
			new_controller.deletePicture(new_picture);
			assert.equal(new_controller.getPictures().length, 1, 'Function does not reduce list size to one');
		});
		it('Add two pictures. Size should be two', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			new_controller.addPicture(new_picture2);
			assert.equal(new_controller.getPictures().length, 2, 'Function does not reduce list size to two');
		});
		it("Add one picture. The other one shouldn't be inside", function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture2);
			assert.isFalse(
				new_controller.getPictures().includes(new_picture),
				'Function does includes a wrong picture'
			);
		});
	});

	describe('Controller getPictures', function() {
		it('With no pictures, should list an empty list', function() {
			let new_controller = new PictureModel();
			assert.deepEqual(new_controller.getPictures(), [], 'No Empty list returned');
		});

		it('With one picture, should return a list with that picture', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.deepEqual(new_controller.getPictures(), [ new_picture ], 'No list with single element returned');
		});

		it('With two pictures, should return a list with both pictures', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			new_controller.addPicture(new_picture2);
			assert.deepEqual(
				new_controller.getPictures(),
				[ new_picture2, new_picture ],
				'No list with both elements returned'
			);
		});

		it('Adding two pictures, and removing the first should return a list with the second picture', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			new_controller.addPicture(new_picture2);
			new_controller.deletePicture(new_picture);
			assert.deepEqual(
				new_controller.getPictures(),
				[ new_picture2 ],
				'No list with only second element returned'
			);
		});
		it('Adding two pictures, and removing them return a empty list', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			new_controller.addPicture(new_picture2);
			new_controller.deletePicture(new_picture);
			new_controller.deletePicture(new_picture2);
			assert.deepEqual(new_controller.getPictures(), [], 'No empty list returned');
		});
	});
	describe(`Load sample picture`, function() {
		it('Should be uploaded', function() {
			let new_controller = new PictureModel();
			readFile(`${__dirname}/sample_pic.png`, (err, data) => {
				if (err) throw err;

				assert.doesNotThrow(() => new_controller.uploadPicture(new_picture, data), Error);
			});
		});
	});

	describe(`Get picture by Id`, function() {
		it('With no pictures, should throw an error', function() {
			let new_controller = new PictureModel();
			assert.throw(() => new_controller.getPicture(id));
		});

		it('If picture not in list, should throw an error', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.throw(() => new_controller.getPicture(id2));
		});

		it('If picture is found, should return the expected picture', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.deepEqual(new_picture, new_controller.getPicture(id), 'The picture is not as expected');
		});

		it('With two picture in the list, should return the expected pictures', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			new_controller.addPicture(new_picture2);
			assert.deepEqual(new_picture2, new_controller.getPicture(id2), 'The picture is not as expected');
			assert.deepEqual(new_picture, new_controller.getPicture(id), 'The picture is not as expected');
		});
	});

	describe(`Update picture`, function() {
		it('With no pictures, should throw an error', function() {
			let new_controller = new PictureModel();
			assert.throw(() => new_controller.updatePicture(new_picture));
		});

		it('Updating a not found id, should throw an error', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.throw(() => new_controller.updatePicture(new_picture2));
		});

		it("Updating an identical picture, shouldn't throw an error", function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.doesNotThrow(() => new_controller.updatePicture(new_picture));
		});

		it('Updating an identical picture, they should be identical', function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.deepEqual(new_controller.getPicture(id), new_picture);
		});

		it("Updating a picture with a modified title, shouldn't throw an error", function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.doesNotThrow(() => new_controller.updatePicture(updated_picture));
			assert.deepEqual(new_controller.getPicture(id), updated_picture);
		});

		it("Updating a picture with a modified description, shouldn't throw an error", function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.doesNotThrow(() => new_controller.updatePicture(updated_picture));
			assert.deepEqual(new_controller.getPicture(id), updated_picture);
		});

		it("Updating a picture with a modified source, shouldn't throw an error", function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.doesNotThrow(() => new_controller.updatePicture(updated_picture));
			assert.deepEqual(new_controller.getPicture(id), updated_picture);
		});

		it("Updating a picture with a modified user, shouldn't throw an error", function() {
			let new_controller = new PictureModel();
			new_controller.addPicture(new_picture);
			assert.doesNotThrow(() => new_controller.updatePicture(updated_picture));
			assert.deepEqual(new_controller.getPicture(id), updated_picture);
		});
	});
});
