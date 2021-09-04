const { query } = require('express');
const express = require('express');
const router = express.Router();
const { uploadImageConfS3 } = require('../utils/ImageUpload')

const cpUpload = uploadImageConfS3().fields([{ name: 'mainimage', maxCount: 1 }, 
                                { name: 'subimage01', maxCount: 1 },
                                { name: 'subimage02', maxCount: 1 },
                                { name: 'subimage03', maxCount: 1 }
                              ])

router.post('/', cpUpload, function (req, res, next) {
  let mainImagePath = '', subImage01Path = '', subImage02Path = '', subImage03Path = ''

  // get image url path
  if (req.files.mainimage){
    mainImagePath = req.files.mainimage[0].location
    console.log(mainImagePath)
  }
    
  if (req.files.mainimage){
    subImage01Path = req.files.subimage01[0].location
    console.log(subImage01Path)
  }
  
  if (req.files.subimage02){
    subImage02Path = req.files.subimage02[0].location
    console.log(subImage02Path)
  }
  
  if (req.files.subimage03){
    subImage03Path = req.files.subimage03[0].location
    console.log(subImage03Path)
  }
  
  res.send('Upload multiple images!')
})

module.exports = router;
