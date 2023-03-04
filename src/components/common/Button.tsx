import type { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import './style/common.scss';
import './style/Button.scss';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'blue' | 'gray' | 'yellow';

interface Props {
  size?: ButtonSize;
  color?: ButtonColor;
  outline?: boolean;
  text?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  size = 'medium',
  color = 'blue',
  outline = false,
  text = false,
  ...rest
}) => {
  return (
    <button className={classNames('Button', size, color, { outline, text })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
