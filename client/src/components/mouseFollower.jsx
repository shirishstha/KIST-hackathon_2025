import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveHandler);

    return () => window.removeEventListener('mousemove', moveHandler);
  }, []);

  return (
    <div
      className="fixed pointer-events-none w-20 h-20 blur-2xl rounded-full bg-gradient-to-tr from-green-400 via-emerald-500 to-teal-400 opacity-70 z-[1000] transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
      }}
    />
  );
};

export default MouseFollower;
