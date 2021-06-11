import React, { useRef, useEffect, DetailedHTMLProps, FormHTMLAttributes } from "react";

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function InputField3() {
  const emailRef = useRef<HTMLInputElement | undefined>();
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const error = emailRef;

  const handleChange = (e: any) => {
    const email = emailRef.current;
    // var test = (email && email.value.length === 0) || emailRegExp.test(email.value);

    // if (test) {
    //   email.className = "valid";
    //   error.current.nextSibling.innerHTML = "";
    //   error.current.nextSibling.className = "error";

    // } else {
    //   email.className = "invalid";
    //   error.current.nextSibling.className = "error";
    //   error.current.nextSibling.innerHTML = "Informe email correto!";
    //   error.current.nextSibling.className = "error active";
    // }

    console.log(e.target.value, test);
    console.log();
  };

  const load = () => {
    // var test = emailRef?.current.value.length === 0 || emailRegExp.test(emailRef.current.value);
    // emailRef.current.className = test ? "valid" : "invalid";
  };

  const handleSubmit = (e: any) => {
    if (!!emailRef.current && !!emailRef.current && !!error.current && !!error.current.nextElementSibling) return;

    e.preventDefault();
    const email = emailRef.current;

    var test = email?.value.length === 0 || emailRegExp.test(email?.value || '');

    if (!test && email && error.current && error.current.nextElementSibling) {
      email.className = "invalid";
      error.current.nextElementSibling.innerHTML = 'Informe email correto!';
      error.current.nextElementSibling.className = "error active";
      return false;
    } else {
      // email.className = "valid";
      // error.current.nextSibling.innerHTML = "";
      // error.current.nextSibling.className = "error";
    }
  };

  useEffect(() => {

    // emailRef.current?.addEventListener('load', load);
    // emailRef.current?.addEventListener('input', handleChange);
    // formRef.current?.addEventListener('submit', handleSubmit);

    return () => {
      // console.log('emailRef.current', emailRef.current);
      // console.log('formRef.current', formRef.current);
      // emailRef.current && emailRef.current?.removeEventListner('load', load);
      // emailRef.current && emailRef.current?.removeEventListner('input', handleChange);
      // formRef.current && formRef.current?.removeEventListner('submit', handleSubmit);
    };
  }, [])

  return (
    <form ref={formRef} style={{ width: '100%' }}>
      <p style={{ width: "300px" }}>
        <label htmlFor="mail" style={{ width: "300px" }}>
          <span>Por favor escreva seu email:</span>
          {/* <input type="text" className="mail" id="mail" name="mail" ref={emailRef} width='100%' /> */}
          <span className="error" aria-live="polite"></span>
        </label>
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputField3;
