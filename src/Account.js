'use strict';

class Account {
    constructor() {
        this.transactions = [];
    };

    deposit(amount, date) {
        this.transactions.push({
            amount: amount,
            date: date
        });
    };

    withdraw(amount, date) {
        this.transactions.push({
            amount: -amount,
            date: date
        });
    };

    //使交易数组按照大小进行排序
    getTransSort(){
        this.transactions.sort((a, b)=>{
            return -Math.abs(a.amount) + Math.abs(b.amount);
        });
    }

    //取前num条数据
    showTrans(num){
        var dom = document.querySelector('.js-top-transactions');
        var index = 0;
        var template =  ``;

        //使用es6 强大的for-of循环
        for(let value of this.transactions){
            index++;
            console.log(index);
            if(index>num)break;
            template+= `<li>${value.amount} (${value.date})</li>`;

        }

        template = '<ul>'+template+'</ul>';
        dom.innerHTML = template;
    }
}

export default Account;


