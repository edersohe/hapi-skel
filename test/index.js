var Code = require('Code');
var Lab = require('Lab');

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.describe;
var it = lab.it;

lab.test('returns true when 1 + 1 equals 2', function (done) {

    Code.expect(1+1).to.equal(2);
    done();
});
