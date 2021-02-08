const { series } = require('gulp');
var exec = require('child_process').exec;
const DefaultRegistry = require('undertaker-registry');
function build(cb) {
	// place code for your default task here
	exec('echo build', function (err, stdout, stderr) {
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
        cb(err);
      });
}
function install(cb) {
	// place code for your default task here
	exec('echo install', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
}
function test(cb) {
	// place code for your default task here
	exec('npm test', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
      });
}
exports.build = build;
exports.install = install;
exports.test = test;
exports.default = series(build, install, test);
