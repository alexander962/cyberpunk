import React from 'react';
import Image from 'next/image';

import Wrapper from '@/components/Wrapper/Wrapper';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionText from '@/components/SectionText/SectionText';

import styles from './Info.module.scss';
import { infoImg1, infoImg2, infoImg3 } from '../../assets/images';

const Info = () => {
  return (
    <section className={styles.info}>
      <Wrapper>
        <SectionTitle color="#000" margin="0 0 25px 0">
          Найт-Сити изменит тебя навсегда!
        </SectionTitle>
        <SectionText color="#000" margin="0 0 70px 0">
          <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в
          мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты
          играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь
          менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где
          твои поступки влияют на ход сюжета и всё, что тебя окружает.
        </SectionText>
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
