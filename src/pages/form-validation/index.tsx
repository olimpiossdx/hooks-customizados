import React, { ChangeEvent, useState } from 'react'
import Button from '../../components/button';
import Form from '../../components/form';

// import InputField2 from '../../form/InputBase2'
// import InputField4 from '../../form/inputBase4'
import InputField3 from '../../components/form/inputBase3'


const FormValidation = () => {
  const [text, setText] = useState('asd')
  const model = { email: 'minhasenha' };

  // eslint-disable-next-line no-control-regex
  const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {

    console.log(event.target.value);
    console.log(event.target);
  };

  const handelChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  };

  return (<Form>
    <p>
      Adicionar validações para formulários;
    </p>
    <br />
    <InputField3
      type='password'
      id='mail'
      name='password'
      label='Please enter an email address:'
      className='password'
      onChange={handelChange}
      defaultValue={model.email}
      required
      validated={emailRegExp} />
    <br />
    <InputField3 type='text' id='text' className='mail' name='nome'
      onChange={handelChangeText} value={text}
    />
    {/* <InputField4 /> */}
    <Button >
      variant ext
    </Button>
    <Button>
      variant outlined
    </Button>
    <Button >
      variant cont
    </Button>


  </Form>)
}

export default FormValidation
