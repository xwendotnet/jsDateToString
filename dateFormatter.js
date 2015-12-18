Date.prototype.toString = function(formatter) {
    var that = this;
    var sf = {
        'yyyy' : 'getFullYear',
        'MM' : 'getMonth',
        'dd' : 'getDate'
    };

    function getField(field) {
        var pre = field === 'dd' ? 0 : 1;
        var method = sf[field];
        var str = that[method]() + pre + '';
        return str;
    }

    return formatter.replace(/yyyy/, getField('yyyy'))
        .replace(/MM/, getField('MM'))
        .replace(/dd/, getField('dd'))
}
