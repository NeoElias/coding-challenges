function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  const totalElements = arr.length;
  for (let i = 0; i < totalElements; i++) {
    if (arr[i] > 0) {
      positiveCount += 1;
    }
    if (arr[i] < 0) {
      negativeCount += 1;
    }
    if (arr[i] === 0) {
      zeroCount += 1;
    }
  }

  const positiveRatio = positiveCount / totalElements;
  const negativeRatio = negativeCount / totalElements;
  const zeroRatio = zeroCount / totalElements;

  console.log(positiveRatio.toPrecision(6));
  console.log(negativeRatio.toPrecision(6));
  console.log(zeroRatio.toPrecision(6));
}
plusMinus([1, 1, 0, -1, -1]);
