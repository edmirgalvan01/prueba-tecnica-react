import React from 'react';
import '../Field/Field.css';

function FieldSelected({
   fields,
   formItems,
   setFormItems,
   label,
   type,
   options,
   _uid,
}) {
   const handleClickRemove = (id) => {
      //Buscar index
      const index = formItems.findIndex((item) => item._uid === id);

      //creamos una nueva lista de campos
      const newFormItems = [...formItems];

      //quitamos de la nueva lista
      newFormItems.splice(index, 1);

      //actualizamos el estado
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
               handleClickRemove(_uid);
            }}
            className='field--button'
         >
            Eliminar
         </button>
      </div>
   );
}

export { FieldSelected };
