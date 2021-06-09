import { useRef, useEffect } from "react";

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function InputField3() {
  const emailRef = useRef<any>();
  const formRef = useRef<any>();
  const error = emailRef;

  const handleChange = (e: any) => {
    const email = emailRef.current;
    var test = email.value.length === 0 || emailRegExp.test(email.value);

    if (test) {
      email.className = "valid";
      error.current.nextSibling.innerHTML = "";
      error.current.nextSibling.className = "error";
    } else {
      email.className = "invalid";
    }

    console.log(e.target.value, test);
    console.log();
  };

  function load() {
    // Here, we test if the field is empty (remember, the field is not required)
    // If it is not, we check if its content is a well-formed e-mail address.
    var test = emailRef?.current.value.length === 0 || emailRegExp.test(emailRef.current.value);
    emailRef.current.className = test ? "valid" : "invalid";
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    const email = emailRef.current;

    var test = email.value.length === 0 || emailRegExp.test(email.value);

    if (!test) {
      email.className = "invalid";
      error.current.nextSibling.innerHTML = "Informe email correto!";
      error.current.nextSibling.className = "error active";

      // Some legacy browsers do not support the event.preventDefault() method
      return false;
    } else {
      email.className = "valid";
      error.current.nextSibling.innerHTML = "";
      error.current.nextSibling.className = "error";
    }
  };

  useEffect(() => {
    emailRef.current.addEventListener('input', handleChange);
    emailRef.current.addEventListener('load', load);

    formRef.current.addEventListener('submit', handleSubmit);

    return () => {
      // emailRef.current.removeEventListner('load', load);
      // emailRef.current.removeEventListner('input', handleChange);
    };
  })

  return (
    <form ref={formRef} style={{ width: '100%' }}>
      <label htmlFor="mail">
        <span>Please enter an email address:</span>
        <input type="text" className="mail" id="mail" name="mail" ref={emailRef} />
        <span className="error" aria-live="polite"></span>
        <br />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputField3;
