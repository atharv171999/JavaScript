const { Console } = require('console');
let fs = require('fs');

// console.log(fs);

// read file 
let content = fs.readFileSync('file.txt');
// console.log(content+"")

fs.writeFileSync('file.txt', "hello from file");
fs.writeFileSync('file2.txt', "hii there how are you")

fs.appendFileSync('file2.txt', "\n who hell are you");

fs.unlinkSync('file2.txt')

// read a directory 
let foldercontent = fs.readdirSync(__dirname);
// console.log(foldercontent);
let isexists = fs.existsSync('nyc');
console.log(isexists);

if(isexists == false){
    fs.mkdirSync('nyc');

}else{
    fs.rmdirSync('nyc');
}

let dest = 'C:\Users\91741\jp.dev2\module2\js';
let filename = 'file.txt';
let destpath = path.join(dest,filename);
console.log(destpath);
fs.copyFileSync('C:\Users\91741\jp.dev2\module2\node\file.txt',destpath);
