"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Palette, 
  RotateCcw, 
  Download, 
  Eraser, 
  Paintbrush, 
  Sparkles, 
  Layers 
} from "lucide-react";

const PALETTE = [
  { name: "Лаванда", hex: "#8E75C7" },
  { name: "Світла лаванда", hex: "#C9B8E8" },
  { name: "Троянда", hex: "#D9AAB6" },
  { name: "Пудра", hex: "#F5D5DD" },
  { name: "Полин", hex: "#7A9674" },
  { name: "М'ята", hex: "#A9BFA3" },
  { name: "Пісок", hex: "#C2A878" },
  { name: "Чорнило", hex: "#3B3548" },
  { name: "Небесний", hex: "#7BA4D0" },
  { name: "Сонячний", hex: "#E8B86D" },
];

export default function ArtCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#8E75C7");
  const [strokeWidth, setStrokeWidth] = useState(8);
  const [opacity, setOpacity] = useState(0.8);
  const [isEraser, setIsEraser] = useState(false);
  const [isWatercolor, setIsWatercolor] = useState(true);

  // Initialize canvas with smooth paper background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set physical resolution
    canvas.width = canvas.parentElement?.clientWidth || 800;
    canvas.height = 480;

    // Fill with soft paper cream color
    ctx.fillStyle = "#FAF6EF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsDrawing(true);
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = strokeWidth;

    if (isEraser) {
      ctx.strokeStyle = "#FAF6EF";
      ctx.globalAlpha = 1.0;
    } else {
      ctx.strokeStyle = color;
      ctx.globalAlpha = isWatercolor ? opacity * 0.45 : opacity;
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();

    if (isWatercolor && !isEraser) {
      // Soft watercolor bloom effect
      ctx.shadowBlur = strokeWidth * 0.5;
      ctx.shadowColor = color;
    } else {
      ctx.shadowBlur = 0;
    }
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#FAF6EF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `mind-and-soul-art-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div id="canvas-section" className="p-6 sm:p-10 rounded-4xl glass-card relative overflow-hidden flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/30 text-xs font-semibold text-lavender-deep mb-2">
            <Paintbrush className="w-3.5 h-3.5" />
            <span>Інтерактивна майстерня</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Полотно емоційного вираження
          </h3>
          <p className="text-xs sm:text-sm text-ink-light mt-1">
            Малюйте інтуїтивно без слів. Дозвольте лініям рухатися за диханням.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={clearCanvas}
            className="px-3.5 py-2 rounded-2xl bg-white hover:bg-rose-light text-ink border border-beige/80 text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-dark" />
            <span>Очистити</span>
          </button>
          <button
            onClick={downloadCanvas}
            className="px-4 py-2 rounded-2xl bg-lavender-deep hover:bg-lavender-deep/90 text-white text-xs font-medium flex items-center gap-1.5 transition-all shadow-card hover:shadow-hover"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Зберегти малюнок</span>
          </button>
        </div>
      </div>

      {/* Drawing Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-3xl bg-white/80 border border-beige/70">
        {/* Colors */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-ink-light mr-1 flex items-center gap-1">
            <Palette className="w-3.5 h-3.5" />
            Колір:
          </span>
          {PALETTE.map((p) => (
            <button
              key={p.hex}
              onClick={() => {
                setColor(p.hex);
                setIsEraser(false);
              }}
              title={p.name}
              className={`w-7 h-7 rounded-full transition-transform ${
                !isEraser && color === p.hex
                  ? "scale-125 ring-2 ring-lavender-deep ring-offset-2"
                  : "hover:scale-110"
              }`}
              style={{ backgroundColor: p.hex }}
            />
          ))}
        </div>

        {/* Tools and Modifiers */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Watercolor toggle */}
          <button
            onClick={() => setIsWatercolor(!isWatercolor)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all ${
              isWatercolor
                ? "bg-lavender text-lavender-deep border-lavender-dark shadow-sm"
                : "bg-white text-ink-light border-beige"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Акварельний ефект</span>
          </button>

          {/* Eraser */}
          <button
            onClick={() => setIsEraser(!isEraser)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all ${
              isEraser
                ? "bg-rose text-ink border-rose-dark shadow-sm"
                : "bg-white text-ink-light border-beige"
            }`}
          >
            <Eraser className="w-3.5 h-3.5" />
            <span>Гумка</span>
          </button>

          {/* Stroke Width Slider */}
          <div className="flex items-center gap-2 text-xs text-ink-light">
            <span>Пензель:</span>
            <input
              type="range"
              min="2"
              max="32"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              className="w-24 accent-lavender-deep cursor-pointer"
            />
            <span className="w-5 text-right font-mono">{strokeWidth}px</span>
          </div>
        </div>
      </div>

      {/* HTML5 Canvas Element */}
      <div className="w-full overflow-hidden rounded-3xl border-2 border-dashed border-lavender/60 shadow-inner bg-[#FAF6EF]">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full touch-none cursor-crosshair block"
        />
      </div>

      <div className="flex items-center justify-between text-xs text-ink-light">
        <span className="flex items-center gap-1.5 italic">
          <Sparkles className="w-3.5 h-3.5 text-lavender-deep" />
          Підказка: використовуйте плавні кругові рухи або створюйте власну мандалу
        </span>
        <span className="hidden sm:inline">Підтримуються сенсорні екрани та планшети</span>
      </div>
    </div>
  );
}
