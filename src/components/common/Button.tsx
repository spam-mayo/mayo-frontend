import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'blue' | 'gray' | 'yellow';
type ButtonType = 'submit' | 'button';

interface Props {
  size?: ButtonSize;
  color?: ButtonColor;
  outline?: boolean;
  text?: boolean;
  onClick?: () => void;
  type?: ButtonType;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  size = 'medium',
  color = 'blue',
  outline = false,
  text = false,
  onClick,
  type,
  ...rest
}) => {
  return (
    <button type={type} onClick={onClick} className={classNames('Button', size, color, { outline, text })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
