const fs = require('fs')
const path = require('path')

// Read a file , write a file , append a file , Delete a file

// Synchrnous
// const file1data = fs.readFileSync('f1.txt')

// console.log('This is file 1 data-> '+ file1data)


//  fs.readFile('f1.txt' , (err , data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('This is file 1 data-> '+ data)
//  })


 // writing a file


//  fs.writeFileSync('f4.txt' , "my name is Mrinal")

//  console.log("file written")


 // async writeFile

//  fs.writeFile('f2.txt' ,"my name is Mrinal" , (err)=>{
//       if(err){
//         console.log('error')
//       }
//       console.log('File written')
//  })


 // append a file

//  fs.appendFileSync('f3.txt' , " I am an instructor at Scaler")

// // async appendFile

//  fs.appendFile('f2.txt' ," I am an instructor at Scaler" , (err)=>{
//       if(err){
//         console.log('error')
//       }
//       console.log('File written')
//  })


 // delete a file

//  fs.unlinkSync('f2.txt')


 // Fs module for directories

 // create a dir

//  fs.mkdirSync('myDirectory1') // create a directory
//  fs.mkdirSync('myDirectory2') 
//  fs.mkdirSync('myDirectory3') 
//  fs.mkdirSync('myDirectory5') 

// delete a dir

// fs.rmdirSync('myDirectory2')


// we need to check if the file/folder exists or not?

// const doesExist = fs.existsSync('f7.txt')
// console.log(doesExist)


// I want to copy one file from one folder to another folder


// srcFilePath , DestinationFolder


let srcFilePath = '/Users/admin/Desktop/LLD-4 Evening Batch/class-1(Intro to Node)/node_inbuilt_modules/myDirectory4/f5.txt'

let destinationPath = '/Users/admin/Desktop/LLD-4 Evening Batch/class-1(Intro to Node)/node_inbuilt_modules/myDirectory1'


let tobecopiedFileName =  path.basename(srcFilePath)
console.log(tobecopiedFileName)


let destPath = path.join(destinationPath , tobecopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath , destPath)
console.log('File Copied')

fs.unlinkSync(srcFilePath) // cut functionality

















