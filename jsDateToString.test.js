var defaultToString = Date.prototype.toString;

require('./jsDateToString.js')
const assert = require('assert');

var birthday = new Date('1987-07-13 03:24:00');

describe('Date formt', function() {
    describe('#toString()', function () {
        it('without patens should use default toString', function () {
            var date = new Date(2016, 1, 1, 12, 10, 10);
            var defaultOutput = defaultToString.call(date);
            var formaterOutput = date.toString();

            assert.equal(defaultOutput, formaterOutput);
        });

        it('use yyyy-MM-dd partens should return the string', function() {
            assert.equal('1987-07-13', birthday.toString('yyyy-MM-dd'));
            assert.equal('1987-7-13', birthday.toString('yyyy-M-dd'));
            assert.equal('87-7-13', birthday.toString('yy-M-dd'));
        });

        it('use time partens should return the time string', function() {
            assert.equal('03:24:00', birthday.toString('hh:mm:ss'));
            assert.equal('3:24:0', birthday.toString('h:m:s'));
        });

        it('should add 0 when ues parten mm and minutes less than 10', function() {
            const date = new Date(2016, 7, 13, 14, 4, 0);
            assert.equal('14:04:0', date.toString('HH:mm:s'));
        });
    });

    /*describe('C# Example', function() {
        it('FullDateTimePattern', function() {
            var dt = new Date('2012-05-28 11:35:00'); 
        });
    }); */
});
