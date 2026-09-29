"use client";

import { useEffect, useRef, useState } from "react";

const SCRATCH_THRESHOLD = 0.42;

export default function ScratchReveal({
  children,
  className = "",
  prompt = "gently scratch to reveal",
}) {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const moveCountRef = useRef(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const paint = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) return;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.globalCompositeOperation = "source-over";

      const foil = context.createLinearGradient(0, 0, width, height);
      foil.addColorStop(0, "#f7ecd0");
      foil.addColorStop(0.22, "#d7b76d");
      foil.addColorStop(0.48, "#f2dfaa");
      foil.addColorStop(0.72, "#c99e4a");
      foil.addColorStop(1, "#ead5a2");
      context.fillStyle = foil;
      context.fillRect(0, 0, width, height);

      context.globalAlpha = 0.16;
      context.strokeStyle = "#ffffff";
      context.lineWidth = 1;
      for (let x = -height; x < width + height; x += 13) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x + height, height);
        context.stroke();
      }

      context.globalAlpha = 0.2;
      context.strokeStyle = "#0d5960";
      context.lineWidth = 1.25;
      const cx = width / 2;
      const cy = height / 2;
      context.beginPath();
      context.ellipse(cx, cy, 28, 14, 0, 0, Math.PI * 2);
      context.stroke();
      context.beginPath();
      context.ellipse(cx, cy, 10, 7, 0, 0, Math.PI * 2);
      context.stroke();

      context.globalAlpha = 1;
    };

    paint();

    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(paint) : null;
    observer?.observe(canvas);

    return () => observer?.disconnect();
  }, [revealed]);

  const getPoint = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const scratchBetween = (from, to) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    context.save();
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.globalCompositeOperation = "destination-out";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = Math.max(34, canvas.getBoundingClientRect().width * 0.1);
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
    if (!canvas) return;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);

    let clear = 0;
    let samples = 0;
    for (let index = 3; index < data.length; index += 96) {
      samples += 1;
      if (data[index] < 32) clear += 1;
    }

    if (samples > 0 && clear / samples >= SCRATCH_THRESHOLD) {
      setRevealed(true);
    }
  };

  const start = (event) => {
    if (revealed) return;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    drawingRef.current = true;
    const point = getPoint(event);
    lastPointRef.current = point;
    scratchBetween(point, point);
  };

  const move = (event) => {
    if (!drawingRef.current || revealed) return;
    event.preventDefault();

    const nextPoint = getPoint(event);
    const previousPoint = lastPointRef.current || nextPoint;
    scratchBetween(previousPoint, nextPoint);
    lastPointRef.current = nextPoint;

    moveCountRef.current += 1;
    if (moveCountRef.current % 7 === 0) checkProgress();
  };

  const stop = () => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    lastPointRef.current = null;
    checkProgress();
  };

  return (
    <div className={`scratch-reveal ${className}`.trim()}>
      <div className="scratch-reveal__content" aria-live={revealed ? "polite" : "off"}>
        {children}
      </div>

      {!revealed ? (
        <canvas
          ref={canvasRef}
          className="scratch-reveal__canvas"
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={stop}
          onPointerCancel={stop}
          onPointerLeave={stop}
          aria-hidden="true"
        />
      ) : null}

      <button
        type="button"
        className="scratch-reveal__prompt"
        onClick={() => setRevealed(true)}
        aria-label="Reveal our wedding date"
      >
        <span aria-hidden="true">✦</span>
        {revealed ? "our wedding date" : prompt}
      </button>
    </div>
  );
}
