import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import styles from './FormField.module.scss';

interface FormFieldProps {
  placeholder: string;
  type: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  errors: FieldErrors;
}

const FormField: React.FC<FormFieldProps> = ({
  placeholder,
  type,
  name,
  register,
  required,
  errors,
}) => {
  return (
    <div className={styles.formField}>
      <input type={type} placeholder={placeholder} {...register(name, { required })} />
      {errors[name] && <div className={styles.error}>Заполните данное поле!</div>}
    </div>
  );
};

export default FormField;
