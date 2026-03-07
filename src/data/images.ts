export interface RabbitImage {
  id: string;
  url: string;
  alt: string;
  tags: string[];
}

// Curated rabbit images from Pexels (free to use under Pexels License, hotlinking allowed)
// Tags describe: color, type, setting, style attributes
export const RABBIT_IMAGES: RabbitImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Fluffy white rabbit on green grass',
    tags: ['white', 'fluffy', 'outdoor', 'grass', 'cute', 'domestic', 'close-up'],
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Grey rabbit sitting in field',
    tags: ['grey', 'wild', 'outdoor', 'field', 'sitting', 'large', 'natural'],
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/36347/pexels-photo-36347.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Brown rabbit eating grass',
    tags: ['brown', 'wild', 'outdoor', 'grass', 'eating', 'natural', 'close-up'],
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/247373/pexels-photo-247373.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Baby bunny in a nest',
    tags: ['brown', 'baby', 'indoor', 'nest', 'tiny', 'newborn', 'cute'],
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/1090511/pexels-photo-1090511.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Lop-eared rabbit portrait',
    tags: ['white', 'lop', 'indoor', 'portrait', 'cute', 'domestic', 'floppy-ears'],
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/162140/pexels-photo-162140.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'White rabbit in a garden',
    tags: ['white', 'domestic', 'outdoor', 'garden', 'cute', 'fluffy', 'sitting'],
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/823694/pexels-photo-823694.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Grey fluffy rabbit indoors',
    tags: ['grey', 'fluffy', 'indoor', 'domestic', 'cute', 'close-up', 'soft'],
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Black and white spotted rabbit',
    tags: ['black', 'white', 'spotted', 'domestic', 'indoor', 'cute', 'dwarf'],
  },
  {
    id: '9',
    url: 'https://images.pexels.com/photos/4587994/pexels-photo-4587994.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Rabbit in autumn leaves',
    tags: ['brown', 'wild', 'outdoor', 'autumn', 'leaves', 'natural', 'field'],
  },
  {
    id: '10',
    url: 'https://images.pexels.com/photos/5702917/pexels-photo-5702917.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'White fluffy angora rabbit',
    tags: ['white', 'angora', 'fluffy', 'domestic', 'indoor', 'soft', 'large'],
  },
  {
    id: '11',
    url: 'https://images.pexels.com/photos/3777203/pexels-photo-3777203.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Rabbit close-up portrait',
    tags: ['brown', 'close-up', 'portrait', 'wild', 'outdoor', 'natural', 'large-ears'],
  },
  {
    id: '12',
    url: 'https://images.pexels.com/photos/4588004/pexels-photo-4588004.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Bunny in green meadow',
    tags: ['grey', 'outdoor', 'meadow', 'grass', 'natural', 'wild', 'running'],
  },
  {
    id: '13',
    url: 'https://images.pexels.com/photos/2587381/pexels-photo-2587381.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Tiny baby rabbit being held',
    tags: ['baby', 'tiny', 'brown', 'cute', 'held', 'close-up', 'newborn'],
  },
  {
    id: '14',
    url: 'https://images.pexels.com/photos/5732307/pexels-photo-5732307.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Rex rabbit on wooden floor',
    tags: ['grey', 'rex', 'indoor', 'floor', 'domestic', 'short-fur', 'cute'],
  },
  {
    id: '15',
    url: 'https://images.pexels.com/photos/6498916/pexels-photo-6498916.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Two rabbits playing together',
    tags: ['white', 'grey', 'multiple', 'outdoor', 'playing', 'cute', 'grass'],
  },
  {
    id: '16',
    url: 'https://images.pexels.com/photos/3777208/pexels-photo-3777208.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Orange Dutch rabbit in hay',
    tags: ['orange', 'dutch', 'domestic', 'indoor', 'hay', 'cute', 'small'],
  },
  {
    id: '17',
    url: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Brown wild rabbit in snow',
    tags: ['brown', 'wild', 'outdoor', 'snow', 'winter', 'natural', 'sitting'],
  },
  {
    id: '18',
    url: 'https://images.pexels.com/photos/3777186/pexels-photo-3777186.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Rabbit sleeping on soft blanket',
    tags: ['white', 'domestic', 'indoor', 'sleeping', 'soft', 'cosy', 'cute'],
  },
  {
    id: '19',
    url: 'https://images.pexels.com/photos/4588009/pexels-photo-4588009.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Fluffy grey lop rabbit',
    tags: ['grey', 'lop', 'fluffy', 'domestic', 'indoor', 'cute', 'floppy-ears'],
  },
  {
    id: '20',
    url: 'https://images.pexels.com/photos/5702920/pexels-photo-5702920.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Brown rabbit in grass eating clover',
    tags: ['brown', 'wild', 'outdoor', 'eating', 'clover', 'grass', 'natural'],
  },
  {
    id: '21',
    url: 'https://images.pexels.com/photos/3777199/pexels-photo-3777199.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'White New Zealand rabbit',
    tags: ['white', 'large', 'domestic', 'outdoor', 'grass', 'fluffy', 'garden'],
  },
  {
    id: '22',
    url: 'https://images.pexels.com/photos/6498918/pexels-photo-6498918.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Spotted Dutch rabbit',
    tags: ['black', 'white', 'spotted', 'dutch', 'domestic', 'indoor', 'small'],
  },
  {
    id: '23',
    url: 'https://images.pexels.com/photos/4588001/pexels-photo-4588001.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Rabbit jumping on grass',
    tags: ['brown', 'wild', 'outdoor', 'jumping', 'action', 'grass', 'natural'],
  },
  {
    id: '24',
    url: 'https://images.pexels.com/photos/3777193/pexels-photo-3777193.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Angora rabbit with long fur',
    tags: ['white', 'angora', 'long-fur', 'fluffy', 'domestic', 'indoor', 'soft'],
  },
  {
    id: '25',
    url: 'https://images.pexels.com/photos/5702923/pexels-photo-5702923.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    alt: 'Baby bunny eyes just opened',
    tags: ['grey', 'baby', 'tiny', 'newborn', 'cute', 'indoor', 'soft'],
  },
];
