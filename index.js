const fs = require ('fs');
const fetch = require ('node-fetch');

fetch('http://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
    let OluwaJobe = JSON.stringify(json, null, 2);
    fs.mkdir('result', err => {
        //if (err) throw err;
        if (err) 
        console.log("Directory already exist")
        else
        console.log("Dir has been created")
    })
    fs.writeFile('result/posts.json', OluwaJobe, err => {
        console.log("post file has been created")
    })
}).catch(error => { console.log(error)
});