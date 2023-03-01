import type { FC } from 'react';
import classNames from 'classnames';
import './style/common.scss';
import './style/Button.scss';

const Button: FC = ({ children, size, color, outline, text, ...rest }) => {
  return (
    <>
      <button className={classNames('Button', size, color, { outline, text })} {...rest}>
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
