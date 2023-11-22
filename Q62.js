function countWords(str) {
    const arr = str.split(' ');
    let filtered = arr.filter(word => word !== '');
    return filtered.length;
    
  }
  
  console.log(countWords('Hi, my name is Carine')); 
  