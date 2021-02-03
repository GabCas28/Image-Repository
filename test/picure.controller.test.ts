var request = require('supertest');
var app = require("../src/index");
const samples = require("./samples");
import { assert, expect } from 'chai';

describe('GET /pictures', function() {
	it('should return a 200 Code', function(done) {
		request(app)
			.get('/pictures')
			.expect(200)
			.end(done);
	});
	it('should return a json response', function(done) {
		request(app)
			.get('/pictures')
			.expect('Content-Type', /json/)
			.end(done);
	});
});

describe('POST /pictures/', function() {
	it('should return a 201 Code and Json Response', function(done) {
		request(app)
			.post('/pictures/')
			.send(samples.new_picture)
			.expect(201)
			.expect('Content-Type', /json/)
			.end(done);
	});
});
describe('GET /pictures/'+samples.id, function() {
	it('should return a 200 Code', function(done) {
		request(app)
			.get('/pictures/'+samples.id)
			.expect(200)
			.end(done);
	});
	it('should return a json response', function(done) {
		request(app)
			.get('/pictures/'+samples.id)
			.expect('Content-Type', /json/)
			.end(done);
	});
});
describe('PATCH /pictures/'+samples.id, function() {
	it('should return a 200 Code', function(done) {
		request(app)
			.patch('/pictures/'+samples.id)
			.send(samples.updated_picture)
			.expect(200)
			.end(done);
	});
	it('should return a json response', function(done) {
		request(app)
			.patch('/pictures/'+samples.id)
			.send(samples.updated_picture)
			.expect('Content-Type', /json/)
			.end(done);
	});
});

describe('DELETE /pictures/'+samples.id, function() {
	it('should return a 200 Code', function(done) {
		request(app)
			.delete('/pictures/'+samples.id)
			.expect(200)
			.expect('Content-Type', /json/)
			.end(done);
	});
});