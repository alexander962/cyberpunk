import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '@/components/Promotion/Promotion.module.scss';
import Wrapper from '@/components/Wrapper/Wrapper';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionText from '@/components/SectionText/SectionText';

import { promoImg1 } from '../../assets/images';

const Promotion = () => {
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInitialAnimationComplete) {
      const element = document.getElementById('rotating-image');
      if (element) {
        element.classList.add(styles.continuousSpin);
      }
    }
  }, [isInitialAnimationComplete]);

  return (
    <section className={styles.promotion}>
      <Wrapper>
        <div className={styles.promotionHeader}>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 2, 1] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            onAnimationComplete={() => setIsInitialAnimationComplete(true)}
          >
            <Image src={promoImg1} alt="" id="rotating-image" className={styles.promotionImg} />
          </motion.div>
          <SectionTitle color="#fff" margin="0">
            Играй и выигрывай!
          </SectionTitle>
        </div>
        <SectionText color="#fff" margin="0 0 25px 0">
          Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть консоль{' '}
          <span>Xbox Series X</span> или <span>Sony PlayStation 5!</span> Заполни форму ниже и
          приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)
        </SectionText>
      </Wrapper>
    </section>
  );
};

export default Promotion;
