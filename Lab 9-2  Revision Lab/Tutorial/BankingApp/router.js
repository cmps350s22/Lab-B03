import express from 'express';
import AccountService from "./service/account-service.js";
const router = express.Router()
const accountService = new AccountService()


router.get('/accounts', accountService.getAccounts)
router.post('/accounts', accountService.addAccount)
router.put('/accounts', accountService.updateAccount)

router.delete('/accounts/:acctNo', accountService.deleteAccount)
router.get('/accounts/:acctNo', accountService.getAccount)

router.post('/accounts/:acctNo/trans', accountService.addTransaction)

export default router
