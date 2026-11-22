function isLetter(ch) {
  const code = ch.charCodeAt(0);
  return (
    (code >= 65 && code <= 90) ||   // A-Z
    (code >= 97 && code <= 122) ||  // a-z
    (code >= 1040 && code <= 1103) || // А-я
    code === 1025 || code === 1105  // Ё, ё
  );
}

function isDigit(ch) {
  const code = ch.charCodeAt(0);
  return code >= 48 && code <= 57; // 0-9
}

function analyzieString(str) {
  const result = { letters: 0, digits: 0, spaces: 0, other: 0 };

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (isLetter(ch)) {
      result.letters++;
    } else if (isDigit(ch)) {
      result.digits++;
    } else if (ch === ' ') {
      result.spaces++;
    } else {
      result.other++;
    }
  }

  return result;
}

console.log(analyzieString('Hello World 123!'));
console.log(analyzieString('Привет, мир 2026'));
console.log(analyzieString(''));
