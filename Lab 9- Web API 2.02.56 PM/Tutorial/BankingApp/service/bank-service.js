import BankRepo from '../repository/bank-repo.js'
const bankRepo = new BankRepo()

export default class BankService {
    async getAccounts(req, res){
        const accounts = await bankRepo.getAccounts(req.params.type)
        res.json(accounts)
    }

    async getAccount(req, res){
        const account = await bankRepo.getAccount(req.params.accountNo)
        res.json(account)
    }

    async addAccount(req, res){
        const response = await bankRepo.addAccount(req.body)
        res.send(response)
    }
    async deleteAccount(req, res){
        const response = await bankRepo.deleteAccount(req.params.accountNo)
        res.send(response)
    }
    async updateAccount(req, res) {
        const response = await bankRepo.updateAccount(req.body)
        res.send(response)
    }

}
