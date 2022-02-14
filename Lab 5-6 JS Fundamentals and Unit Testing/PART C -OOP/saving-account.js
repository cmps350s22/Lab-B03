import {BankAccount} from "./bank-account.js";
export class SavingAccount extends BankAccount{
    constructor(balance, minBalance) {
        super(balance);
        this.minBalance = minBalance
    }
}