import React, { useRef, useEffect } from 'react';
import './styles.css';

const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

function InputField3() {
  const emailRef = useRef() as React.RefObject<HTMLInputElement>;
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const error = emailRef;

  const handleChange = React.useCallback(function (this: HTMLInputElement, _e: Event) {
    const email = emailRef.current;
    const test = (email && email.value.length === 0) || emailRegExp.test(email?.value || '');

    if (test) {
      email!.className = 'valid';
      error!.current!.nextElementSibling!.innerHTML = '';
      error.current!.nextElementSibling!.className = 'error';

    } else {
      email!.className = 'invalid';
      error.current!.nextElementSibling!.innerHTML = 'Informe email correto!';
    }
  }, [error]);

  const load = () => {
    const test = emailRef.current!.value.length === 0 || emailRegExp.test(emailRef.current!.value);
    emailRef.current!.className = test ? 'valid' : 'invalid';

  };

  const handleSubmit = function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = emailRef.current;
    const test = email?.value.length === 0 || emailRegExp.test(email?.value || '');

    if (!test && email && error.current && error.current.nextElementSibling) {
      email.className = 'invalid';
      error.current.nextElementSibling.innerHTML = 'Informe email correto!';
      error.current.nextElementSibling.className = 'error active';
      return false;
    } else {
      email!.className = 'valid';
      error.current!.nextElementSibling!.innerHTML = '';
      error.current!.nextElementSibling!.className = 'error';
    }
  };

  useEffect(() => {
    emailRef.current?.addEventListener('load', load);
    emailRef.current?.addEventListener('input', handleChange);
  }, [handleChange]);

  return (<>
    <form ref={formRef} onSubmit={handleSubmit}>
      <p>
        <label htmlFor='mail'>
          <span>Please enter an email address:</span>
          <input type='text' className='mail' id='mail' name='mail' ref={emailRef} />
          <span className='error' aria-live='polite'></span>
        </label>
      </p>
      <button type='submit'>Submit</button>
    </form>
  </>);
};

export default InputField3;
