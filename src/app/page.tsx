'use client';

import Hero from '@/components/Hero/Hero';
import Info from '@/components/Info/Info';
import StickyBlock from '@/components/StickyBlock/StickyBlock';
import Promotion from '@/components/Promotion/Promotion';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainBlock}>
        <StickyBlock zIndex={101}>
          <Hero />
        </StickyBlock>
        <StickyBlock zIndex={102}>
          <Info />
        </StickyBlock>
        <StickyBlock zIndex={103}>
          <Promotion />
        </StickyBlock>
      </div>
    </main>
  );
}
