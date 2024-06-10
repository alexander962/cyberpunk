import React from 'react';

import styles from './Wrapper.module.scss';
import { WrapperProps } from './Wrapper.types';

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
