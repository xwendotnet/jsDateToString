if (Date.prototype.toString.length === 0) {
    Date.prototype.toString = function(formatter) {
        var that = this;
        var partens = {
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
                return that.getMinutes();
            },
            'm' : function() {
                var min =  that.getMinutes();
                return min < 10 ? '0' + min : min;
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
}
