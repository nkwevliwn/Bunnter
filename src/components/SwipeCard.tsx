import { useRef, useState, useCallback } from 'react';
import type { RabbitImage } from '../data/images';
import type { SwipeDirection } from '../services/recommendation';

interface Props {
  image: RabbitImage;
  onSwipe: (direction: SwipeDirection) => void;
}

const SWIPE_THRESHOLD = 80; // px required to register a swipe

export default function SwipeCard({ image, onSwipe }: Props) {
  const [drag, setDrag] = useState({ x: 0, y: 0, dragging: false });
  const [leaving, setLeaving] = useState<SwipeDirection | null>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);

  const rotation = drag.x / 15;
  const likeOpacity = Math.max(0, Math.min(1, drag.x / SWIPE_THRESHOLD));
  const nopeOpacity = Math.max(0, Math.min(1, -drag.x / SWIPE_THRESHOLD));

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    startRef.current = { x: e.clientX, y: e.clientY };
    setDrag({ x: 0, y: 0, dragging: true });
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!drag.dragging || !startRef.current) return;
      setDrag({
        x: e.clientX - startRef.current.x,
        y: e.clientY - startRef.current.y,
        dragging: true,
      });
    },
    [drag.dragging],
  );

  const handlePointerUp = useCallback(() => {
    if (!drag.dragging) return;
    const direction: SwipeDirection | null =
      drag.x > SWIPE_THRESHOLD ? 'like' : drag.x < -SWIPE_THRESHOLD ? 'dislike' : null;

    if (direction) {
      setLeaving(direction);
      // Animate card off screen then notify parent
      setTimeout(() => {
        setDrag({ x: 0, y: 0, dragging: false });
        setLeaving(null);
        onSwipe(direction);
      }, 350);
    } else {
      // Snap back to centre
      setDrag({ x: 0, y: 0, dragging: false });
    }
    startRef.current = null;
  }, [drag, onSwipe]);

  const translateX = leaving === 'like' ? 800 : leaving === 'dislike' ? -800 : drag.x;
  const translateY = leaving ? 0 : drag.y;
  const transitionStyle = leaving
    ? 'transform 0.35s ease-out'
    : drag.dragging
      ? 'none'
      : 'transform 0.2s ease-out';

  return (
    <div
      className="relative w-[340px] sm:w-[380px] h-[520px] rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing select-none"
      style={{
        transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`,
        transition: transitionStyle,
        touchAction: 'none',
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Rabbit image */}
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Image caption */}
      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
        <p className="text-white text-sm font-medium drop-shadow">{image.alt}</p>
      </div>

      {/* LIKE stamp */}
      <div
        className="absolute top-8 left-6 border-4 border-green-400 text-green-400 font-extrabold text-3xl px-3 py-1 rounded-md rotate-[-20deg] pointer-events-none"
        style={{ opacity: likeOpacity }}
      >
        LIKE
      </div>

      {/* NOPE stamp */}
      <div
        className="absolute top-8 right-6 border-4 border-red-400 text-red-400 font-extrabold text-3xl px-3 py-1 rounded-md rotate-[20deg] pointer-events-none"
        style={{ opacity: nopeOpacity }}
      >
        NOPE
      </div>
    </div>
  );
}
