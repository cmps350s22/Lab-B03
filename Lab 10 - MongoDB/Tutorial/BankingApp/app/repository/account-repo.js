import Account from "../model/account.js";
import Transaction from "../model/account-trans.js";
import account from "../model/account.js";

export default class AccountRepo {

    //Get account from accounts.json file
    getAccounts(acctType) {
        if (acctType && acctType != 'All')
            return Account.find({acctType})
        return Account.find()
    }

    //Get account by accountNo
    getAccount(accountNo) {
        return Account.findOne({_id: accountNo});
    }

    async addAccount(account) {
        return await Account.create(account)
    }

    async deleteAccount(accountNo) {
        return Account.deleteOne({_id: accountNo})
    }

    async updateAccount(account) {
        return Account.findByIdAndUpdate(account.acctNo, account)
    }
    async addTransaction(transaction) {

        transaction.amount = parseInt(transaction.amount.toString())
        const account = await this.getAccount(transaction.acctNo)

        if(transaction.transType == 'Withdraw')
            account.balance -= transaction.amount
        else
            account.balance += transaction.amount

        await account.save()
        return await Transaction.create(transaction)
    }

    async getTransactions() {
        return Transaction.find().populate('acctNo')
    }

    async getStats() {
        return Account.aggregate(
            [
                {
                    '$group': {
                        '_id': '$acctType',
                        'Total': {
                            '$sum': '$balance'
                        },
                        'howManyAccount': {
                            '$sum': 1
                        }
                    }
                }
            ]
        )
    }

    async sumBalance() {
        try {
            const accounts = await this.getAccounts();
            return accounts.reduce((sum, account) => sum + account.balance, 0);
        } catch (e) {
            throw err;
        }
    }

    async chargeFees() {
        try {
            const accounts = await this.getAccounts();
            for (const acct of accounts) {
                //console.log('acct instanceof CurrentAccount', acct instanceof CurrentAccount);
                if (acct instanceof CurrentAccount) {
                    acct.deductFee()
                }
            }
            await this.saveAccounts(accounts);
        } catch (err) {
            throw err;
        }
    }

    async distributeBenefits(benefitRate) {
        try {
            const accounts = await this.getAccounts();
            // Go through all the Saving accounts and distribute the benefit using a 5% benefit.
            // Should not use filter and map for this as this will NOT update the original array
            for (const acct of accounts) {
                //console.log('acct instanceof SavingAccount', acct instanceof SavingAccount);
                if (acct instanceof SavingAccount) {
                    acct.addBenefit(benefitRate);
                }
            }
            await this.saveAccounts(accounts);
        } catch (err) {
            throw err;
        }
    }

}

