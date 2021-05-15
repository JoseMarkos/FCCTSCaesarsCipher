function rot13(str: string) {
  let alphaNumerics: number[] = [];
  let collection: string[][]  = [];
  let words: string[]         = [];

  str.split(' ').forEach(x => {
    let arr: number[] = x.split('').map(x => {
      const isNonAlphaNumeric = x.match(/[^A-Z]/);
      
      if (isNonAlphaNumeric)
        alphaNumerics.push(x.charCodeAt(0));

      return  x.charCodeAt(0)
    });

    collection.push(arr.map(x => {
      const sum: number = x + 13;
      const max         = 'Z'.charCodeAt(0);
      
      if (alphaNumerics.includes(x))
        return String.fromCharCode(x);

      if (sum > max) {
        let diff    = sum - max;
        let newCode = 'A'.charCodeAt(0) + diff - 1;
        return String.fromCharCode(newCode);
      }

      return String.fromCharCode(sum);
    }));
  });
  
  collection.forEach(x => words.push(x.join('')))
  
  return words.join(' ');
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));

