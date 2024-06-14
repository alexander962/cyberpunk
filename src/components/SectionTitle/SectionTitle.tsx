// components/SectionTitle/SectionTitle.js

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  children: string;
  color?: string;
  margin?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, color = '#000', margin = '0' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Запускаем анимацию только один раз
    threshold: 0.9, // Анимация запускается, когда заголовок появляется на 10% в области видимости
  });

  return (
    <motion.h2
      ref={ref}
      className={styles.title}
      style={{ color: color, margin: margin }}
      initial={{ opacity: 0.1, x: -100 }}
      animate={{ opacity: inView ? 1 : 0.1, x: inView ? 0 : -100 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionTitle;
