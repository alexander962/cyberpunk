import React from 'react';
import Image from 'next/image';

import Wrapper from '@/components/Wrapper/Wrapper';
import {
  logoIcon,
  youtubeIcon,
  vkIcon,
  facebookIcon,
  twitterIcon,
  twitchIcon,
  instaIcon,
} from '@/assets/images';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.headerContainer}>
          <div>
            <Image src={logoIcon} alt="" />
          </div>
          <div className={styles.headerContainerLinks}>
            <a href={'/'}>
              <Image src={youtubeIcon} alt="" />
            </a>
            <a href={'/'}>
              <Image src={vkIcon} alt="" />
            </a>
            <a href={'/'}>
              <Image src={facebookIcon} alt="" />
            </a>
            <a href={'/'}>
              <Image src={twitterIcon} alt="" />
            </a>
            <a href={'/'}>
              <Image src={twitchIcon} alt="" />
            </a>
            <a href={'/'}>
              <Image src={instaIcon} alt="" />
            </a>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
