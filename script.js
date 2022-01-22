
 // for getting second largest number.
 const arr = [11,25,63,85,41,51,25]
 const get secondlargestnumber = (arr = []) =>{
   let largestnumber = arr[0];
   let secondlargestnumber = arr[0];
   
   for (let i=0; i<arr.length; i++){
     if ( arr[i] > largestnumber) {
       secondlargestnumber=largestnumber;
       largestnumber = arr[i];
     } else if (arr[i] > secondlargestnumber){
       secondlargestnumber = arr[i];
     }
   }
   return secondlargestnumber;
 }
 
 // for calculating the frequency.
 const string = "dummy text"
 function getcounts(string){
   const histogram = {};
   foe (let i in string)
   histogram [string[i]] = (histogram[string[i]] || 0) +1
   return histogram;
 }
 
 console.log(getcounts("dummy text"));
 
 // function test flatten
 const data = [{ "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] }];
 function flatten(arr){
   let flatarray = [];
   arr.foreach(element => {
     if(array.isarray(element)){
       flatarray = flatarray.concat(flatten(element));
     }
     else{
       flatarray.push(element);
     }
   });
   return flatarray;
 }
 const newarray = flatten(data);
 console.log(newarray);
 