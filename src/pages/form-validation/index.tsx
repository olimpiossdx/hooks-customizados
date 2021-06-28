import React from 'react'
// import InputField2 from '../../form/InputBase2'
// import InputField4 from '../../form/inputBase4'
import InputField3 from '../../form/inputBase3'


const FormValidation = () => {
  const model = {
    email: 'email@asd'
  };

  return (<>
    Adicionar validações para formulários;
    <InputField3 type='text' className='mail' id='mail' name='mail' defaultValue={model.email} />
    {/* <InputField4 /> */}

  </>)
}

export default FormValidation
