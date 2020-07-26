const obj = require('../models/projectModel')
const me = require('../models/myModel')

insertProjectData = (req, res) => {
    const prodData = {
        projectid: req.body.projectid,
        projectname: req.body.projectname,
        technology: req.body.technology,
        description: req.body.description,
    }
    obj.create(prodData)
    .then(user => {
        res.json({ status: 'Data inserted!' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}

getProjectData = async (req, res) => {
    await obj.find({}, (err, mbdetect) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!mbdetect) {
            return res
                .status(404)
                .json({ success: false, error: `obj not found@` })
        }
        return res.status(200).json({ success: true, data: mbdetect })
    }).catch(err => console.log(err))
}

updateData = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    obj.findOne({ _id: req.params.id }, (err, mbdetect) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'data not found!',
            })
        }
        mbdetect.myname = body.myname
        mbdetect.phone = body.phone
        mbdetect
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: mbdetect._id,
                    message: 'data updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'data not updated!',
                })
            })
    })
}

deleteData = async (req, res) => {
    await obj.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!data) {
            return res
                .status(404)
                .json({ success: false, error: `obj not found` })
        }

        return res.status(200).json({ success: true, data: data })
    }).catch(err => console.log(err))
}

const insertMyData = (req, res, next) => {
    let m = new me({
        id: req.body.id,
        name: req.body.name,
        designation: req.body.designation,
        bio: req.body.bio,
        education: req.body.education,
        workexp: req.body.workexp,
        awards: req.body.awards,
    })
    if(req.file){
        m.avatar = req.file.path
    }
    m.save()
    .then(user => {
        res.json({ status: 'Data inserted!' })
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}

getProjectId = async (req, res) => {
    await obj.find({},{"_id": 0, "projectid":1 }, (err, file) => {     
      if (err) {
          return res.status(400).json({ success: false, error: err })
      }  
      if (!file) {
          return res
              .status(404)
              .json({ success: false, error: `not found` })
      }
      return res.status(200).json({ success: true, data: file })
  }).catch(err => console.log(err))
}


module.exports = {
    getProjectData,
    insertProjectData,
    updateData,
    deleteData,
    insertMyData,
    getProjectId
}