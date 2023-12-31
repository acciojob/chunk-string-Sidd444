function stringChop(str,size) {
  // your code here
   let curr=0,arr=[];
  size=parseInt(size);
  while(curr<str.length){
     arr.push(str.substring(curr,Math.min(size+curr, str.length)));
     curr=curr+size;
  }
  return arr;
}
  
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str,size));
