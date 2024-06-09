import React, { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';

interface ScrollOverlayProps {
  children: ReactNode;
  zIndex: number;
}

const ScrollOverlay: React.FC<ScrollOverlayProps> = ({ children, zIndex }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    if (overlayRef.current) {
      const rect = overlayRef.current.getBoundingClientRect();
      const newOffset = Math.max(0, window.innerHeight - rect.top);
      setOffset(newOffset);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: zIndex,
    pointerEvents: 'none',
    opacity: offset / window.innerHeight,
  };

  return (
    <div>
      <div ref={overlayRef} style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
      <div style={overlayStyle}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
          {React.cloneElement(children as React.ReactElement, {
            style: {
              ...((children as React.ReactElement).props.style || {}),
              pointerEvents: 'none',
            },
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollOverlay;
