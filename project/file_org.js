let fs = require('fs');
let path = require('path');
let pathorganized = process.argv.slice(2)[0];
// console.log(pathorganized);
let extfolderpath = path.join(pathorganized,'others');
let extensions = {
    "image":['.png','.jpg','.jpeg','.gif'],
    "video":['.mp4','.mkv'],
    "documents":['.pdf','.doc','.xls','.ppt','.txt'],
    "software":['.exe','.deb'],
    "audio":['.mp3'],
}
function checkfolder(extensionname,folderpath){
    for(let key in extensions){
        let extarray = extensions[key];
        if(extarray.includes(extensionname)){
            extfolderpath = path.join(folderpath,key);
            break;
        }
    }
    return fs.existsSync(extfolderpath);
}

function movefile(filename,folderpath){
    let sourcepath = path.join(folderpath,filename);
    let destpath = path.join(extfolderpath,filename);
    fs.copyFileSync(sourcepath,destpath);
    fs.unlinkSync(sourcepath);

}
function createfolder(){
    fs.mkdirSync(extfolderpath);
}
function organizedfolder(folderpath){
    let exist = fs.existsSync(folderpath);
    if(exist == true){
        let content = fs.readdirSync(folderpath);
        for(let i=0; i<content.length; i++){
            let extname = path.extname(content[i]);
            console.log(extname);
            let extensionfolderexist = checkfolder(extname,folderpath);
            if(extensionfolderexist == true){
                movefile(content[i],folderpath)
            }else{
                createfolder();
                movefile(content[i],folderpath);
            }
            extfolderpath = path.join(folderpath,'others');
        }
    } else{
        console.log('enter correct path');
        return;
    }
}
organizedfolder(pathorganized);