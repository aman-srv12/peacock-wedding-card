"use client";

import { useEffect, useRef, useState } from "react";

const SCRATCH_THRESHOLD = 0.46;

export default function ScratchReveal({ children, className = "" }) {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const moveCountRef = useRef(0);
  const [started, setStarted] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const paintCover = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));

      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) return;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.globalCompositeOperation = "source-over";

      const gradient = context.createLinearGradient(0, 0, rect.width, rect.height);
      gradient.addColorStop(0, "#173f3a");
      gradient.addColorStop(0.5, "#0f5149");
      gradient.addColorStop(1, "#0a3841");
      context.fillStyle = gradient;
      context.fillRect(0, 0, rect.width, rect.height);

      context.globalAlpha = 0.16;
      context.strokeStyle = "#e8cf91";
      context.lineWidth = 1;
      for (let x = -rect.height; x < rect.width + rect.height; x += 18) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x + rect.height, rect.height);
        context.stroke();
      }
      context.globalAlpha = 1;

      context.fillStyle = "#f2dfaa";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "600 11px Arial, sans-serif";
      context.fillText("GENTLY SCRATCH TO REVEAL", rect.width / 2, rect.height / 2);
    };

    paintCover();
    const observer = new ResizeObserver(paintCover);
    observer.observe(canvas);

    return () => observer.disconnect();
  }, [revealed]);

  const pointFromEvent = (event) => {
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
    context.lineWidth = Math.max(28, canvas.getBoundingClientRect().width * 0.075);
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
    context.restore();
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    let sampled = 0;

    for (let i = 3; i < data.length; i += 64) {
      sampled += 1;
      if (data[i] < 32) cleared += 1;
    }

    if (sampled > 0 && cleared / sampled >= SCRATCH_THRESHOLD) {
      setRevealed(true);
    }
  };

  const start = (event) => {
    if (revealed) return;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    drawingRef.current = true;
    setStarted(true);
    lastPointRef.current = pointFromEvent(event);
  };

  const move = (event) => {
    if (!drawingRef.current || revealed) return;
    event.preventDefault();

    const nextPoint = pointFromEvent(event);
    const previousPoint = lastPointRef.current || nextPoint;
    scratchBetween(previousPoint, nextPoint);
    lastPointRef.current = nextPoint;

    moveCountRef.current += 1;
    if (moveCountRef.current % 8 === 0) checkProgress();
  };

  const stop = () => {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    lastPointRef.current = null;
    checkProgress();
  };

  return (
    <div className={`scratch-reveal ${className}`.trim()}>
      <div className="scratch-reveal__content">{children}</div>
      {!revealed ? (
        <>
          <canvas
            ref={canvasRef}
            className={`scratch-reveal__canvas${started ? " scratch-reveal__canvas--started" : ""}`}
            onPointerDown={start}
            onPointerMove={move}
            onPointerUp={stop}
            onPointerCancel={stop}
            onPointerLeave={stop}
            aria-hidden="true"
          />
          <button
            type="button"
            className="scratch-reveal__fallback"
            onClick={() => setRevealed(true)}
          >
            Tap to reveal instead
          </button>
        </>
      ) : null}
    </div>
  );
}
