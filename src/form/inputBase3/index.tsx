import React, { useRef, useEffect } from 'react';
import './styles.css';

const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

type InputProps = {
  value?: string;
};

const InputField3: React.FC<InputProps> = ({
  value
}) => {
  const emailRef = useRef({ defaultValue: value }) as React.RefObject<HTMLInputElement>;
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleChange = React.useCallback(function (this: HTMLInputElement, _e: Event) {
    const email = emailRef.current;
    const test = (email && email.value.length === 0) || emailRegExp.test(email?.value || '');

    if (test) {
      email!.className = 'valid';
      emailRef!.current!.nextElementSibling!.innerHTML = '';
      emailRef.current!.nextElementSibling!.className = 'error';

    } else {
      email!.className = 'invalid';
      emailRef.current!.nextElementSibling!.innerHTML = 'Informe email correto!';
    }
  }, [emailRef]);

  const load = () => {
    const test = emailRef.current!.value.length === 0 || emailRegExp.test(emailRef.current!.value);
    emailRef.current!.className = test ? 'valid' : 'invalid';
  };

  const handleSubmit = function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = emailRef.current;
    const test = email?.value.length === 0 || emailRegExp.test(email?.value || '');

    if (!test && email && emailRef.current && emailRef.current.nextElementSibling) {
      email.className = 'invalid';
      emailRef.current.nextElementSibling.innerHTML = 'Informe email correto!';
      emailRef.current.nextElementSibling.className = 'error active';
      return false;
    } else {
      email!.className = 'valid';
      emailRef.current!.nextElementSibling!.innerHTML = '';
      emailRef.current!.nextElementSibling!.className = 'error';
    }
  };

  useEffect(() => {
    const email = emailRef.current;
    const test = (email && email.value.length === 0) || emailRegExp.test(email?.value || '');

    if (test) {
      email!.className = 'valid';
      emailRef!.current!.nextElementSibling!.innerHTML = '';
      emailRef.current!.nextElementSibling!.className = 'error';

    } else {
      email!.className = 'invalid';
      emailRef.current!.nextElementSibling!.innerHTML = 'Informe email correto!';
    }
  }, []);

  useEffect(() => {
    emailRef.current?.addEventListener('load', load);
    emailRef.current?.addEventListener('input', handleChange);
  }, [handleChange]);

  return (<>
    <form ref={formRef} onSubmit={handleSubmit}>
      <p>
        <label htmlFor='mail'>
          <span>Please enter an email address:</span>
          <input type='text' className='mail' id='mail' name='mail' ref={emailRef} defaultValue={value} />
          <span className='error' aria-live='polite'></span>
        </label>
      </p>
      <button type='submit'>Submit</button>
    </form>
  </>);
};

export default InputField3;
