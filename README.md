# jsDateToString
Add toString('yyyy-MM-dd') method to Date.prototype in js. Only change the prototype when the old Date.prototype.toString has 0 arugments that mean no body changed this method before.

For Example:
>```javascript
>var dt = new Date('2016-03-18 10:00:05);
>
>//  2016/03/18
>dt.toString('yyyy/MM/dd');
>
>//  10:00:05AM 03/18/16
>dt.toString('HH:mm:ssTT dd/MM/yy');

Now supported partens:

* yyyy
* yy
* MM
* M
* dd
* d
* hh
* h
* HH
* H
* mm
* m
* ssss
* ss
* s
* tt
* t