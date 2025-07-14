import { useRef, useEffect } from "react";

export default function Whiteboard({ width = 600, height = 400 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let drawing = false;

    function startDraw(e) {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    }
    function draw(e) {
      if (!drawing) return;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }
    function endDraw() {
      drawing = false;
      ctx.closePath();
    }
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", endDraw);
    canvas.addEventListener("mouseleave", endDraw);
    return () => {
      canvas.removeEventListener("mousedown", startDraw);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", endDraw);
      canvas.removeEventListener("mouseleave", endDraw);
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
      <div className="font-bold text-blue-900 mb-2">Whiteboard</div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border border-blue-200 rounded-lg bg-blue-50"
      />
    </div>
  );
}
