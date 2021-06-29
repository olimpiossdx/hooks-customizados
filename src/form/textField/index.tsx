import React, { useRef, useEffect } from 'react';
import { Button, TextField, FormControl, InputLabel, OutlinedInput, FormHelperText, Input, FilledInput } from '@material-ui/core';

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function InputField4() {
  const textFieldRef = useRef() as React.RefObject<HTMLDivElement>;
  //((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined

  const inputRef = useRef() as React.RefObject<HTMLInputElement>;
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const error = inputRef;
  let x = false;

  const handleChange = React.useCallback(function (this: HTMLInputElement, _e: Event) {
    const email = inputRef.current;
    const test = (email && email.value.length === 0) || emailRegExp.test(email?.value || '');


    if (test) {
      // (textFieldRef.current!.error as any)
    }

    // if(test){
    //  textFieldRef.current!.nextElementSibling!.innerHTML= '';
    // }else{
    //   textFieldRef.current!.nextElementSibling!.innerHTML= 'informe email correto';
    // }
    // if (test) {
    //   email!.className = 'valid';
    //   error!.current!.nextElementSibling!.innerHTML = '';
    //   error.current!.nextElementSibling!.className = 'Mui-error';

    // } else {
    //   email!.className = 'invalid';
    //   error.current!.nextElementSibling!.className = 'error';
    //   error.current!.nextElementSibling!.innerHTML = 'Informe email correto!';
    //   error.current!.nextElementSibling!.className = 'error active';
    // }

  }, [error]);

  const load = () => {
    // const test = inputRef.current!.value.length === 0 || emailRegExp.test(inputRef.current!.value);
    // inputRef.current!.className = test ? 'valid' : 'invalid';

  };
  

  const handleSubmit = function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = inputRef.current;
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
    inputRef.current?.addEventListener('load', load);
    x = true;
    inputRef.current?.addEventListener('input', handleChange);
  }, [handleChange]);

  let rest = {};

  if (x) {
    rest = {
      error: true,
      helperText: 'Incorrect entry.'
    };
  }else{

  }

  return (<>
    <form ref={formRef} onSubmit={handleSubmit} style={{ margin: 10 }}>
      <TextField
        id='input-field'
        name='input-field'
        ref={textFieldRef}
        inputRef={inputRef}
        label='Error'
        defaultValue='Hello World'
        variant='outlined'
        {...rest}
      />
      <Button type='submit' variant='outlined'>submit</Button>
    </form>


  </>);
}

export default InputField4;
