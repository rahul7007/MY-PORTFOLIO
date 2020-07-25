const express = require('express')

const MbDetectCtrl = require('../controllers/myController')

const router = express.Router()

const upload = require('../middileware/upload')

router.post('/insert', MbDetectCtrl.insertProjectData) //for projectModel
router.get('/display', MbDetectCtrl.getData)
router.put('/update/:id', MbDetectCtrl.updateData)
router.delete('/delete/:id', MbDetectCtrl.deleteData)
router.post('/insertDetails', upload.single('avatar'), MbDetectCtrl.insertMyData) //for myModel
router.get('/getAllProjectsId', MbDetectCtrl.getProjectId) // return all projects id

module.exports = router