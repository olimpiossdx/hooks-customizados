import React, { useRef } from 'react'

const Form: React.FC = ({ children }) => {
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleSubmit = function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  };

  return (<form ref={formRef} onSubmit={handleSubmit}>
    {children}
  </form>);
};

export default Form;
