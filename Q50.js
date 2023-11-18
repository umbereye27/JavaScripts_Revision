// function that checks if an array is sorted in ascending order.

function sortedArray(arr,n){
  if(n == 1 || n == 0) {
    return true;
  }
  for(let i = 1; i < n; i++){
    
      if(arr[i] < arr[i-1] ){
        return "Array is not sort on ascendind order";

      } 
  }
  return "Array is sort on ascendind order";;
}
console.log(sortedArray([81,93,1,4,5],4)); // not asc
console.log(sortedArray([81,93,111,234,500],4)); //asc