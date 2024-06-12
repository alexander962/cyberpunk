import React, { useEffect, useState } from 'react';

import Wrapper from '@/components/Wrapper/Wrapper';

import styles from './Hero.module.scss';
import { heroImg1, heroImg2, heroImg3 } from '../../assets/images';

const images = [heroImg1, heroImg2, heroImg3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // % images.length:
      // Это оператор взятия остатка. Он используется здесь для циклического перемещения по массиву изображений.
      // Если после увеличения значения индекса оно становится равным длине массива images (например, 3, если у вас 3 изображения), оператор % images.length вернет остаток от деления на длину массива, что в данном случае будет 0. Это позволяет циклически возвращаться к первому изображению в массиве, создавая бесконечный цикл.
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${images[currentImage].src})` }}
    >
      <Wrapper className={styles.heroWrapper}>
        <div className={styles.heroInfo}>
          <p className={styles.heroInfoText}>Доступно на всех платформах</p>
          <button className={styles.heroInfoBtn}>Узнать больше</button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
