import React, { createContext, FC, useContext, useEffect, useRef } from 'react';
import Button from '../button';

interface IFormContext {
  field: string;
  value: any;
  hasError?: boolean;
}

interface IFormContextData {
  setModel(object: IFormContext): any;
  getModel(key?: string): any;
  deleteModel(key: string): void;
  noneInvalid: () => boolean;
  hasContext: boolean;
}

export const FormContext = createContext<IFormContextData>({} as IFormContextData);

interface IForm extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  model?: any;
};

const Form: FC<IForm> = ({ model, children, ...props }) => {
  const mockUp = useRef<{ [key: string]: any }>(model || {});
  const buttonRef = React.createRef<HTMLButtonElement>();

  const initialStateButtonRef = () => {
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
    }
  };

  useEffect(initialStateButtonRef);

  const noneInvalid = () => {
    let hasError = true;
    const fileds = { ...mockUp.current };

    if (fileds) {
      hasError = Object.values<IFormContext>(fileds).map((item) => item.hasError).includes(true);
    };

    if (buttonRef.current) {
      buttonRef.current.disabled = hasError;
    }

    return hasError;
  };


  const setModel = (object: IFormContext) => {
    const mockupRef = mockUp.current!;

    if (object === undefined || object === null)
      return mockupRef;

    mockUp.current[object.field] = object;
    noneInvalid();
    console.log('mockUp', mockUp.current[object.field]);
  };

  const getModel = (key?: string) => {
    const mockupRef = mockUp.current!;
    if (key) {
      return mockupRef[key];
    };

    return mockupRef;
  };

  const deleteModel = (key: string) => {
    delete mockUp.current[key];
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit - mockUp', mockUp);
  };

  return (
    <FormContext.Provider value={{ setModel, getModel, deleteModel, noneInvalid, hasContext: true }}>
      <form {...props} onSubmit={submit} >
        {children}
        <Button ref={buttonRef} />
      </form>
    </FormContext.Provider>
  )
}

export const useFormContext = (): IFormContextData => {
  const context = useContext(FormContext);
  return context;
}

export default Form
