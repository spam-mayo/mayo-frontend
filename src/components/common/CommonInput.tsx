import { forwardRef, InputHTMLAttributes, useCallback, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isVisible?: boolean;
}

const CommonInput = forwardRef<HTMLInputElement, Props>(({ label, error, isVisible, ...rest }, ref) => {
  const [visible, setVisible] = useState(false);

  const onClickShowPw = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  return (
    <div className="input-container">
      <label>{label}</label>
      {isVisible ? (
        <>
          <div className="input-box visible">
            <input {...rest} ref={ref} type={visible ? 'text' : 'password'} />
            <i className={visible ? 'icon-eye' : 'icon-eye-blocked'} onClick={onClickShowPw} />
            {error && <p className="err-msg">{error}</p>}
          </div>
        </>
      ) : (
        <>
          <input {...rest} ref={ref} />
          {error && <p className="err-msg">{error}</p>}
        </>
      )}
    </div>
  );
});

CommonInput.displayName = 'CommonInput';

export default CommonInput;
