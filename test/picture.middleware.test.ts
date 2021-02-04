import { Id } from '../src/common/models/Id';
var request = require('supertest');
var app = require("../src/index");
const samples = require("./samples");

describe('POST /pictures/ MIDDLEWARE', function () {
	it('should return a 400 Code and error Response with invalid Picture', function (done) {
		request(app)
			.post('/pictures/')
			.send(samples.no_source_picture)
			.expect(400, { 'error': 'Picture not Valid' })
			.end(done);
	});
	it('should return a 400 Code and error Response with invalid Author', function (done) {
		request(app)
			.post('/pictures/')
			.send(samples.no_author_picture)
			.expect(400, { 'error': 'Author not Valid' })
			.end(done);
	});
});

describe('GET /pictures/:id MIDDLEWARE', function () {
	it('should return a 404 Code and error Response with not found Picture', function (done) {
		request(app)
			.get('/pictures/' + new Id())
			.expect(404, { 'error': 'Picture not Found' })
			.end(done);
	});
});

describe('PATCH /pictures/:id MIDDLEWARE', function () {
	it('should return a 404 Code and error Response with not found Picture', function (done) {
		request(app)
			.patch('/pictures/' + new Id())
			.send(samples.new_picture)
			.expect(404, { 'error': 'Picture not Found' })
			.end(done);
	});

	it('should return a 400 Code and error Response with invalid Author', function (done) {
		request(app)
			.patch('/pictures/' + samples.id)
			.send(samples.no_author_picture)
			.expect(400, { 'error': 'Author not Valid' })
			.end(done);
	});
	it('should return a 400 Code and error Response with invalid Picture', function (done) {
		request(app)
			.patch('/pictures/' + samples.id)
			.send(samples.no_source_picture)
			.expect(400, { 'error': 'Picture not Valid' })
			.end(done);
	});
});

describe('DELETE /pictures/:id MIDDLEWARE', function () {
	it('should return a 404 Code and error Response with not found Picture', function (done) {
		request(app)
			.delete('/pictures/' + new Id())
			.expect(404, { 'error': 'Picture not Found' })
			.end(done);
	});
});