import { assert } from 'chai';
var request = require('superagent');
describe('Integration Tests Image-Repo', function() {
	describe('Docker Connection', function() {
		// it("Should connect to the gateway", function () {
		//   return request.get("gateway:5000/pictures").then((res:any)=>{
		//     assert.ok(res, "not connected")
		//   }).catch((err:any)=>{throw err})
		// });
		// it("Should connect to the pictures", function () {
		//   return request.get("pictures:3600/pictures").then((res:any)=>{
		//     assert.ok(res, "not connected")
		//   }).catch((err:any)=>{throw err})
		// });

		it('Should connect to the gateway', function() {
			return request
				.get('gateway:5000/pictures')
				.then((res: any) => {
					assert.ok(res, 'not connected');
				})
				.catch((err: any) => {
					return request
						.get('localhost:5000/pictures')
						.then((res: any) => {
							assert.ok(res, 'not connected');
						})
						.catch((err: any) => {
							throw err;
						});
				});
		});

		it('Should connect to the pictures', function() {
			return request
				.get('pictures:3600/pictures')
				.then((res: any) => {
					assert.ok(res, 'not connected');
				})
				.catch((err: any) => {
					return request
						.get('localhost:5000/pictures')
						.then((res: any) => {
							assert.ok(res, 'not connected');
						})
						.catch((err: any) => {
							throw err;
						});
				});
		});
	});
});
