function groupStrings(strings: string[]): string[][] {
  let retval = new Map();
  for (let word of strings) {
    let first: number = word.charCodeAt(0);
    let charCodes: string = "0";

    for (let char of word) {
      let code = char.charCodeAt(0) - first;
      if (code < 0) code += 26;
      charCodes += "-" + code;
    }

    retval.has(charCodes)
      ? retval.set(charCodes, [...retval.get(charCodes), word])
      : retval.set(charCodes, [word]);
  }
  return [...retval.values()];
}
