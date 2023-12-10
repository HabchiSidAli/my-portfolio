import React, { useEffect, useState } from 'react';
import { useSpring, animated, to } from '@react-spring/web';
import { IoTriangleOutline } from 'react-icons/io5';

function PushyElements() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null during server-side rendering
  }

  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <PushyElement key={index} />
      ))}
    </>
  );
}

function PushyElement() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const [{ x, y, rotation }, api] = useSpring(() => {
    const maxX = windowSize.width - 250;
    const maxY = windowSize.height - 100;
    return {
      x: Math.random() * maxX,
      y: Math.random() * maxY,
      rotation: Math.random() * 360,
    };
  });

  const moveRandomDirection = () => {
    const maxX = windowSize.width - 150;
    const maxY = windowSize.height - 250;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    const randomRotation = Math.random() * 360;
    api.start({ x: randomX, y: randomY, rotation: randomRotation });
  };

  useEffect(() => {
    moveRandomDirection();
  }, [windowSize]);

  if (typeof window === 'undefined') {
    return null; // Handle non-browser environment
  }

  return (
    <animated.div
      style={{
        transform: to(
          [x, y, rotation],
          (x, y, rotation) =>
            `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`
        ),
        position: 'absolute',
        zIndex: 50,
      }}
      onMouseEnter={moveRandomDirection}
    >
      <IoTriangleOutline className='invisible md:visible' />
    </animated.div>
  );
}

export default PushyElements;
