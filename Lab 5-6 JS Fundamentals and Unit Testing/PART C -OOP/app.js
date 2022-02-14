//npm init
import {BankAccount} from './bank-account.js'
import {SavingAccount} from "./saving-account.js";

const bankAccount = new BankAccount(10000)
console.log(bankAccount)
console.log(bankAccount.balance)
console.log(bankAccount.getAccountNo())


const savingAccount = new SavingAccount(2000, 100)
console.log(savingAccount.getAccountNo())
console.log(savingAccount.balance)
console.log(savingAccount.minBalance)

