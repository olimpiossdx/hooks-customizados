import { FC, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'Text' | 'Outlined' | 'Container' | 'Toggle';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconName?: string;
};

const Button: FC<IButtonProps> = ({
  variant = 'Container', endIcon, startIcon, iconName, children, disabled, ...props
}) => {
  let classNameButton = 'mdc-button mdc-button--raised';
  let classNameSpan = 'mdc-button__label';

  if (variant === 'Text') {
    classNameButton.replace('--raised', '');
  };

  if (variant === 'Outlined') {
    classNameButton.replace('--raised', '--outlined');
  };


  if (variant === 'Toggle') {

  };

  if (disabled) {
    classNameButton = classNameButton.split('mdc-button')[0];
  };

  console.log(`classNameButton`, classNameButton);

  return (
    <div className='mdc-touch-target-wrapper'>
      <button {...props} disabled={disabled} className={classNameButton}>
        {!classNameButton.includes('--rsaised') && <span className='mdc-button__ripple'></span>}
        {startIcon && <i className='material-icons mdc-button__icon' aria-hidden='true'>{iconName}</i>}
        <span className={classNameSpan}>
          {children}
        </span>
        {endIcon && <i className='material-icons mdc-button__icon' aria-hidden='true'>{iconName}</i>}
      </button>
    </div>
  );
}

export default Button;
