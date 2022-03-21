import fs from 'fs-extra'

const filepath = './data/accounts.json'
export default class BankRepo {
    async getAccounts(type) {
        const accounts = await fs.readJson(filepath)
        return accounts
    }

    async getAccount(accountNo) {
        const accounts = await fs.readJson(filepath)
        return accounts.find(account => account.accountNo)
    }

    async addAccount(account) {
        const accounts = await fs.readJson(filepath)
        accounts.push(account)
        return `successfully added the account ${account.accounNo}`
    }

    async deleteAccount(accountNo) {
        let accounts = await fs.readJson(filepath)
        const totalAccounts = accounts.length
        accounts = accounts.filter(account => account.accountNo != accountNo)

        if (totalAccounts == accounts.length)
            return `account no ${accountNo} does not exist`
        else {
            await fs.writeJson(filepath, accounts)
            return `you successfully deleted ${accountNo}`
        }

    }

    async updateAccount(updatedAccount) {
        let accounts = await fs.readJson(filepath)
        const index = accounts.findIndex(account => account.accountNo == updatedAccount.accountNo)
        if (index < 0)
            return `unable to update account`
        else {
            accounts[index] = updatedAccount
            await fs.writeJson(filepath, accounts)
            return `successfully updated the account ${updatedAccount.accountNo}`
        }
    }

}
