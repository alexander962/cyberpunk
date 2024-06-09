import { MotionValue, useScroll } from 'framer-motion';
import { ReactNode, useRef, useState, useEffect } from 'react';

import useGetWindowHeight from '../../hooks/useGetWindowHeight';

const StickyBlock = ({
  zIndex,
  children,
}: {
  zIndex: number;
  children: ReactNode | ((props: { scrollYProgress: MotionValue<number> }) => ReactNode);
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const windowHeight = useGetWindowHeight();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  useEffect(() => {
    const handleResize = () => {
      const height = ref.current?.offsetHeight ?? 0;
      setHeight(height);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(height);
  console.log(windowHeight);

  return (
    <div
      ref={ref}
      style={{
        overflow: 'hidden',
        position: 'sticky',
        top: -height + windowHeight,
        zIndex,
      }}
    >
      {typeof children === 'function' ? children({ scrollYProgress }) : children}
    </div>
  );
};

export default StickyBlock;
