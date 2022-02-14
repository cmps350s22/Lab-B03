export class BankAccount {
    #accountNo
    constructor(balance) {
        this.balance = balance
        this.#accountNo = (Math.random() * 1000).toFixed(0)
    }
    getAccountNo(){
        return this.#accountNo
    }
}


