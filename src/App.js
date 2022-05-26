import React from 'react';
import { Field } from './components/Field/Field';
import { FieldSelected } from './components/FieldSelected/FieldSelected';
import { FormContainer } from './components/FormContainer/FormContainer';
import { Layout } from './components/Layout/Layout';

function App() {
   const [formItems, setFormItems] = React.useState([]);

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
         options: [
            {
               name: 'Opcion 1',
               _uid: 1,
            },
            {
               name: 'Opcion 2',
               _uid: 2,
            },
            {
               name: 'Opcion 3',
               _uid: 3,
            },
         ],
      },
   ];

   return (
      <Layout>
         <FormContainer>
            <h1>Selecciona los campos que desees agregar</h1>
            <section className='form--container__list'>
               {fields.map((field) => {
                  return (
                     <Field
                        fields={fields}
                        formItems={formItems}
                        setFormItems={setFormItems}
                        label={field.label}
                        type={field.type}
                        options={field.options}
                        _uid={field._uid}
                     />
                  );
               })}
            </section>
         </FormContainer>
         <FormContainer>
            <h1>Asi se ve tu formulario hasta ahora</h1>
            <section className='form--container__list'>
               {formItems.map((field) => {
                  return (
                     <FieldSelected
                        fields={fields}
                        formItems={formItems}
                        setFormItems={setFormItems}
                        label={field.label}
                        type={field.type}
                        options={field.options}
                        _uid={field._uid}
                     />
                  );
               })}
            </section>
            <button className='form--button__save'>Guardar</button>
         </FormContainer>
      </Layout>
   );
}

export default App;
