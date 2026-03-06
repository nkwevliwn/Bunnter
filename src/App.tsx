import { useState, useCallback } from 'react';
import SwipeCard from './components/SwipeCard';
import { RABBIT_IMAGES } from './data/images';
import {
  updateWeights,
  pickNextImage,
  type TagWeights,
  type SwipeDirection,
} from './services/recommendation';

function App() {
  const [shown, setShown] = useState<Set<string>>(new Set());
  const [weights, setWeights] = useState<TagWeights>({});
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [current, setCurrent] = useState(() =>
    pickNextImage(RABBIT_IMAGES, new Set(), {}),
  );

  const handleSwipe = useCallback(
    (direction: SwipeDirection) => {
      if (!current) return;

      const newShown = new Set(shown).add(current.id);
      const newWeights = updateWeights(weights, current, direction);
      const next = pickNextImage(RABBIT_IMAGES, newShown, newWeights);

      setShown(newShown);
      setWeights(newWeights);
      setCurrent(next);
      if (direction === 'like') setLikes((l) => l + 1);
      else setDislikes((d) => d + 1);
    },
    [current, shown, weights],
  );

  const handleButton = (direction: SwipeDirection) => handleSwipe(direction);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-green-50 to-emerald-100 py-6 px-4">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-emerald-700 tracking-tight">
          🐰 Bunnter
        </h1>
        <p className="text-sm text-emerald-600 mt-1">Tinder for bunnies</p>
      </header>

      {/* Card area */}
      <main className="flex flex-col items-center gap-6 w-full">
        {current ? (
          <SwipeCard key={current.id} image={current} onSwipe={handleSwipe} />
        ) : (
          <div className="w-[340px] sm:w-[380px] h-[520px] rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="text-6xl">🐇</span>
            <h2 className="text-2xl font-bold text-emerald-700">All done!</h2>
            <p className="text-gray-500 text-sm">
              You&apos;ve seen all {RABBIT_IMAGES.length} rabbits.
            </p>
            <p className="text-gray-500 text-sm">
              ❤️ {likes} liked · 💔 {dislikes} disliked
            </p>
            <button
              onClick={() => {
                setShown(new Set());
                setWeights({});
                setLikes(0);
                setDislikes(0);
                setCurrent(pickNextImage(RABBIT_IMAGES, new Set(), {}));
              }}
              className="mt-2 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-semibold transition-colors"
            >
              Start over
            </button>
          </div>
        )}

        {/* Action buttons */}
        {current && (
          <div className="flex gap-8">
            <button
              onClick={() => handleButton('dislike')}
              aria-label="Dislike"
              className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-transform border-2 border-red-200 hover:border-red-400"
            >
              👎
            </button>
            <button
              onClick={() => handleButton('like')}
              aria-label="Like"
              className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-transform border-2 border-green-200 hover:border-green-400"
            >
              👍
            </button>
          </div>
        )}
      </main>

      {/* Footer stats */}
      <footer className="text-center text-sm text-emerald-700 opacity-70">
        <p>
          ❤️ {likes} liked · 💔 {dislikes} disliked ·{' '}
          {RABBIT_IMAGES.length - shown.size} remaining
        </p>
        <p className="text-xs mt-1">Swipe right to like · Swipe left to dislike</p>
      </footer>
    </div>
  );
}

export default App;
