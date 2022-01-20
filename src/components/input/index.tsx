import React, { FC, useEffect, useRef, useState } from 'react'
import { useFormContext } from '../context';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  validate?: Function;
  helperText?: string;
};

const Input: FC<InputProps> = ({ validate, placeholder, name, value, defaultValue, helperText, onChange, ...props }) => {
  const { hasContext, setModel } = useFormContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState(false);

  const loadData = () => {
    if (hasContext) {
      setModel({ field: name as string, value: defaultValue || value, hasError: error });
    }
  }

  useEffect(loadData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.target.value;
    const name = event.target.name;
    let hasError = false;

    if (validate) {
      hasError = validate(targetValue);
      if (hasError !== error) {
        setError(hasError);
      };
    };

    if (hasContext) {
      setModel({ field: name, value: targetValue, hasError });
    };
    onChange && onChange(event)
  }

  return (<div>
    {placeholder ? <span>{`${placeholder} `}</span> : ''}
    <input {...props} ref={inputRef} onChange={handleChange} value={value} defaultValue={defaultValue} name={name} />
    {error ? <span style={{ color: 'red' }}>{helperText}</span> : null}
  </div>);
};

export default Input;
