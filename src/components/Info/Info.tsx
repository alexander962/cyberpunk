import React from 'react';
import Image from 'next/image';

import Wrapper from '@/components/Wrapper/Wrapper';

import styles from './Info.module.scss';
import { infoImg1, infoImg2, infoImg3 } from '../../assets/images';

const Info = () => {
  return (
    <section className={styles.info}>
      <Wrapper>
        <h2 className={styles.infoTitle}>Найт-Сити изменит тебя навсегда!</h2>
        <p className={styles.infoText}>
          <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в
          мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты
          играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь
          менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где
          твои поступки влияют на ход сюжета и всё, что тебя окружает.
        </p>
        <div className={styles.infoImages}>
          <div className={styles.infoImagesBlock}>
            <div>
              <Image src={infoImg2} alt="" />
            </div>
            <div>
              <Image src={infoImg1} alt="" />
            </div>
          </div>
          <div>
            <Image src={infoImg3} alt="" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Info;
