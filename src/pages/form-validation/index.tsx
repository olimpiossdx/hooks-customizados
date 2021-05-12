import InputField2 from '../../form/InputBase2'


const FormValidation = () => {
  return (
    <div style={{ width: 300, alignContent: 'center' }}>
      Adicionar validações para formulários;
      <InputField2 type='email' label='Teste' name='nome' defaultValue='teste' />
    </div>
  )
}

export default FormValidation
