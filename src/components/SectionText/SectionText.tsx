import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './SectionText.module.scss';

interface SectionTextProps {
  children: ReactNode;
  color?: string;
  margin?: string;
}

const SectionText: React.FC<SectionTextProps> = ({ children, color = '#777', margin = '0' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Запускаем анимацию только один раз
    threshold: 0.9, // Анимация запускается, когда текст появляется на 10% в области видимости
  });

  return (
    <motion.p
      ref={ref}
      className={styles.text}
      style={{ color: color, margin: margin }}
      initial={{ opacity: 0.1, x: -100 }}
      animate={{ opacity: inView ? 1 : 0.1, x: inView ? 0 : -100 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.p>
  );
};

export default SectionText;
