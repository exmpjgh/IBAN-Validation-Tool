import { ValidationInput } from '../Iban/Iban';

export default function Suggestions({
  suggestions,
  name,
}: {
  suggestions: ValidationInput[];
  name: string;
}) {
  return (
    <div>
      <datalist id={name}>
        {suggestions.map((s: ValidationInput, i: number) =>
          s.class === 'green' ? (
            <option key={i} value={s.message}></option>
          ) : null,
        )}
      </datalist>
    </div>
  );
}
