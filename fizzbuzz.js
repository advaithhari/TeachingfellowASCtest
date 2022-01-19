function fizzBuzz(start, end, skip){
    // Your code here!
    let arr = [];
    for(let i=start; i<=end; i++){
        if(i!=skip){
            if(i.toString().includes(skip.toString())){

            }
            else{
                arr.push(i);
            }
        }
    }
    console.log(arr);
    return arr;
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;