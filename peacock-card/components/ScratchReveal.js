"use client";

import { useEffect, useRef, useState } from "react";

const SCRATCH_THRESHOLD = 0.36;

function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export default function ScratchReveal({ className = "" }) {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const moveCountRef = useRef(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const paintCover = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) return;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.globalCompositeOperation = "source-over";

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#167b79");
      gradient.addColorStop(0.46, "#176f79");
      gradient.addColorStop(1, "#1b5b78");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      const random = seededRandom(28);
      const dotCount = Math.max(240, Math.round((width * height) / 145));

      for (let index = 0; index < dotCount; index += 1) {
        const x = random() * width;
        const y = random() * height;
        const radius = 0.55 + random() * 1.65;
        const alpha = 0.18 + random() * 0.48;

        context.beginPath();
        context.fillStyle =
          index % 4 === 0
            ? `rgba(244, 216, 119, ${alpha})`
            : `rgba(203, 172, 74, ${alpha})`;
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }

      context.fillStyle = "rgba(255, 250, 238, 0.9)";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = `italic 500 ${Math.max(12, Math.min(16, width / 12.5))}px Georgia, serif`;
      context.fillText("gently scratch to reveal", width / 2, height / 2);
    };

    paintCover();

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(paintCover)
        : null;
    observer?.observe(canvas);

    return () => observer?.disconnect();
  }, []);

  const pointFromEvent = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const eraseBetween = (from, to) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.getBoundingClientRect().width;

    context.save();
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.globalCompositeOperation = "destination-out";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = Math.max(28, width * 0.16);
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();

    if (from.x === to.x && from.y === to.y) {
      context.beginPath();
      context.arc(from.x, from.y, context.lineWidth / 2, 0, Math.PI * 2);
      context.fill();
    }

    context.restore();
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    const { width, height } = canvas;
    const data = context.getImageData(0, 0, width, height).data;
    const step = Math.max(10, Math.floor(width / 38));

    let cleared = 0;
    let sampled = 0;

    for (let y = step / 2; y < height; y += step) {
      for (let x = step / 2; x < width; x += step) {
        const nx = (x - width / 2) / (width / 2);
        const ny = (y - height / 2) / (height / 2);

        if (nx * nx + ny * ny > 1) continue;

        sampled += 1;
        const alpha = data[(Math.floor(y) * width + Math.floor(x)) * 4 + 3];
        if (alpha < 36) cleared += 1;
      }
    }

    if (sampled > 0 && cleared / sampled >= SCRATCH_THRESHOLD) {
      setRevealed(true);
    }
  };

  const startScratch = (event) => {
    if (revealed) return;

    event.currentTarget.setPointerCapture?.(event.pointerId);
    drawingRef.current = true;

    const point = pointFromEvent(event);
    lastPointRef.current = point;
    eraseBetween(point, point);
  };

  const moveScratch = (event) => {
    if (!drawingRef.current || revealed) return;

    event.preventDefault();
    const nextPoint = pointFromEvent(event);
    const previousPoint = lastPointRef.current || nextPoint;

    eraseBetween(previousPoint, nextPoint);
    lastPointRef.current = nextPoint;

    moveCountRef.current += 1;
    if (moveCountRef.current % 7 === 0) checkProgress();
  };

  const stopScratch = () => {
    if (!drawingRef.current) return;

    drawingRef.current = false;
    lastPointRef.current = null;
    checkProgress();
  };

  return (
    <canvas
      ref={canvasRef}
      className={`scratch-oval__canvas${revealed ? " scratch-oval__canvas--revealed" : ""} ${className}`.trim()}
      role="button"
      tabIndex={0}
      aria-label="Scratch to reveal our wedding date. Press Enter or Space to reveal it instantly."
      onPointerDown={startScratch}
      onPointerMove={moveScratch}
      onPointerUp={stopScratch}
      onPointerCancel={stopScratch}
      onPointerLeave={stopScratch}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setRevealed(true);
        }
      }}
    />
  );
}
