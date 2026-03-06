export interface RabbitImage {
  id: string;
  url: string;
  alt: string;
  tags: string[];
}

// Curated rabbit images from Unsplash (free to use, no API key required)
// Tags describe: color, type, setting, style attributes
export const RABBIT_IMAGES: RabbitImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&h=800&fit=crop',
    alt: 'Fluffy white rabbit on green grass',
    tags: ['white', 'fluffy', 'outdoor', 'grass', 'cute', 'domestic', 'close-up'],
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&h=800&fit=crop',
    alt: 'Grey rabbit sitting in field',
    tags: ['grey', 'wild', 'outdoor', 'field', 'sitting', 'large', 'natural'],
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1518467780478-ff02a9a6c625?w=600&h=800&fit=crop',
    alt: 'Brown rabbit eating grass',
    tags: ['brown', 'wild', 'outdoor', 'grass', 'eating', 'natural', 'close-up'],
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1452857576997-f6410a1bf5ef?w=600&h=800&fit=crop',
    alt: 'Baby bunny in a nest',
    tags: ['brown', 'baby', 'indoor', 'nest', 'tiny', 'newborn', 'cute'],
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1559205264-23a3b2edbf54?w=600&h=800&fit=crop',
    alt: 'Lop-eared rabbit portrait',
    tags: ['white', 'lop', 'indoor', 'portrait', 'cute', 'domestic', 'floppy-ears'],
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1550159930-40066082a4fc?w=600&h=800&fit=crop',
    alt: 'White rabbit in a garden',
    tags: ['white', 'domestic', 'outdoor', 'garden', 'cute', 'fluffy', 'sitting'],
  },
  {
    id: '7',
    url: 'https://images.unsplash.com/photo-1617363972013-7a3e1a66b9ac?w=600&h=800&fit=crop',
    alt: 'Grey fluffy rabbit indoors',
    tags: ['grey', 'fluffy', 'indoor', 'domestic', 'cute', 'close-up', 'soft'],
  },
  {
    id: '8',
    url: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&h=800&fit=crop',
    alt: 'Black and white spotted rabbit',
    tags: ['black', 'white', 'spotted', 'domestic', 'indoor', 'cute', 'dwarf'],
  },
  {
    id: '9',
    url: 'https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=600&h=800&fit=crop',
    alt: 'Rabbit in autumn leaves',
    tags: ['brown', 'wild', 'outdoor', 'autumn', 'leaves', 'natural', 'field'],
  },
  {
    id: '10',
    url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=600&h=800&fit=crop',
    alt: 'White fluffy angora rabbit',
    tags: ['white', 'angora', 'fluffy', 'domestic', 'indoor', 'soft', 'large'],
  },
  {
    id: '11',
    url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=800&fit=crop',
    alt: 'Rabbit close-up portrait',
    tags: ['brown', 'close-up', 'portrait', 'wild', 'outdoor', 'natural', 'large-ears'],
  },
  {
    id: '12',
    url: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=800&fit=crop',
    alt: 'Bunny in green meadow',
    tags: ['grey', 'outdoor', 'meadow', 'grass', 'natural', 'wild', 'running'],
  },
  {
    id: '13',
    url: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?w=600&h=800&fit=crop',
    alt: 'Tiny baby rabbit being held',
    tags: ['baby', 'tiny', 'brown', 'cute', 'held', 'close-up', 'newborn'],
  },
  {
    id: '14',
    url: 'https://images.unsplash.com/photo-1629036599855-b5e0f2e0cc9f?w=600&h=800&fit=crop',
    alt: 'Rex rabbit on wooden floor',
    tags: ['grey', 'rex', 'indoor', 'floor', 'domestic', 'short-fur', 'cute'],
  },
  {
    id: '15',
    url: 'https://images.unsplash.com/photo-1542843137-f64e1c7bdfc1?w=600&h=800&fit=crop',
    alt: 'Two rabbits playing together',
    tags: ['white', 'grey', 'multiple', 'outdoor', 'playing', 'cute', 'grass'],
  },
  {
    id: '16',
    url: 'https://images.unsplash.com/photo-1598134693736-2baea2e86d63?w=600&h=800&fit=crop',
    alt: 'Orange Dutch rabbit in hay',
    tags: ['orange', 'dutch', 'domestic', 'indoor', 'hay', 'cute', 'small'],
  },
  {
    id: '17',
    url: 'https://images.unsplash.com/photo-1621323077682-50e5e9a5a0e4?w=600&h=800&fit=crop',
    alt: 'Brown wild rabbit in snow',
    tags: ['brown', 'wild', 'outdoor', 'snow', 'winter', 'natural', 'sitting'],
  },
  {
    id: '18',
    url: 'https://images.unsplash.com/photo-1531842335-kkqnbcbf4278?w=600&h=800&fit=crop',
    alt: 'Rabbit sleeping on soft blanket',
    tags: ['white', 'domestic', 'indoor', 'sleeping', 'soft', 'cosy', 'cute'],
  },
  {
    id: '19',
    url: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=800&fit=crop',
    alt: 'Fluffy grey lop rabbit',
    tags: ['grey', 'lop', 'fluffy', 'domestic', 'indoor', 'cute', 'floppy-ears'],
  },
  {
    id: '20',
    url: 'https://images.unsplash.com/photo-1508715186280-dcf4890a69d5?w=600&h=800&fit=crop',
    alt: 'Brown rabbit in grass eating clover',
    tags: ['brown', 'wild', 'outdoor', 'eating', 'clover', 'grass', 'natural'],
  },
  {
    id: '21',
    url: 'https://images.unsplash.com/photo-1559826560-e8a78ee28a0d?w=600&h=800&fit=crop',
    alt: 'White New Zealand rabbit',
    tags: ['white', 'large', 'domestic', 'outdoor', 'grass', 'fluffy', 'garden'],
  },
  {
    id: '22',
    url: 'https://images.unsplash.com/photo-1619718929891-2eb36e9d1c35?w=600&h=800&fit=crop',
    alt: 'Spotted Dutch rabbit',
    tags: ['black', 'white', 'spotted', 'dutch', 'domestic', 'indoor', 'small'],
  },
  {
    id: '23',
    url: 'https://images.unsplash.com/photo-1526336179256-1347bdb255ee?w=600&h=800&fit=crop',
    alt: 'Rabbit jumping on grass',
    tags: ['brown', 'wild', 'outdoor', 'jumping', 'action', 'grass', 'natural'],
  },
  {
    id: '24',
    url: 'https://images.unsplash.com/photo-1599686301846-36e8d3b5dab5?w=600&h=800&fit=crop',
    alt: 'Angora rabbit with long fur',
    tags: ['white', 'angora', 'long-fur', 'fluffy', 'domestic', 'indoor', 'soft'],
  },
  {
    id: '25',
    url: 'https://images.unsplash.com/photo-1622659488855-ac6bc1c11be0?w=600&h=800&fit=crop',
    alt: 'Baby bunny eyes just opened',
    tags: ['grey', 'baby', 'tiny', 'newborn', 'cute', 'indoor', 'soft'],
  },
];
