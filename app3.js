const fs = require('fs');

// //create a file
// fs.writeFile('example.txt', "this is an example", (err) =>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('File successfully created');
//         fs.readFile('example.txt', 'utf8', (err, file) =>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         });
//     }
// });

// //rename file
// fs.rename('example.txt', 'example2.txt', (error) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Successfully renamed the file.');
//     }
// });

// // append data to the file
// fs.appendFile('example2txt', 'Some Data being updated', (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully appended data to the file..');
//     }
// });

// // delete file
// fs.unlink('example2.txt', (err) =>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successfully deleted the file');
//     }
// });