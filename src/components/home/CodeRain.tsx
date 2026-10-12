import React, { useEffect, useRef } from 'react';

type Column = {
  x: number;
  head: number;
  speed: number;
  length: number;
  chars: string[];
  active: boolean;
  delay: number;
};

const GLYPHS = '01{}[]()<>=/;:+*&|$#'.split('');
const TOKENS = ['const', 'await', 'listing', 'txn', 'stripe', 'book()', '=>', 'api', 'sdk', 'quote', 'user', 'null'];
const CELL = 20;
const FONT_SIZE = 13;

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

function makeChars(length: number): string[] {
  const chars = Array.from({ length }, randomGlyph);
  if (Math.random() < 0.35) {
    const token = TOKENS[Math.floor(Math.random() * TOKENS.length)];
    const start = Math.floor(Math.random() * Math.max(1, length - token.length));
    token.split('').forEach((c, i) => {
      if (start + i < length) chars[start + i] = c;
    });
  }
  return chars;
}

function resetColumn(col: Column, rows: number, initial = false) {
  col.length = 8 + Math.floor(Math.random() * 14);
  col.chars = makeChars(col.length);
  col.speed = 3 + Math.random() * 5;
  col.active = Math.random() < 0.6;
  col.delay = initial ? Math.random() * 4 : 1 + Math.random() * 5;
  col.head = initial ? Math.random() * rows : -Math.random() * 6;
}

export function CodeRain({ className = '' }: {className?: string;}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let rows = 0;
    let columns: Column[] = [];
    let frame = 0;
    let last = performance.now();
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rows = Math.ceil(height / CELL);
      const count = Math.ceil(width / CELL);
      columns = Array.from({ length: count }, (_, i) => {
        const col: Column = { x: i * CELL + CELL / 2, head: 0, speed: 0, length: 0, chars: [], active: false, delay: 0 };
        resetColumn(col, rows, true);
        return col;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `500 ${FONT_SIZE}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const col of columns) {
        if (!col.active || col.delay > 0) continue;
        // Quieter in the centre so the headline stays crisp
        const distFromCentre = Math.abs(col.x - width / 2) / (width / 2);
        const horizontal = 0.4 + 0.6 * Math.min(1, distFromCentre * 1.4);
        const headRow = Math.floor(col.head);

        for (let i = 0; i < col.length; i++) {
          const row = headRow - i;
          if (row < 0 || row > rows) continue;
          const y = row * CELL + CELL / 2;
          const vertical = 1 - Math.min(1, y / height) * 0.6;
          const trail = 1 - i / col.length;
          const isHead = i === 0;
          const alpha = (isHead ? 0.8 : 0.36 * trail) * horizontal * vertical;
          ctx.fillStyle = isHead ? `rgba(117, 0, 255, ${alpha})` : `rgba(78, 78, 242, ${alpha})`;
          ctx.fillText(col.chars[(row + col.length) % col.length], col.x, y);
        }
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      for (const col of columns) {
        if (col.delay > 0) {
          col.delay -= dt;
          continue;
        }
        col.head += col.speed * dt;
        if (Math.random() < 0.02) col.chars[Math.floor(Math.random() * col.length)] = randomGlyph();
        if (col.head - col.length > rows) resetColumn(col, rows);
      }
      draw();
      if (visible) frame = requestAnimationFrame(tick);
    };

    resize();
    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw();
    });
    resizeObserver.observe(canvas);

    if (reduceMotion) {
      draw();
      return () => resizeObserver.disconnect();
    }

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    });
    intersection.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`pointer-events-none block h-full w-full ${className}`} />;
}