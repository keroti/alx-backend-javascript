export default function cleanSet(set, startString) {
  const matchingValues = [];
  //   eslint-disable-next-line
    for (const value of set) {
    if (value && value.startsWith(startString)) {
      matchingValues.push(value.slice(startString.length));
    }
  }

  return matchingValues.join('-');
}
