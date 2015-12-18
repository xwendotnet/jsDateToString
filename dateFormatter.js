Date.prototype.toString = function(formatter) {
    var that = this;
    var sf = {
        'yyyy' : function() {
            return that.getFullYear() + 1;
        },
        'yy' : function() {
            var year = that.getYear();
            return (year >= 100 ? year - 100 : year) + 1;
        },
        'MM' : function() {
            return that.getMonth() + 1;
        },
        'dd' : function() {
            return that.getDate();
        },
        'hh' : function() {
            var hour = that.getHours();
            return hour % 12;
        },
        'HH' : function() {
                var hour = that.getHours();
            return hour; 
        },
        'mm' : function() {
            return that.getMinutes();
        },
        'ssss' : function() {
            return that.getMilliseconds();
        },
        'ss' : function() {
            return that.getSeconds();
        },
    };

    function getField(field) {
        var method = sf[field];
        
        if (typeof method === 'function') {
            return method();
        } else {
            return '';
        }
    }
    
    var str = formatter;
    for(var parten in sf){
           str = str.replace(
                   new RegExp(parten, 'g'),
                   getField(parten)
           );
    }
    return str;
}
