require('./dateFormatter.js')
var eve = new Date(2015, 12, 24, 23, 59, 59);

// 2016-12-18
console.info(eve.toString('yyyy-MM-dd'));

// 16-12-18
console.info(eve.toString('yy-MM-dd'));

// 2:07:20
console.info(eve.toString('hh-mm-ss'));

console.info(eve.toString('hh'))

console.info(eve.toString('HH'))
