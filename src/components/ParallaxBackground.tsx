import { useEffect, useRef } from 'react';

interface ParallaxLayer {
  id: string;
  speed: number;
  className?: string;
  style?: React.CSSProperties;
  content?: React.ReactNode;
}

interface ParallaxBackgroundProps {
  layers?: ParallaxLayer[];
}

const defaultLayers: ParallaxLayer[] = [
  {
    id: 'layer-1',
    speed: 0.2,
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      opacity: 0.4,
    },
  },
  {
    id: 'layer-2',
    speed: 0.5,
    style: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      opacity: 0.3,
    },
  },
  {
    id: 'layer-3',
    speed: 0.8,
    style: {
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      opacity: 0.2,
    },
  },
];

export default function ParallaxBackground({ layers = defaultLayers }: ParallaxBackgroundProps) {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      layerRefs.current.forEach((layer, index) => {
        if (layer && layers[index]) {
          const speed = layers[index].speed;
          const yPos = -(scrollY * speed);
          layer.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [layers]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {layers.map((layer, index) => (
        <div
          key={layer.id}
          ref={(el) => {
            layerRefs.current[index] = el;
          }}
          className={`absolute inset-0 w-full h-[120vh] ${layer.className || ''}`}
          style={{
            willChange: 'transform',
            ...layer.style,
          }}
        >
          {layer.content}
        </div>
      ))}
    </div>
  );
}
