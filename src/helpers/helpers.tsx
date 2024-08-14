export function checkIBANCountry(
  ibanNumber: string,
  countryCode: string,
): string | boolean {
  const code = ibanNumber.slice(0, 2);
  return code.toUpperCase() === countryCode.toUpperCase();
}

export function checkIBANLength(ibanNumber: string, length: number): boolean {
  return ibanNumber.length === length;
}

// https://stackoverflow.com/questions/929910/modulo-in-javascript-large-number#answer-45189509
export function isIBAN(s: string) {
  const rearranged = s.substring(4, s.length) + s.substring(0, 4);
  const numeric = Array.from(rearranged)
    .map((c) => (isNaN(parseInt(c)) ? (c.charCodeAt(0) - 55).toString() : c))
    .join('');
  const remainder = Array.from(numeric)
    .map((c) => parseInt(c))
    .reduce((remainder, value) => (remainder * 10 + value) % 97, 0);

  return remainder === 1;
}

//https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript#answer-51321865
export function removeSpacesFromString(s: string): string {
  return s.replace(/ /g, '');
}

export function setCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}
