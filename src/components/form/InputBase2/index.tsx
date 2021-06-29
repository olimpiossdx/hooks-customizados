// import React, { useRef, useEffect, useCallback, useState, HtmlHTMLAttributes } from 'react';

// import { FormControl, InputLabel, Input, FormHelperText, FormHelperTextTypeMap, InputLabelProps } from '@material-ui/core';
// import { InputProps } from '@material-ui/core/Input';
// import { InputBaseComponentProps } from '@material-ui/core/InputBase';
// import { fireEvent } from '@testing-library/dom';
// import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';

// export type FieldState<T> = {
//   hasError: boolean,
//   value: T,
//   error: boolean;
//   onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
// };

// interface FieldProps extends InputProps {
//   // fieldDefaultState: FieldState<string>
//   // id: string,
//   label: string;
// };

// const InputField2: React.FC<FieldProps> = (props) => {
//   const refInput = useRef<HTMLInputElement>();
//   const refHelper = useRef<HTMLElement>();
//   const refLabel = useRef<HTMLLabelElement>();
//   let x = false;

//   const error = { erro: false, message: '' };
//   let isError = undefined;

//   const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   const handleFocus = (e: any) => {

//     console.log('input is focussed');
//   }

//   const handleBlur = function (this: HTMLInputElement, event: Event) {

//   };

//   const handleValidate = function (this: HTMLInputElement, event: Event) {
//     const { current } = refInput;

//     const isEmailValid = current && current.value ? emailRegExp.test(current.value) : false;
//     // console.log('refLabel.current', refLabel.current?.classList.add('Mui-error'));
//     // console.log('refLabel.current', refLabel.current);
//     // Mui-error Mui-error


//     if ((!this.validity.valid || !isEmailValid) && refHelper.current) {


//       refHelper.current.innerText = 'endereço de e-mail inválido';
//       isError = true;
//     } else if (refHelper.current) {
//       refHelper.current.innerText = '';
//     };

//     x = true;

//     console.log(x, refHelper);
//   };

//   useEffect(() => {
//     const { current } = refInput;

//     // current?.addEventListener('focus', handleFocus);
//     // current?.addEventListener('blur', handleBlur);

//     //     current?.addEventListener('input', handleValidate);


//     //     return () => {
//     //       current?.removeEventListener('focus', handleFocus);
//     //       current?.removeEventListener('blur', handleBlur);
//     //       current?.addEventListener('input', handleValidate);
//     //     }
//     //   });


//     //   return (<FormControl fullWidth>
//     //     <InputLabel innerRef={refLabel} error={true} htmlFor={`input-${props.name}`}>
//     //       {props.label}
//     //     </InputLabel>
//     //     <Input
//     //       id={`input-${props.name}`}
//     //       fullWidth
//     //       {...props}
//     //       error={!!refHelper?.current?.textContent}
//     //       inputRef={refInput}

//     //     // ref={fieldRef}
//     //     />
//     //     <FormHelperText innerRef={refHelper} error={isError}>{error.message}</FormHelperText>
//     //   </FormControl>);
//     // }


//     // export default InputField2;
export default function InputField2() { };
