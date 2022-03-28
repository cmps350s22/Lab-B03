import BankAccount from './bank-account.js'

export default class CurrentAccount extends BankAccount {

    constructor(accountNo, acctType, balance) {
        super(accountNo, acctType, balance);
        this.monthlyFee = 15;
    }

    deductFee() {
        if (this.balance < this.monthlyFee) throw 'No enough balance to deduct fee';
        super.withdraw(this.monthlyFee);
    }

    toString() {
        return `${super.toString()} Minimum Balance ${this.monthlyFee}`;
    }
}
