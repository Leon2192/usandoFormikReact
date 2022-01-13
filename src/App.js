import { Formik, Form, ErrorMessage } from 'formik';
import TextInput from './Components/TextInput';

const validate = (values) => {
  const errors = {}

  if(!values.name){
    errors.name = 'Requerido'
  }else if (values.name.length < 5) {
    errors.name = 'El nombre es demasiado corto.'
  }
  if(!values.lastname){
    errors.lastname = 'Requerido'
  }else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es demasiado corto.'
  }
  return errors
}

function App() {
  
  return (
    <>
    <h1>Formulario con formik</h1>
    <Formik
    initialValues={{name:'', lastname:'',email:'',}}
    validate={validate}
    onSubmit={values => console.log(values)}
    >
      <Form>
      <TextInput name='name' label='Nombre' />
      <ErrorMessage name='name' />
      <br/>
      <TextInput  name='lastname' label= 'Apellido'/>
      <ErrorMessage name='lastname' />
      <br/>
      <TextInput  name='email' label= 'Email'/>
      <ErrorMessage name='email' />
      <br/>
      <button type='submit'>Enviar</button>
      </Form>
    </Formik>
    </>
  );
}

export default App;

