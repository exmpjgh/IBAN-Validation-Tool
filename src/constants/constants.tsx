type Codes = { [n: string]: string };

export const CODE_LENGTH = 22;
export const COUNTRY_CODE = 'ME';
export const MESSAGE_CODES: Codes = {
  wrongcountry:
    'Wrong country code, code should be for Montenegro and to have 2 characters',
  wronglength: 'Wrong length, code should have 22 characters',
  wrongiban: 'Wrong IBAN number',
  correctcountry: 'Correct country code',
  correctlength: 'Correct length',
  correctiban: 'Correct IBAN number',
};
