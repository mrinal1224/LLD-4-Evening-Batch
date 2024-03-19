const fs = require('fs')

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

 fs.unlinkSync('f2.txt')



