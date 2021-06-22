let fs = require('fs');

let text = fs.readFileSync("./Day-1/input.txt", 'utf-8');
let numberList= text.split('\n');

let newNumberArray = []
// the two functions below serve the same purpose but we learned about Array.forEach()
// for(let i = 0; i<numberList.length; i++){
//     newNumberArray.push(parseInt(numberList[i], 10));
// }
numberList.forEach((item, index)=> {
    newNumberArray.push(parseInt(item,10))
})
// let numberList = [ 979 ,366 ,299 ,675 ,1456, 1721 ];

for(let i = 0; i<newNumberArray.length; i++){
    let x = newNumberArray[i];
    for(let n = i + 1; n<newNumberArray.length; n++){
        let y = newNumberArray[n] 
        if(x + y === 2020){
            console.log(x*y);
        } 
    }
}
