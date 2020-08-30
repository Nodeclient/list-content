const listdir = require('list-content').default;

let newLs = new listdir.ls();

newLs.ListDirectory("c:/coding/publish",function (data,err) {
    console.log(data);  
})