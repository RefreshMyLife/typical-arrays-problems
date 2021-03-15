
exports.min = function min (array) {
  if(array == null || array.length == 0)
  {
    return 0;
  }
  return Math.min.apply(null,array);
  
}

exports.max = function max (array) {
  if(array == null || array.length == 0)
  {
    return 0;
  }
  return Math.max.apply(null,array);
}

exports.avg = function avg (array) {
    if(array == null || array.length == 0)
    {
        return 0;
    }
    let arr = array;
    let avg = 0;
  for(let i = 0; i < arr.length;i++){
      avg += arr[i];
  }
  let result =avg/arr.length;
  return result;    
}
