import { FC, useRef, useEffect, HTMLAttributes, useCallback } from 'react';
import { MDCRippleFoundation, MDCRippleAdapter } from '@material/ripple';
import { MDCFoundation } from '@material/base';

import './styles.scss';

interface IRippleProps {

};

const Ripple: FC<IRippleProps> = ({
  children, ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  function onFocus(this: any, ev: any) {
    console.log('onFocus', this, ev);
  };

  function onBlur(this: HTMLDivElement, event: Event) {
    console.log('onBlur', this, event);
  };

  function onMouseDown(this: any, ev: any) {
    console.log('onMouseDown', this, ev);
  };

  function onMouseUp(this: any, ev: any) {
    console.log('onMouseUp', this, ev);
  };
  function onTouchStart(this: any, ev: any) {
    console.log('onTouchStart', this, ev);
  };
  function onTouchEnd(this: any, ev: any) {
    console.log('onTouchEnd', this, ev);
  };

  function onKeyDown(this: any, ev: any) {
    console.log('onKeyDown', this, ev);
  };

  const onKeyUp = useCallback(function (this: HTMLDivElement, ev: Event) {
    console.log('onKeyUp', this, ev);
  }, []);

  useEffect(() => {
    divRef.current?.addEventListener('focus', onFocus);
    divRef.current?.addEventListener('blur', onBlur);
    divRef.current?.addEventListener('mousedown', onMouseDown);
    divRef.current?.addEventListener('mouseup', onMouseUp);
    divRef.current?.addEventListener('touchstart', onTouchStart);
    divRef.current?.addEventListener('touchend', onTouchEnd);
    divRef.current?.addEventListener('keydown', onKeyDown);
    divRef.current?.addEventListener('keyup', onKeyUp);

    return () => {
      divRef.current?.removeEventListener('focus', onFocus);
      divRef.current?.removeEventListener('blur', onBlur);
      divRef.current?.removeEventListener('mousedown', onMouseDown);
      divRef.current?.removeEventListener('mouseup', onMouseUp);
      divRef.current?.removeEventListener('touchstart', onTouchStart);
      divRef.current?.removeEventListener('touchend', onTouchEnd);
      divRef.current?.removeEventListener('keydown', onKeyDown);
      divRef.current?.removeEventListener('keyup', onKeyUp);
    }
  }, [onKeyUp]);

  return (
    <div {...props} ref={divRef}>
      ripple
    </div>
  )
}

export default Ripple;
