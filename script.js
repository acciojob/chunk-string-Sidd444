function stringChop(str,size) {
  // your code here
  let curr=0,arr=[];
  size=parseInt(size);
  while(true){
	 if(size+curr<=str.length){
		 arr.push(str.substring(curr,size+curr));
	     curr=curr+size;
      }else break;
  }
  if(curr<str.length) arr.push(str.substring(curr,str.length));
  return arr;
}
  
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str,size));
