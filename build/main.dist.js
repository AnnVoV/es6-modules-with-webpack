/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _AccountJs = __webpack_require__(1);

	var _AccountJs2 = _interopRequireDefault(_AccountJs);

	var myAccount = new _AccountJs2['default']();

	myAccount.deposit('10000', '2015-12-25');
	myAccount.withdraw('4000', '2015-12-26');
	myAccount.deposit('8000', '2015-12-27');

	//排序
	myAccount.getTransSort();

	myAccount.showTrans();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Account = (function () {
	    function Account() {
	        _classCallCheck(this, Account);

	        this.transactions = [];
	    }

	    _createClass(Account, [{
	        key: 'deposit',
	        value: function deposit(amount, date) {
	            this.transactions.push({
	                amount: amount,
	                date: date
	            });
	        }
	    }, {
	        key: 'withdraw',
	        value: function withdraw(amount, date) {
	            this.transactions.push({
	                amount: -amount,
	                date: date
	            });
	        }
	    }, {
	        key: 'getTransSort',

	        //使交易数组按照大小进行排序
	        value: function getTransSort() {
	            this.transactions.sort(function (a, b) {
	                return Math.abs(a.amount) - Math.abs(b.amount);
	            });
	        }
	    }, {
	        key: 'showTrans',
	        value: function showTrans() {
	            var dom = document.querySelector('.js-top-transactions');

	            var template = '';
	            for (var value in this.transactions) {
	                template += '<li>' + value.amount + ' (' + value.date + ')</li>';
	            }

	            console.log(template);
	        }
	    }]);

	    return Account;
	})();

/***/ }
/******/ ]);