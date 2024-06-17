import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  register: UseFormRegister<any>;
  required?: boolean;
  errors: FieldErrors;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, name, label, register, required, errors }) => {
  return (
    <div className={styles.checkbox}>
      <div className={styles.checkboxBlock}>
        <input type="checkbox" id={id} {...register(name, { required })} />
        <label htmlFor={id}>{label}</label>
      </div>
      {errors[name] && <span className={styles.error}>Это поле является обязательным</span>}
    </div>
  );
};

export default Checkbox;
