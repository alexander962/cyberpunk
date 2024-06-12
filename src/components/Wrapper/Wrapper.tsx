import React from 'react';
import classNames from 'classnames';

import styles from './Wrapper.module.scss';
import { WrapperProps } from './Wrapper.types';

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return <div className={classNames(styles.wrapper, className)}>{children}</div>;
};

export default Wrapper;
