import { MDCRipple } from '@material/ripple';
import { FC, ButtonHTMLAttributes, ReactNode, useRef, useEffect } from 'react';
import './styles.scss';

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
  const buttonRef = useRef() as React.RefObject<HTMLButtonElement>;
  let classNameButton = 'mdc-button mdc-button--raised';
  let classNameSpan = 'mdc-button__label';

  useEffect(() => {
    if (buttonRef.current) {
      // buttonRef.current.className = ''
      console.log(new MDCRipple(buttonRef.current));
      console.log('buttonRef', buttonRef.current);
    }
    return () => {

    }
  }, []);


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


  return (<>
    <div className="mdc-touch-target-wrapper">
      <button type="button" className="mdc-button cancel">
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">
          Cancel
        </span>
      </button>

      <button className="mdc-button mdc-button--raised next" ref={buttonRef}>
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">
          Next
        </span>
      </button>
 
      <button className="my-surface" ref={buttonRef}>
        <span className="mdc-button__ripple"></span>
        <span className="mdc-button__label">My Accessible Button</span>
        <span className="mdc-button__touch"></span>
      </button>
    </div>
  </>);
  // <div className='mdc-touch-target-wrapper'>
  //   <button {...props} disabled={disabled} className={classNameButton}>
  //     {!classNameButton.includes('--rsaised') && <span className='mdc-button__ripple'></span>}
  //     {startIcon && <i className='material-icons mdc-button__icon' aria-hidden='true'>{iconName}</i>}
  //     <span className={classNameSpan}>
  //       {children}
  //     </span>
  //     {endIcon && <i className='material-icons mdc-button__icon' aria-hidden='true'>{iconName}</i>}
  //   </button>
  // </div>
}

export default Button;
