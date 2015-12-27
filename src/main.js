import Account from './Account.js';

var myAccount = new Account();

myAccount.deposit('10000', '2015-12-25');
myAccount.withdraw('12000', '2015-12-26');
myAccount.deposit('8000', '2015-12-27');
myAccount.deposit('9000', '2015-12-27');
myAccount.deposit('6000', '2015-12-27');

//排序
myAccount.getTransSort();
//取前3条数据
myAccount.showTrans(3);


