import type { RabbitImage } from '../data/images';

export type SwipeDirection = 'like' | 'dislike';

export interface TagWeights {
  [tag: string]: number;
}

/**
 * Update tag weights based on a swipe action.
 * Liked image tags get +1, disliked image tags get -0.5.
 */
export function updateWeights(
  weights: TagWeights,
  image: RabbitImage,
  direction: SwipeDirection,
): TagWeights {
  const delta = direction === 'like' ? 1 : -0.5;
  const updated = { ...weights };
  for (const tag of image.tags) {
    updated[tag] = (updated[tag] ?? 0) + delta;
  }
  return updated;
}

/**
 * Score an image based on current tag weights.
 * Higher score = more similar to liked images.
 */
export function scoreImage(image: RabbitImage, weights: TagWeights): number {
  return image.tags.reduce((sum, tag) => sum + (weights[tag] ?? 0), 0);
}

/**
 * Pick the next image from the pool.
 * When weights are empty (first pick) select randomly; otherwise pick by score.
 */
export function pickNextImage(
  pool: RabbitImage[],
  shown: Set<string>,
  weights: TagWeights,
): RabbitImage | null {
  const candidates = pool.filter((img) => !shown.has(img.id));
  if (candidates.length === 0) return null;

  const hasWeights = Object.keys(weights).length > 0;
  if (!hasWeights) {
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  // Sort by score descending, break ties randomly
  const scored = candidates.map((img) => ({
    img,
    score: scoreImage(img, weights) + Math.random() * 0.01,
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored[0].img;
}
