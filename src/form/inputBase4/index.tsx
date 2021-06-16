import React, { useRef, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);


const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.)+(?:[a-zA-Z0-9-]+)*$/

function InputField4() {
  const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const emailRef = useRef() as React.RefObject<HTMLInputElement>;
  const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
  const inputLabelRef = useRef() as React.RefObject<HTMLLabelElement>;
  const inputRef = useRef<HTMLDivElement>();
  // const error = emailRef;

  const handleChange1 = React.useCallback(function (this: HTMLInputElement, _e: Event) {

    console.log('inputRef.current', (inputRef.current!.lastElementChild as HTMLInputElement).value);

    const input = (inputRef.current!.lastElementChild as HTMLInputElement);
    const test = input.value.length === 0 || emailRegExp.test(input.value);
    console.log(input.value, test);
    if (test) {
      inputLabelRef.current!.className = 'MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-focused Mui-focused';
      inputRef.current!.className = 'MuiInputBase-root MuiInput-root MuiInput-underline Mui-focused MuiInputBase-formControl MuiInput-formControl';
    } else {
      inputLabelRef.current!.className = 'MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-error Mui-error MuiFormLabel-filled'
      inputRef.current!.className = 'MuiInputBase-root MuiInput-root MuiInput-underline Mui-error Mui-error MuiInputBase-formControl MuiInput-formControl';
    }
  }, []);

  const load = () => {
    const test = emailRef.current!.value.length === 0 || emailRegExp.test(emailRef.current!.value);
    emailRef.current!.className = test ? 'valid' : 'invalid';

  };

  const handleSubmit = function (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const email = emailRef.current;
    // const test = email?.value.length === 0 || emailRegExp.test(email?.value || '');

    // if (!test && email && error.current && error.current.nextElementSibling) {
    //   email.className = 'invalid';
    //   error.current.nextElementSibling.innerHTML = 'Informe email correto!';
    //   error.current.nextElementSibling.className = 'error active';
    //   return false;
    // } else {
    //   email!.className = 'valid';
    //   error.current!.nextElementSibling!.innerHTML = '';
    //   error.current!.nextElementSibling!.className = 'error';
    // }
  };

  useEffect(() => {
    inputRef.current!.addEventListener('load', load);
    inputRef.current!.addEventListener('input', handleChange1);
  }, [handleChange1]);

  return (<form ref={formRef} onSubmit={handleSubmit} className={classes.root} noValidate autoComplete='off'>

    <FormControl>
      <InputLabel htmlFor='input-simple' aria-describedby='input-simple' ref={inputLabelRef}>Name</InputLabel>
      <Input id='input-simple' ref={inputRef} />
    </FormControl>

    <FormControl>
      <InputLabel htmlFor='component-helper'>Name</InputLabel>
      <Input
        id='component-helper'
        value={name}
        onChange={handleChange}
        aria-describedby='component-helper-text'
      />
      <FormHelperText id='component-helper-text'>Some important helper text</FormHelperText>
    </FormControl>
    <FormControl disabled>
      <InputLabel htmlFor='component-disabled'>Name</InputLabel>
      <Input id='component-disabled' value={name} onChange={handleChange} />
      <FormHelperText>Disabled</FormHelperText>
    </FormControl>
    <FormControl error>
      <InputLabel htmlFor='component-error'>Name</InputLabel>
      <Input
        id='component-error'
        value={name}
        onChange={handleChange}
        aria-describedby='component-error-text'
      />
      <FormHelperText id='component-error-text'>Error</FormHelperText>
    </FormControl>
    <FormControl variant='outlined'>
      <InputLabel htmlFor='component-outlined'>Name</InputLabel>
      <OutlinedInput id='component-outlined' value={name} onChange={handleChange} label='Name' />
    </FormControl>
    <FormControl variant='filled'>
      <InputLabel htmlFor='component-filled'>Name</InputLabel>
      <FilledInput id='component-filled' value={name} onChange={handleChange} />
    </FormControl>
    <Button type='submit'>submit</Button>
  </form>);
}

export default InputField4;
