(function() {
    if (Date.prototype.toString.length === 0) {
    var old = Date.prototype.toString;

    Date.prototype.toString = function(formatter) {
        if (formatter === undefined || formatter === null) {
            return old.call(this);
        }

        var that = this;
        var partens = {
            'yyyy' : function() {
                return that.getFullYear();
            },
            'yy' : function() {
                var year = that.getYear();
                return (year >= 100 ? year - 100 : year);
            },
            'MM' : function() {
                var month =  that.getMonth() + 1;
                return month < 10 ? '0' + month : month;
            },
            'M' : function() {
                return that.getMonth() + 1;
            },
            'dd' : function() {
                var date =  that.getDate();
                if (date < 10) {
                    return '0' + date;
                }else {
                    return date;
                }
            },
            'd' : function() {
                return that.getDay();
            },
            'hh' : function() {
                var hour = that.getHours() % 12;
                return hour < 10 ? '0' + hour : hour;
            },
            'h' : function() {
                var hour = that.getHours();
                return hour % 12;
            },
            'HH' : function() {
                var hour = that.getHours();
                return hour < 10 ? '0' + hour : hour; 
            },
            'H' : function() {
                var hour = that.getHours();
                return hour; 
            },
            'mm' : function() {
                var min =  that.getMinutes();
                return min < 10 ? '0' + min : min;
            },
            'm' : function() {
                return that.getMinutes();
            },
            'ssss' : function() {
                return that.getMilliseconds();
            },
            'ss' : function() {
                var sec =  that.getSeconds();
                return sec < 10 ? '0' + sec : sec;
            },
            's' : function() {
                return that.getSeconds();
            },
            'tt' : function() {
                var hour = that.getHours();
                return hour <= 12 ? 'AM' : 'PM';
            },
            't' : function() {
                var hour = that.getHours();
                return hour <= 12 ? 'A' : 'P';
            },
        };

        function getField(field) {
            var method = partens[field];
            
            if (typeof method === 'function') {
                return method();
            } else {
                return '';
            }
        }
        
        var str = formatter;
        for(var parten in partens){
               str = str.replace(
                       new RegExp(parten, 'g'),
                       getField(parten)
               );
        }
        return str;
    }
}})();
