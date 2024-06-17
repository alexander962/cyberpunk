import React, { FormEvent, ReactNode } from 'react';

import styles from './FormWrapper.module.scss';

interface FormWrapperProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children, onSubmit }) => {
  return (
    <form className={styles.formWrapper} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormWrapper;
