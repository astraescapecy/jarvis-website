/** Mirrors lib/features/onboarding/data/demo_pin_images.dart */

const SEEDS = [
  "interior-living",
  "bedroom-cozy",
  "kitchen-recipe",
  "wedding-floral",
  "botanical-green",
  "outfit-style",
  "gallery-art",
  "brunch-food",
  "coastal-decor",
  "garden-outdoor",
  "studio-desk",
  "ceramic-craft",
] as const;

const ASPECT_RATIOS = [
  1.22, 1.38, 1.15, 1.42, 1.28, 1.18, 1.35, 1.25, 1.32, 1.2, 1.4, 1.3,
] as const;

/** Same indices as DemoPinGrid default aiIndices */
export const FLAGGED_INDICES = new Set([0, 2, 4, 6, 8, 10, 11]);

export function aspectRatioFor(index: number): number {
  return ASPECT_RATIOS[index % ASPECT_RATIOS.length];
}

export function urlFor(index: number, width: number): string {
  const seed = SEEDS[index % SEEDS.length];
  const height = Math.round(width * aspectRatioFor(index));
  return `https://picsum.photos/seed/jarvis-${seed}/${width}/${height}`;
}

export type DemoPin = {
  index: number;
  url: string;
  aspectRatio: number;
  flagged: boolean;
};

export function demoPins(count = 12, width = 160): DemoPin[] {
  return Array.from({ length: count }, (_, index) => ({
    index,
    url: urlFor(index, width),
    aspectRatio: aspectRatioFor(index),
    flagged: FLAGGED_INDICES.has(index),
  }));
}
