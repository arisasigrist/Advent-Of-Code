let fs = require('fs');

let text = fs.readFileSync("./Day-1/input.txt", 'utf-8');
let textSplitIntoLines = text.split('\n');

let newNumberArray = []

textSplitIntoLines.forEach((item, index)=> {
    newNumberArray.push(parseInt(item,10))
})

for(let i = 0; i<newNumberArray.length; i++){
    let x = newNumberArray[i];
    for(let n = i + 1; n<newNumberArray.length; n++){
        let y = newNumberArray[n] 
        for(let j = n + 1; j<newNumberArray.length; j++){
            let z = newNumberArray[j]
            if(x + y + z === 2020){
                console.log(x*y*z);
            } 
        }
    }
}