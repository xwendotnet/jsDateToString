require('./dateFormatter.js')
var now = new Date();

// 2016-12-18
console.info(
        now.toString('yyyy-MM-dd')
);

// 16-12-18
console.info(
        now.toString('yy-MM-dd')
);

// 2:07:20
console.info(
        now.toString('hh-mm-ss')
);
