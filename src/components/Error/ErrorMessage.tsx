import { ValidationInput } from '../Iban/Iban';
import './ErrorMessage.css';

export default function ErrorMessage({
  messages,
}: {
  messages: ValidationInput[];
}) {
  return messages.length ? (
    <div>
      <ul className="iban_input_error_list">
        {messages.map((m: ValidationInput, i: number) => (
          <li
            className={`iban_input_error_list_item iban_ibm-plex-sans-medium iban_type-small ${m.class}`}
            key={i}
          >
            {m.message}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}
