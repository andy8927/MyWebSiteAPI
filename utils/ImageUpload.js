const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')


function uploadImageConf() {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/tmp/uploads/')
        },
        filename: function (req, file, cb) {
            // console.log(file)
            cb(null, file.originalname)
        }
    })
    return multer({ storage: storage })
}


function uploadImageConfS3() {
    const s3 = new aws.S3({
        accessKeyId: process.env.ACCESSKEYID,
        secretAccessKey: process.env.SECRETACCESSKEY,
        region: 'us-east-2'
    })

    const folder = Date.now().toString();
    return multer({
        storage: multerS3({
            s3: s3,
            bucket: `${process.env.S3_BUCKET}/images/products/${folder}`,
            acl: 'public-read',
            contentType: multerS3.AUTO_CONTENT_TYPE,
            metadata: function (req, file, cb) {
                cb(null, { fieldName: file.fieldname });
            },
            key: function (req, file, cb) {
                cb(null, file.originalname)
            }
        })
    })
}

module.exports = { uploadImageConfS3 }