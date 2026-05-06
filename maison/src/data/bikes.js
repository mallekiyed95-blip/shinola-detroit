export const colors = [
  { 
    id: 'white', 
    name: 'ALABASTER WHITE', 
    hex: '#ffffff', 
    bg: '#f4f4f4', 
    filter: 'none', 
    image: '/bikes/white.png',
    itemCode: 'ITEM: 10009801'
  },
  { 
    id: 'black', 
    name: 'MATTE BLACK', 
    hex: '#222222', 
    bg: '#e2e2e2', 
    filter: 'none', 
    image: '/bikes/black.png',
    itemCode: 'ITEM: 10009802'
  },
  { 
    id: 'copper', 
    name: 'COPPER ORANGE', 
    hex: '#d97746', 
    bg: '#fbece5', 
    filter: 'none', 
    image: '/bikes/orange.png',
    itemCode: 'ITEM: 10009803'
  },
  { 
    id: 'olive', 
    name: 'OLIVE GREEN', 
    hex: '#5b6b47', 
    bg: '#eef2e6', 
    filter: 'none', 
    image: '/bikes/green.png',
    itemCode: 'ITEM: 10009804'
  },
  { 
    id: 'red', 
    name: 'CRIMSON RED', 
    hex: '#b93030', 
    bg: '#fae8e8', 
    filter: 'none', 
    image: '/bikes/red.png',
    itemCode: 'ITEM: 10009805'
  },
  { 
    id: 'blue', 
    name: 'NAVY BLUE', 
    hex: '#1e3a8a', 
    bg: '#ebf0fa', 
    filter: 'none', 
    image: '/bikes/blue.png',
    itemCode: 'ITEM: 10009806'
  },
];

export const products = [
  {
    id: 'detroit-arrow',
    name: 'Detroit Arrow',
    price: '$2,950',
    tagline: 'Aero performance, city soul.',
    image: '/bikes/black.png',
    hoverImage: '/bikes/red.png',
    specs: {
      frame: 'Carbon Monocoque',
      fork: 'Full Carbon Aero',
      drivetrain: 'Shimano Ultegra Di2',
      brakes: 'Hydraulic Disc',
      weight: '7.8 kg',
      wheels: '50mm Carbon Clincher',
    },
  },
  {
    id: 'runwell',
    name: 'Runwell',
    price: '$2,450',
    tagline: 'Endurance redefined.',
    image: '/bikes/blue.png',
    hoverImage: '/bikes/white.png',
    specs: {
      frame: 'Chromoly Steel',
      fork: 'Carbon Endurance',
      drivetrain: 'Shimano 105 R7000',
      brakes: 'Mechanical Disc',
      weight: '9.2 kg',
      wheels: '32mm Alloy Tubeless',
    },
  },
  {
    id: 'bixby',
    name: 'Bixby',
    price: '$1,950',
    tagline: 'Urban essential.',
    image: '/bikes/green.png',
    hoverImage: '/bikes/orange.png',
    specs: {
      frame: 'Reynolds 725 Steel',
      fork: 'Lugged Steel',
      drivetrain: 'Shimano Alfine 8-speed',
      brakes: 'Tektro Mechanical Disc',
      weight: '10.4 kg',
      wheels: '35mm Double Wall Alloy',
    },
  },
];

export const testimonials = [
  {
    quote: "The most beautifully crafted bicycle I've ever owned. Every detail speaks to the care put into building it.",
    author: 'James K.',
    title: 'Detroit Arrow Owner',
  },
  {
    quote: "Shinola doesn't just make bikes — they make heirlooms. My Runwell rides like a dream through the city.",
    author: 'Maria S.',
    title: 'Runwell Owner',
  },
  {
    quote: "Finally, a bike that matches my lifestyle. Minimal, elegant, and built to last a lifetime.",
    author: 'David L.',
    title: 'Bixby Owner',
  },
];

export const pressLogos = [
  { name: 'GQ', width: 'text-3xl' },
  { name: 'WIRED', width: 'text-2xl' },
  { name: 'WSJ', width: 'text-2xl' },
  { name: 'ESQUIRE', width: 'text-xl' },
  { name: 'MONOCLE', width: 'text-xl' },
];
