import React from 'react';

import styles from './SubmitButton.module.scss';

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button type="submit" className={styles.submitButton}>
      {text}
    </button>
  );
};

export default SubmitButton;
