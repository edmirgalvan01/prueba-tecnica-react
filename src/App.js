import React from 'react';
import './App.css';
import { Field } from './components/Field/Field';
import { FormSelection } from './components/FormSelection/FormSelection';
import { Form } from './components/Form/Form';

function App() {
   const [form, setForm] = React.useState([]);

   const fields = [
      {
         type: 'text',
         label: 'First name',
         _uid: 1,
      },
      {
         type: 'text',
         label: 'Last name',
         _uid: 2,
      },
      {
         type: 'email',
         label: 'Email',
         _uid: 3,
      },
      {
         type: 'password',
         label: 'Password',
         _uid: 4,
      },
      {
         type: 'checkbox',
         label: 'Checkbox',
         _uid: 5,
      },
      {
         type: 'select',
         label: 'Select',
         _uid: 6,
      },
   ];

   const handleClickAdd = () => {
      console.log('Add!');
   };

   return (
      <>
         <FormSelection>
            <h1>Selecciona los campos que desees agregar</h1>
            {fields.map((field) => {
               return (
                  <Field key={field._uid}>
                     <div className='field'>
                        <label className='field--label'>{field.label}</label>
                        <input type={field.type} className='field--input' />
                        <button onClick={handleClickAdd} className='add-field'>
                           Agregar
                        </button>
                     </div>
                  </Field>
               );
            })}
         </FormSelection>
         <Form>
            <h1>Asi se ve tu formulario hasta ahora</h1>
            <div className='field'>
               <label className='field--label'>Last Name</label>
               <input type='text' className='field--input' />
               <button className='add-field'>Agregar</button>
            </div>
            <div className='field'>
               <label className='field--label'>Last Name</label>
               <input type='text' className='field--input' />
               <button className='add-field'>Agregar</button>
            </div>
         </Form>
      </>
   );
}

export default App;
