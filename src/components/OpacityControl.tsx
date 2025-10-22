interface OpacityControlProps {
  value: number;
  onChange: (value: number) => void;
}

export default function OpacityControl({ value, onChange }: OpacityControlProps) {
  return (
    <div
      className="flex items-center gap-2"
      onMouseDown={(e) => e.stopPropagation()} // Prevent drag when interacting with slider
    >
      <input
        type="range"
        min="10"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 h-1 appearance-none rounded-sm outline-none"
        style={{
          background: 'rgba(200, 200, 200, 0.5)',
        }}
      />
      <span className="text-xs font-medium min-w-[35px] text-gray-700">
        {value}%
      </span>
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #333;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #333;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
