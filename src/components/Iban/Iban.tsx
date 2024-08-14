import Input from '../Input/Input';
import './Iban.css';
import {
  CODE_LENGTH,
  COUNTRY_CODE,
  MESSAGE_CODES,
} from '../../constants/constants';
import ErrorMessage from '../Error/ErrorMessage';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  checkIBANCountry,
  checkIBANLength,
  isIBAN,
  removeSpacesFromString,
  setCurrentTime,
} from '../../helpers/helpers';
import Attempts from '../Attempts/Attempts';
import Suggestions from '../Suggestions/Suggestions';

type Iban = { label: string };
export type ValidationInput = {
  message: string;
  class: string;
};

export type ValidationHistory = ValidationInput & {
  time: string;
};

export default function IBAN({ label }: Iban) {
  const [validatedInput, setValidatedInput] = useState<ValidationInput[]>([]);
  const [validationHistory, setValidationHistory] = useState<ValidationHistory[]>(
    [],
  );

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const val = removeSpacesFromString(ev.target.value.toUpperCase());

    // input validation
    const inputValidationMessages = {
      country: {
        message:
          MESSAGE_CODES[
            checkIBANCountry(val, COUNTRY_CODE)
              ? 'correctcountry'
              : 'wrongcountry'
          ],
        class: checkIBANCountry(val, COUNTRY_CODE) ? 'green' : 'red',
      },
      lenght: {
        message:
          MESSAGE_CODES[
            checkIBANLength(val, CODE_LENGTH) ? 'correctlength' : 'wronglength'
          ],
        class: checkIBANLength(val, CODE_LENGTH) ? 'green' : 'red',
      },
      iban: {
        message:
          MESSAGE_CODES[
            checkIBANCountry(val, COUNTRY_CODE) &&
            checkIBANLength(val, CODE_LENGTH) &&
            isIBAN(val)
              ? 'correctiban'
              : 'wrongiban'
          ],
        class:
          checkIBANCountry(val, COUNTRY_CODE) &&
          checkIBANLength(val, CODE_LENGTH) &&
          isIBAN(val)
            ? 'green'
            : 'red',
      },
    };
    setValidatedInput(Object.values(inputValidationMessages));
  };

  //  submit validate
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const elements = form.elements[0] as HTMLInputElement;

    const success = isIBAN(
      removeSpacesFromString(elements.value.toUpperCase()),
    );

    setValidationHistory((prevState) => [
      ...prevState,
      {
        message: elements.value,
        class: success ? 'green' : 'red',
        time: setCurrentTime()
      },
    ]);
  };

  return (
    <div className="iban_input_container">
      <fieldset className="iban_input_wrapper">
        <legend className="iban_ibm-plex-sans-extralight-italic iban_type-small">
          {label}
        </legend>
        <Input
          type="text"
          name="iban"
          placeholder="Enter a number"
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <button
          className="iban_input_submit iban_ibm-plex-sans-regular"
          type="submit"
          form="iban-form"
        >
          Submit
        </button>
        <Suggestions suggestions={validationHistory} name="iban" />
        <ErrorMessage messages={validatedInput} />
        <Attempts attempts={validationHistory} />
      </fieldset>
    </div>
  );
}
