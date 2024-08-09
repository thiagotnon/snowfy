import { useEffect, useRef } from 'react';

interface SnowfyProps {
  className?: string;
  intensity?: number;
  color?: string;
  zIndex?: number;
  size?: number;
  speed?: number;
  wind?: number;
  zigzagPercentage?: number;
}

interface Snowflake {
  x: number;
  y: number;
  size: number;
  velocityY: number;
  velocityX: number;
  zigzag: boolean;
  offset: number;
}

export function Snowfy({
  className,
  intensity = 50,
  color = 'rgb(128,128,128, .5)',
  zIndex = 0,
  size = 5,
  speed = 1,
  wind = 0,
  zigzagPercentage = 20,
}: SnowfyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes: Snowflake[] = Array.from({ length: intensity }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * (size - 2) + 2,
      velocityY: (Math.random() * 2 + 1) * speed,
      velocityX: wind,
      zigzag: Math.random() < zigzagPercentage / 100,
      offset: Math.random() * 100,
    }));

    const drawSnowflake = (flake: Snowflake) => {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const updateSnowflake = (flake: Snowflake) => {
      flake.y += flake.velocityY;
      flake.x += flake.velocityX;

      if (flake.zigzag) {
        flake.x += Math.sin(flake.offset + flake.y * 0.02) * 0.5;
      }

      if (flake.y > canvas.height) {
        flake.y = 0 - flake.size;
        flake.x = Math.random() * canvas.width;
      }

      if (flake.x > canvas.width) {
        flake.x = 0;
      } else if (flake.x < 0) {
        flake.x = canvas.width;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach((flake) => {
        drawSnowflake(flake);
        updateSnowflake(flake);
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity, color, size, speed, wind, zigzagPercentage]);

  return (
    <canvas
      className={className}
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, zIndex, pointerEvents: 'none' }}
    />
  );
}
