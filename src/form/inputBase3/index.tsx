import React, { useRef, useEffect, useCallback } from 'react';
import { InputHTMLAttributes } from 'react';
import './styles.css';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  validated?: ((value: any) => boolean) | RegExp;
};

const InputField3: React.FC<InputProps> = ({
  children, validated, required, ...props
}) => {
  const emailRef = useRef({ ...props, required: required }) as unknown as React.RefObject<HTMLInputElement>;

  const handleChange = React.useCallback(function (this: HTMLInputElement, _e: Event) {
    if (!required) {
      return;
    };

    const email = emailRef.current;
    let test = email && email.value.length === 0;
    if (validated instanceof RegExp) {
      test = validated.test(email?.value || '');
    } else if (validated) {
      test = validated(email?.value || '');
    };


    if (test) {
      email!.className = 'valid';
      emailRef!.current!.nextElementSibling!.innerHTML = '';
      emailRef.current!.nextElementSibling!.className = 'error';

    } else {
      email!.className = 'invalid';
      emailRef.current!.nextElementSibling!.innerHTML = 'Informe email correto!';
    }
  }, [emailRef, validated, required]);

  const load = useCallback(() => {
    if (!required) {
      return;
    };

    let test = emailRef.current!.value.length === 0;

    if (validated instanceof RegExp) {
      test = validated.test(emailRef.current!.value || '');
    } else if (validated) {
      test = validated(emailRef.current!.value || '');
    };

    emailRef.current!.className = test ? 'valid' : 'invalid';
  }, [validated, required])


  useEffect(() => {
    if (!required) {
      return;
    };

    const email = emailRef.current;
    let test = (email && email.value.length === 0);

    if (validated instanceof RegExp) {
      test = validated.test(emailRef.current!.value || '');
    } else if (validated) {
      test = validated(emailRef.current!.value || '');
    };

    if (test && validated) {
      email!.className = 'valid';
      emailRef!.current!.nextElementSibling!.innerHTML = '';
      emailRef.current!.nextElementSibling!.className = 'error';
    } else if (validated) {
      email!.className = 'invalid';
      emailRef.current!.nextElementSibling!.innerHTML = 'Informe email correto!';
    };
  }, [validated, required]);

  useEffect(() => {
    emailRef.current?.addEventListener('load', load);
    emailRef.current?.addEventListener('input', handleChange);
  }, [handleChange, load]);

  return (<>
    <label htmlFor='mail'>
      <span>Please enter an email address:</span>
      <br />
      <input {...props} ref={emailRef} />
      <br />
      <span className='error' aria-live='polite'></span>
    </label>
  </>);
};

export default InputField3;
