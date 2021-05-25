export default function (sentence: string) {
  let rot13CharCodes: string[][]  = [];
  let words: string[]             = [];

  sentence.split(' ').forEach(word => {
    let charCodes: number[] = word.split('').map(char => char.charCodeAt(0));
    rot13CharCodes.push(charCodes.map(x => getRot13Code(x)));
  });

  words = rot13CharCodes.map(x => x.join(''));
  return words.join(' ');
}

const getRot13Code = (x: number) => {
  const sum: number       = x + 13;
  const max               = 'Z'.charCodeAt(0);
  const min               = 'A'.charCodeAt(0);

  if (x < min)
    return String.fromCharCode(x);

  if (sum > max) {
    let diff    = sum - max;
    let newCode = min + diff - 1;
    return String.fromCharCode(newCode);
  }

  return String.fromCharCode(sum);
}