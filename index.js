let express = require('express');
// let multer = require('multer');
// let path = require('path');
let app = express();
let XLSX = require('xlsx');

app.use(express.static('public'));

// let upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, './uploads/');
//         },
//         filename: function (req, file, cb) {
//             var changedName = (new Date().getTime())+'-'+file.originalname;
//             cb(null, changedName);
//         }
//     })
// });

// // 首页
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

// // 单文件上传
// app.post('/upload/excelFile', upload.single('excelFile'), (req,res)=>{
//     res.json({
//         code: 0,
//         path: req.file.path,
//         originalname: req.file.originalname
//     });
//     var workbook = XLSX.readFile(req.file.path);
//     console.log(workbook);
// });

app.get('/upload/jiexi', (req, res) => {
    var workbook = XLSX.readFile('test.xlsx');
    var worksheet1 = workbook.Sheets[workbook.SheetNames[0]];
    res.json({
        worksheet1: worksheet1
    })
})

// var workbook = XLSX.readFile('test.xlsx');
// var worksheet1 = workbook.Sheets[workbook.SheetNames[0]];
// console.log(worksheet1);


var server = app.listen('8089');