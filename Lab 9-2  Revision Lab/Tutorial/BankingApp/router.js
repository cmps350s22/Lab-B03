import express from 'express';
import AccountService from "./service/account-service.js";
const router = express.Router()
const accountService = new AccountService()


router.get('/accounts', accountService.getAccounts)
router.post('/accounts', accountService.addAccount)
router.delete('/accounts', accountService.deleteAccount)
router.put('/accounts', accountService.updateAccount)

router.get('/accounts/:acctNo', accountService.getAccount)

export default router
