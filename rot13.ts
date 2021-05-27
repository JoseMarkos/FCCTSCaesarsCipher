export default function (sentence: string) {
  let wordsRot13Splited: string[][]  = [];
  
  sentence.split(' ').forEach(word => {
    const charCodes: number[] = word.split('').map(char => char.charCodeAt(0));
    wordsRot13Splited.push(charCodes.map(x => getRot13CharsFromCode(x)));
  });
  
  const words: string[] = wordsRot13Splited.map(x => x.join(''));

  return words.join(' ');
}

const getRot13CharsFromCode = (x: number) => {
  const sum: number = x + 13;
  const max         = 'Z'.charCodeAt(0);
  const min         = 'A'.charCodeAt(0);
  
  if (x < min)
  return String.fromCharCode(x);
  
  if (sum > max) {
    const diff    = sum - max;
    const newCode = min + diff - 1;
    return String.fromCharCode(newCode);
  }

  return String.fromCharCode(sum);
}