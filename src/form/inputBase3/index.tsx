import React, { useRef, useEffect } from "react";

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function InputField3() {
  const emailRef = useRef() as React.RefObject<HTMLInputElement>;
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const error = emailRef;

  const handleChange = function (this: HTMLInputElement, _e: Event) {
    const email = emailRef.current;
    const test = (email && email.value.length === 0) || emailRegExp.test(email?.value || '');

    if (test) {
      email!.className = "valid";
      error!.current!.nextElementSibling!.innerHTML = "";
      error.current!.nextElementSibling!.className = "error";

    } else {
      email!.className = "invalid";
      error.current!.nextElementSibling!.className = "error";
      error.current!.nextElementSibling!.innerHTML = "Informe email correto!";
      error.current!.nextElementSibling!.className = "error active";
    }
  };

  const load = () => {
    const test = emailRef.current!.value.length === 0 || emailRegExp.test(emailRef.current!.value);
    emailRef.current!.className = test ? "valid" : "invalid";

  };

  const handleSubmit = function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = emailRef.current;
    const test = email?.value.length === 0 || emailRegExp.test(email?.value || '');

    if (!test && email && error.current && error.current.nextElementSibling) {
      email.className = "invalid";
      error.current.nextElementSibling.innerHTML = 'Informe email correto!';
      error.current.nextElementSibling.className = "error active";
      return false;
    } else {
      email!.className = "valid";
      error.current!.nextElementSibling!.innerHTML = "";
      error.current!.nextElementSibling!.className = "error";
    }
  };

  useEffect(() => {

    emailRef.current?.addEventListener('load', load);
    emailRef.current?.addEventListener('input', handleChange);

    return () => {
      emailRef.current!.removeEventListener('load', load);
      emailRef.current!.removeEventListener('input', handleChange);
    };
  }, [handleChange]);

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
      <p style={{ width: "300px" }}>
        <label htmlFor="mail" style={{ width: "300px" }}>
          <span>Por favor escreva seu email:</span>
          <input type="text" className="mail" id="mail" name="mail" ref={emailRef} width='100%' />
          <span className="error" aria-live="polite"></span>
        </label>
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputField3;
