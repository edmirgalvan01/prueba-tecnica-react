import React from 'react';
import './Field.css';

function Field({
   fields,
   formItems,
   setFormItems,
   label,
   type,
   options,
   _uid,
}) {
   const handleClickAdd = (id) => {
      //Buscar index
      const index = fields.findIndex((item) => item._uid === id);
      console.log(fields[index]);
      //creamos una nueva lista de campos
      const newFormItems = [...formItems];

      //agregamos a la nueva lista
      newFormItems.push(fields[index]);

      //Agregamos al estado
      setFormItems(newFormItems);
   };

   return (
      <div className='field'>
         <div className='field--info'>
            <label className='field--label'>{label}</label>
            {type === 'select' ? (
               <select className='field--input'>
                  {options.map((option) => (
                     <option key={option._uid}>{option.name}</option>
                  ))}
               </select>
            ) : (
               <input type={type} className='field--input' />
            )}
         </div>
         <button
            onClick={() => {
               handleClickAdd(_uid);
            }}
            className='field--button'
         >
            Agregar
         </button>
      </div>
   );
}

export { Field };
