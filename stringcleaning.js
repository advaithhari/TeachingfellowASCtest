function strClean(arrOfStrs){
    //Your code goes here
arrOfNewStrs = [];
arrOfStrs.forEach(function(str){
    
     str = str.trim();

     for(var i = 0; i < str.length; i++){
            
         if(str[i] === " "){
            str = str.replace(str[i], '_');
         }
       
          if(str[i] ==='0')
         {
            str = str.replace(str[i], 'zero');
            // if(str[i+1] <= '9' && str[i+1]> '1'){
            //     str = str.replace(str[i+1], '');
    
            //  }
             
         }
          if(str[i] ==='1'){
            str = str.replace(str[i], 'one');
            // if(str[i+1] <= '9' && str[i+1]> '1'){
            //     str = str.replace(str[i+1], '');
    
            //  }
         }
          if(str[i] <= '9' && str[i]> '1'){
       
            str = str.replace(str[i], '');
            i--;
         }
         console.log(str); 
      
     }
         
    arrOfNewStrs.push(str);
  
});
// console.log(arrOfNewStrs);
return arrOfNewStrs;


}




// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;