import React from 'react';
import { Field } from './components/Field/Field';
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

   const handleClickAdd = (id) => {
      //Buscar index
      const index = fields.findIndex((item) => item._uid === id);

      //creamos una nueva lista de campos
      const newFormItems = [...formItems];

      //agregamos a la nueva lista
      newFormItems.push(fields[index]);

      //Agregamos al estado
      setFormItems(newFormItems);
   };

   const handleClickRemove = (id) => {
      //Buscar index
      const index = formItems.findIndex((item) => item._uid === id);

      console.log(index);

      //creamos una nueva lista de campos
      const newFormItems = [...formItems];

      //quitamos de la nueva lista
      newFormItems.splice(index, 1);

      //actualizamos el estado
      setFormItems(newFormItems);
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
                           {field.type === 'select' ? (
                              <select className='field--input'>
                                 {field.options.map((option) => (
                                    <option key={option._uid}>
                                       {option.name}
                                    </option>
                                 ))}
                              </select>
                           ) : (
                              <input
                                 type={field.type}
                                 className='field--input'
                              />
                           )}
                        </div>
                        <button
                           onClick={() => {
                              handleClickAdd(field._uid);
                           }}
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
               {formItems.map((field) => {
                  return (
                     <Field className='field' key={field._uid}>
                        <div className='field--info'>
                           <label className='field--label'>{field.label}</label>
                           {field.type === 'select' ? (
                              <select className='field--input'></select>
                           ) : (
                              <input
                                 type={field.type}
                                 className='field--input'
                              />
                           )}
                        </div>
                        <button
                           onClick={() => {
                              handleClickRemove(field._uid);
                           }}
                           className='field--button'
                        >
                           Eliminar
                        </button>
                     </Field>
                  );
               })}
            </section>
            <button className='form--button__save'>Guardar</button>
         </FormContainer>
      </Layout>
   );
}

export default App;
