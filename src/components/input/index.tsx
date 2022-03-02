import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useFormContext } from '../context';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  validate?: Function;
  helperText?: string;
};

const Input: FC<InputProps> = ({ validate, placeholder, name, value, defaultValue, helperText, maxLength, minLength, onChange, onBlur, required, ...props }) => {
  const { hasContext, setModel } = useFormContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState(false);

  const initialSetContextData = () => {
    if (hasContext) {
      setModel({ field: name as string, value: defaultValue || value, hasError: error });
    }
  };

  useEffect(initialSetContextData);

  const handleValidate = useCallback((value: string) => {
    let hasError = false;

    if (required && !value) {
      hasError = true;
    };

    if (value && minLength) {
      hasError = value.length >= minLength;
    };

    if (value && maxLength) {
      hasError = value.length <= maxLength;
    };

    if (validate) {
      hasError = validate(value);
    };

    setError(hasError);

    if (hasContext) {
      setModel({ field: name!, value, hasError });
    };
  }, [hasContext, maxLength, minLength, name, required, setModel, validate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleValidate(event.target.value);
    onChange && onChange(event)
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const targetValue = event.target.value;
    const name = event.target.name;
    let hasError = false;

    if (required && !!value) {
      hasError = true;
    };

    if (validate) {
      hasError = validate(targetValue);
    };

    setError(hasError);

    if (hasContext) {
      setModel({ field: name, value: targetValue, hasError });
    };

    onBlur && onBlur(event);
  }

  return (<div id={`input-${name}`}>
    {placeholder ? <span>{`${placeholder}${required ? ' *' : ''} `}</span> : ''}
    <input {...props} ref={inputRef} onChange={handleChange} onBlur={handleBlur} value={value} defaultValue={defaultValue} name={name} required={required} />
    {error ? <span style={{ color: 'red' }}>{helperText}</span> : null}
  </div>);
};

export default Input;
