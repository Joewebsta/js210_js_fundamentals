function join(arr, str) {
  let result = '';

  for (let i = 0; i < arr.length; i += 1) {
    result += String(arr[i]);
    
    if (i < arr.length - 1) result += str;
  }

  return result;
}


join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'