import { useRef, useEffect } from 'react';


const Starfield = () => {
  const canvasRef = useRef(null);
  const starArrayRef = useRef([]);
  const frameNumberRef = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const context = canvas.getContext('2d');
    const stars = 500;
    const colorrange = [0, 60, 240];

    const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // Initialize stars
    starArrayRef.current = [];
    for (let i = 0; i < stars; i++) {
      const x = Math.random() * canvas.offsetWidth;
      const y = Math.random() * canvas.offsetHeight;
      const radius = Math.random() * 1.2;
      const hue = colorrange[getRandom(0, colorrange.length - 1)];
      const sat = getRandom(50, 100);
      const opacity = Math.random();
      starArrayRef.current.push({ x, y, radius, hue, sat, opacity });
    }

    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < stars; i++) {
        const star = starArrayRef.current[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `hsla(${star.hue}, ${star.sat}%, 88%, ${star.opacity})`;
        context.fill();
      }
    };

    const updateStars = () => {
      for (let i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
          starArrayRef.current[i].opacity = Math.random();
        }
      }
    };

    const animate = () => {
      frameNumberRef.current++;
      updateStars();
      drawStars();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
  <canvas
    ref={canvasRef}
    className="starfield-canvas"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,        // Behind all content
      background: '#000' // Black space background
    }}
  />
);

};

export default Starfield;
