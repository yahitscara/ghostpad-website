import { useRef, useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useDraggable() {
  // Start at 0,0 which means "centered" because parent uses flexbox centering
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

      // Get current element position and viewport bounds
      const elementRect = dragRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // The element is centered by flexbox, so we need to calculate bounds
      // relative to that centered position, not absolute viewport coords
      // Allow dragging as long as at least 100px of the element remains visible
      const buffer = 100;

      // Calculate how far we can drag from center
      const maxLeft = -(elementRect.width - buffer); // Can drag mostly off left
      const maxRight = (viewportWidth - buffer); // Can drag mostly off right
      const maxUp = -(elementRect.height - buffer); // Can drag mostly off top
      const maxDown = (viewportHeight - buffer); // Can drag mostly off bottom

      // Constrain to keep at least buffer pixels visible
      const constrainedX = Math.max(maxLeft, Math.min(newX, maxRight));
      const constrainedY = Math.max(maxUp, Math.min(newY, maxDown));

      setPosition({ x: constrainedX, y: constrainedY });
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
