function matchingStrings(strings, queries) {
  let results = [];

  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] == strings[j]) {
        count += 1;
      }
    }
    results.push(count);
  }
  return results;
}

console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
