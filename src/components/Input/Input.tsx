import { ChangeEvent, FormEvent } from 'react';
import './Input.css';

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (ev: FormEvent<HTMLFormElement>) => void;
};
export default function Input({
  type,
  name,
  placeholder,
  onChange,
  onSubmit,
}: InputProps) {
  return (
    <form onSubmit={onSubmit} id="iban-form">
      <input
        list={name}
        className="iban_input_field iban_ibm-plex-sans-light iban_type-medium"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </form>
  );
}
