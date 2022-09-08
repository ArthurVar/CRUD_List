// const path = require('path')
// const multer = require('multer')

// let storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, 'assets/')
//     },
//     filename: function(req, file, cb){
//         let ext = path.extname(file.originalname)
//         cb(null, Date.now() + ext)
//     }
// })

// let upload = multer ({
//     storage: storage,
//     fileFilter: (req, file, callback) => {
//         if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg'){
//             callback(null, true)
//         }else{
//             console.log('only jpg & png file supported!')
//             callback(null, false)
//         }
//     },
//     limits: {
//         fileSize: 40 * 40 * 2
//     }
// })

// module.exports = upload