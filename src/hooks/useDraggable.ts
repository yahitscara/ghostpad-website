import { useRef, useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useDraggable() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef<Position>({ x: 0, y: 0 });
  const elementStartPos = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragRef.current) return;

      const deltaX = e.clientX - dragStartPos.current.x;
      const deltaY = e.clientY - dragStartPos.current.y;

      const newX = elementStartPos.current.x + deltaX;
      const newY = elementStartPos.current.y + deltaY;

      // Get parent bounds
      const parent = dragRef.current.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const elementRect = dragRef.current.getBoundingClientRect();

        // Calculate bounds
        const maxX = parentRect.width - elementRect.width;
        const maxY = parentRect.height - elementRect.height;

        // Constrain position
        const constrainedX = Math.max(0, Math.min(newX, maxX));
        const constrainedY = Math.max(0, Math.min(newY, maxY));

        setPosition({ x: constrainedX, y: constrainedY });
      } else {
        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragRef.current) return;

    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    elementStartPos.current = position;
  };

  return {
    dragRef,
    position,
    isDragging,
    handleMouseDown,
  };
}
