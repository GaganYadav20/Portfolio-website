import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener('mousemove', handleMove);

    let animId;
    function moveGlow() {
      if (glowRef.current) {
        glowRef.current.style.left = mouseX + 'px';
        glowRef.current.style.top = mouseY + 'px';
      }
      animId = requestAnimationFrame(moveGlow);
    }
    moveGlow();

    return () => {
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(255,255,255,.04) 0%, transparent 70%)',
        transform: 'translate(-50%,-50%)',
        zIndex: 0,
        willChange: 'left, top',
      }}
    />
  );
}
