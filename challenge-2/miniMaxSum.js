function miniMaxSum(arr) {
  // Write your code here
  let rawSum = 0;
  for (let i = 0; i < arr.length; i++) {
    rawSum += arr[i];
  }
  const minSum = rawSum - Math.min(...arr);
  const maxSum = rawSum - Math.max(...arr);

  console.log(maxSum, minSum);
}
miniMaxSum([1, 3, 5, 7, 9]);
