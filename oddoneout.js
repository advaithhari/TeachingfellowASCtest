function oddOneOut(arrOfInts){
    // Your code here!

    if(arrOfInts.length==0){
        return -1;
    }
    else{
    for(let i=0; i<arrOfInts.length; i++){
     
         if (arrOfInts[i] % 2 !== 0){
            return arrOfInts[i];
         }
    }
    return -1;

}
}


// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;