const express = require('express')
const { authAdmin, getCompanyInfo, editCompanyInfo, updateCompanyStatus, rejectCompanysts, processingCompanyStatus,
    pendinginfo, approvedinfo, processinginfo, slotsInfo,
    getApplications, updateSlot, removeslotDuplicate
 } = require('../controllers/adminControllers')

const router = express.Router()



router.route('/login').post(authAdmin)
router.route('/companydetails').get(getCompanyInfo)
router.route('/viewcompany/:id').get(editCompanyInfo);
router.route('/updatestatus/:id').put(updateCompanyStatus)
router.route('/rejectstatus/:id').put(rejectCompanysts)
router.route('/processStatus/:id').put(processingCompanyStatus)
router.route('/pending').get(pendinginfo)
router.route('/approved').get(approvedinfo)
router.route('/process').get(processinginfo)
router.route('/slots').get(slotsInfo)
router.route('/getApplication').get(getApplications)
router.route('/updateslot').put(updateSlot)
router.route('/removeduplicate').put(removeslotDuplicate)




module.exports = router; 