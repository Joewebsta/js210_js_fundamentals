// push
// pop
// unshift
// shift
// indexOf
// lastIndexOf

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function splice(arr, startIdx, deleteCount) {
  let endIdx = deleteCount + 1;
  let newArrLength = arr.length - deleteCount;
  let removedElems = [];

  for (let i = startIdx; i <= endIdx; i += 1) {
    push(removedElems, arr[i]);
  }

  for (let i = endIdx + 1; i < arr.length ; i += 1) {
    arr[startIdx] = arr[i];
    startIdx += 1;
  }

  arr.length = newArrLength;
  return removedElems;
}