const express = require('express')

const MbDetectCtrl = require('../controllers/myController')

const router = express.Router()

const upload = require('../middileware/upload')

//const test = express()

router.post('/insert', MbDetectCtrl.insertProjectData) //for projectModel
router.get('/display', MbDetectCtrl.getProjectData)
router.put('/update/:id', MbDetectCtrl.updateData)
router.delete('/delete/:id', MbDetectCtrl.deleteData)
router.post('/insertDetails', upload.single('avatar'), MbDetectCtrl.insertMyData) //for myModel
router.get('/getAllProjectsId', MbDetectCtrl.getProjectId) // return all projects id
router.post('/sendMessage', MbDetectCtrl.contactMe) //send text message


module.exports = router