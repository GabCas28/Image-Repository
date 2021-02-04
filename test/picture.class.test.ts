import { assert, expect } from 'chai';
import { Picture } from '../src/pictures/classes/Picture';

const samples = require('./samples');

describe('Unit Tests Picture.ts', function() {
	var new_picture = samples.new_picture;
	var no_source_picture = samples.no_source_picture;
	describe(`Load source file: ${__dirname}/../src/Picture.ts`, function() {
		it('Should be loaded', function() {
			assert.ok(Picture, 'Loaded');
		});
	});

	describe('Instantiate Picture', function() {
		it('Should create Pictures correctly', function() {
			expect(new_picture).to.be.a('Picture');
		});
/* 
		it('Should print Pictures correctly', function() {
			assert.equal(
				new_picture.toString(),
				`Gabriel Castro - test@gmail.com:\nPicture 1\nTest Picture 1...\nSource:D:\\Documents\\GitHub\\Image-Repository\\test/../assets/example/picture.png`
			);
		}); */
	});

	describe('Picture isValid', function() {
		it('Should return false if Picture has blank source', function() {
			assert.isFalse(no_source_picture.isValid());
		});

		it('Should return true if Picture everything is ok', function() {
			assert.isTrue(new_picture.isValid());
		});
	});
});
