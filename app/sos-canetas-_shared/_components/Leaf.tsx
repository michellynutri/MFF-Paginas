type LeafProps = {
  className?: string;
  opacity?: number;
  rotation?: number;
};

export function Leaf({ className = "", opacity = 0.18, rotation = 0 }: LeafProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity, transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M100 30 Q60 60 50 110 Q70 130 100 120 Q130 130 150 110 Q140 60 100 30 Z"
        fill="#3D4A2F"
      />
      <path d="M100 30 L100 120" stroke="#2A3520" strokeWidth="1.5" fill="none" />
      <path d="M75 70 Q88 80 100 75" stroke="#2A3520" strokeWidth="1" fill="none" />
      <path d="M75 95 Q88 105 100 100" stroke="#2A3520" strokeWidth="1" fill="none" />
      <path d="M125 70 Q112 80 100 75" stroke="#2A3520" strokeWidth="1" fill="none" />
      <path d="M125 95 Q112 105 100 100" stroke="#2A3520" strokeWidth="1" fill="none" />
    </svg>
  );
}
