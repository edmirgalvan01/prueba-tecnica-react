import React from 'react';
import { Field } from './components/Field/Field';
import { FormContainer } from './components/FormContainer/FormContainer';
import { Layout } from './components/Layout/Layout';

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
      <Layout>
         <FormContainer>
            <h1>Selecciona los campos que desees agregar</h1>
            <section className='form--container__list'>
               {fields.map((field) => {
                  return (
                     <Field className='field' key={field._uid}>
                        <div className='field--info'>
                           <label className='field--label'>{field.label}</label>
                           <input type={field.type} className='field--input' />
                        </div>
                        <button
                           onClick={handleClickAdd}
                           className='field--button'
                        >
                           Agregar
                        </button>
                     </Field>
                  );
               })}
            </section>
         </FormContainer>
         <FormContainer>
            <h1>Asi se ve tu formulario hasta ahora</h1>
            <section className='form--container__list'>
               {fields.map((field) => {
                  return (
                     <Field className='field' key={field._uid}>
                        <div className='field--info'>
                           <label className='field--label'>{field.label}</label>
                           <input type={field.type} className='field--input' />
                        </div>
                        <button
                           onClick={handleClickAdd}
                           className='field--button'
                        >
                           Agregar
                        </button>
                     </Field>
                  );
               })}
            </section>
         </FormContainer>
      </Layout>
   );
}

export default App;
