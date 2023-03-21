import { type InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const EditInput = forwardRef<HTMLInputElement, Props>(({ label, error, ...rest }, ref) => (
  <div className="edit-input-container">
    <label>{label}</label>
    <div className="edit-input">
      <input {...rest} ref={ref} />
      {error && <p>{error}</p>}
    </div>
  </div>
));

EditInput.displayName = 'EditInput';

export default EditInput;
