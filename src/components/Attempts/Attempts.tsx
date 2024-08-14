import { ValidationHistory } from '../Iban/Iban';
import './Attempts.css';

export default function Attempts({
  attempts,
}: {
  attempts: ValidationHistory[];
}) {
  return attempts.length ? (
    <div className="iban_input_attempts_list">
      <h2 className="iban_ibm-plex-sans-regular iban_type-large">History</h2>
      {attempts.map((m: ValidationHistory, i: number) => (
        <div className="iban_input_attempts_list_item" key={i}>
          <span
            className={`iban_input_attempts_list_item_circle iban_input_attempts_list_item_circle-${m.class}`}
          ></span>
          <span className={`iban_ibm-plex-sans-light iban_type-medium`}>
            {m.message} {m.time}
          </span>
        </div>
      ))}
    </div>
  ) : null;
}
