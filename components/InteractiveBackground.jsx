"use client";
import { useEffect, useRef, useCallback } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const blobsRef = useRef([]);
  const animationRef = useRef(null);

  const initParticles = useCallback((width, height) => {
    const particles = [];
    const particleCount = Math.min(80, Math.floor((width * height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 160, // Teal to cyan range
      });
    }
    return particles;
  }, []);

  const initBlobs = useCallback((width, height) => {
    return [
      {
        x: width * 0.2,
        y: height * 0.3,
        radius: Math.min(width, height) * 0.3,
        vx: 0.3,
        vy: 0.2,
        hue: 170,
        saturation: 80,
        lightness: 50,
      },
      {
        x: width * 0.8,
        y: height * 0.7,
        radius: Math.min(width, height) * 0.25,
        vx: -0.2,
        vy: 0.3,
        hue: 260,
        saturation: 70,
        lightness: 45,
      },
      {
        x: width * 0.5,
        y: height * 0.5,
        radius: Math.min(width, height) * 0.2,
        vx: 0.1,
        vy: -0.2,
        hue: 200,
        saturation: 75,
        lightness: 40,
      },
    ];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particlesRef.current = initParticles(width, height);
      blobsRef.current = initBlobs(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const drawBlob = (blob, time) => {
      const gradient = ctx.createRadialGradient(
        blob.x,
        blob.y,
        0,
        blob.x,
        blob.y,
        blob.radius
      );

      const alpha = 0.06;
      gradient.addColorStop(
        0,
        `hsla(${blob.hue}, ${blob.saturation}%, ${
          blob.lightness * 0.6
        }%, ${alpha})`
      );
      gradient.addColorStop(
        0.5,
        `hsla(${blob.hue}, ${blob.saturation}%, ${blob.lightness * 0.5}%, ${
          alpha * 0.5
        })`
      );
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const updateBlob = (blob, time) => {
      // Smooth floating motion
      blob.x += blob.vx + Math.sin(time * 0.001 + blob.hue) * 0.5;
      blob.y += blob.vy + Math.cos(time * 0.001 + blob.hue) * 0.5;

      // Mouse attraction
      const dx = mouseRef.current.x - blob.x;
      const dy = mouseRef.current.y - blob.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 400) {
        blob.x += dx * 0.002;
        blob.y += dy * 0.002;
      }

      // Bounce off edges
      if (blob.x < -blob.radius) blob.x = width + blob.radius;
      if (blob.x > width + blob.radius) blob.x = -blob.radius;
      if (blob.y < -blob.radius) blob.y = height + blob.radius;
      if (blob.y > height + blob.radius) blob.y = -blob.radius;

      // Slowly shift hue
      blob.hue += 0.02;
      if (blob.hue > 280) blob.hue = 160;
    };

    const drawParticle = (p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
      ctx.fill();
    };

    const updateParticle = (p) => {
      // Mouse repulsion
      const dx = mouseRef.current.x - p.x;
      const dy = mouseRef.current.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        const force = (150 - dist) / 150;
        p.vx -= (dx / dist) * force * 0.5;
        p.vy -= (dy / dist) * force * 0.5;
      }

      // Apply velocity with friction
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.99;
      p.vy *= 0.99;

      // Add slight drift
      p.vx += (Math.random() - 0.5) * 0.02;
      p.vy += (Math.random() - 0.5) * 0.02;

      // Wrap around edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Twinkle effect
      p.opacity += (Math.random() - 0.5) * 0.02;
      p.opacity = Math.max(0.1, Math.min(0.6, p.opacity));
    };

    const drawConnections = () => {
      const particles = particlesRef.current;
      ctx.strokeStyle = "rgba(100, 255, 218, 0.03)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.globalAlpha = ((120 - dist) / 120) * 0.3;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const animate = (time) => {
      // Clear with fade effect for trails
      ctx.fillStyle = "rgba(4, 7, 18, 0.1)";
      ctx.fillRect(0, 0, width, height);

      // Draw and update blobs
      blobsRef.current.forEach((blob) => {
        updateBlob(blob, time);
        drawBlob(blob, time);
      });

      // Draw connections between particles
      drawConnections();

      // Draw and update particles
      particlesRef.current.forEach((p) => {
        updateParticle(p);
        drawParticle(p);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initial clear
    ctx.fillStyle = "#040712";
    ctx.fillRect(0, 0, width, height);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, initBlobs]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default InteractiveBackground;
