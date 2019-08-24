const fs = require('fs');

// //create folder and file
// fs.mkdir('tutorial', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         fs.writeFile('./tutorial/example.txt', '123', (err) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log('successfully created a file');
//             }
//         });

//         console.log('folder successfully created.');
//     }
// });

// // delete file and folder
// fs.unlink('./tutorial/example.txt', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('successfully deleted the file');
//         fs.rmdir('tutorial', (err) =>{
//             if(err){
//                 console.log();
//             } else {
//                 console.log('folder successfully deleted');
//             }
//         });
//     }
// });


// read folder files
// fs.readdir('example', (err, files) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(files);
//         for(let file of files){
//             fs.unlink('./example/' + file, (err) => {
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(`successfully deleted file ${ file }`);
//                 }
//             });
//         }
//     }
// });