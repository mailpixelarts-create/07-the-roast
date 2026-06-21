export const BRAND = {
  name: 'THE ROAST',
  tagline: 'Cinematic Coffee Roastery',
  subtitle: 'Where Fire Meets Craft',
  description: 'A premium specialty coffee roastery designed like a luxury industrial gallery. Fire, steel, machinery, smoke and craftsmanship become the entire digital experience.',
  location: 'Portland, Oregon',
  founded: '2019',
  philosophy: 'Every bean tells a story of origin, fire, and precision.',
} as const

export const NAVIGATION = [
  { label: 'Roastery', href: '#roastery' },
  { label: 'Process', href: '#process' },
  { label: 'Origins', href: '#origins' },
  { label: 'Collection', href: '#collection' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Science', href: '#science' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
] as const

export const COLORS = {
  charcoal: '#171717',
  charcoalDeep: '#0d0d0d',
  coffeeBrown: '#50372D',
  steel: '#8A8D90',
  cream: '#F5F0EA',
  copper: '#B76D42',
  orangeEmber: '#FF8C42',
  whiteSmoke: '#F6F6F6',
} as const

export const ROASTING_STAGES = [
  {
    id: 'green',
    name: 'Green Bean',
    temperature: '20°C',
    duration: '0:00',
    description: 'Raw, grassy, cereal notes. The starting point of transformation.',
    color: '#7CB342',
  },
  {
    id: 'yellowing',
    name: 'Yellowing',
    temperature: '150°C',
    duration: '4:00',
    description: 'Beans turn yellow. Moisture escapes. First aromas of bread and hay.',
    color: '#FDD835',
  },
  {
    id: 'browning',
    name: 'Browning',
    temperature: '170°C',
    duration: '8:00',
    description: 'Maillard reaction begins. Caramelization. Complexity develops.',
    color: '#8D6E63',
  },
  {
    id: 'first-crack',
    name: 'First Crack',
    temperature: '196°C',
    duration: '10:00',
    description: 'Audible cracking. Beans expand. Light roast territory.',
    color: '#D84315',
  },
  {
    id: 'development',
    name: 'Development',
    temperature: '210°C',
    duration: '12:30',
    description: 'Critical window. Flavor profile locks in. Every second matters.',
    color: '#BF360C',
  },
  {
    id: 'second-crack',
    name: 'Second Crack',
    temperature: '224°C',
    duration: '14:00',
    description: 'Oils surface. Intense, bold. The edge of carbon.',
    color: '#3E2723',
  },
] as const

export const COFFEE_ORIGINS = [
  {
    country: 'Ethiopia',
    region: 'Yirgacheffe',
    altitude: '1,800 - 2,200m',
    process: 'Washed',
    notes: 'Floral, Citrus, Bergamot',
    lat: 6.16,
    lng: 38.2,
  },
  {
    country: 'Colombia',
    region: 'Huila',
    altitude: '1,500 - 1,900m',
    process: 'Natural',
    notes: 'Red Fruit, Caramel, Walnut',
    lat: 2.53,
    lng: -75.53,
  },
  {
    country: 'Guatemala',
    region: 'Antigua',
    altitude: '1,500 - 1,700m',
    process: 'Washed',
    notes: 'Chocolate, Spice, Smoke',
    lat: 14.56,
    lng: -90.73,
  },
  {
    country: 'Kenya',
    region: 'Nyeri',
    altitude: '1,700 - 2,000m',
    process: 'Double Washed',
    notes: 'Blackcurrant, Tomato, Phosphoric',
    lat: -0.42,
    lng: 36.95,
  },
  {
    country: 'Brazil',
    region: 'Cerrado',
    altitude: '800 - 1,200m',
    process: 'Pulped Natural',
    notes: 'Hazelnut, Chocolate, Low Acid',
    lat: -15.78,
    lng: -47.93,
  },
  {
    country: 'Indonesia',
    region: 'Sumatra, Gayo',
    altitude: '1,100 - 1,600m',
    process: 'Wet-Hulled',
    notes: 'Earthy, Herb, Full Body',
    lat: 4.69,
    lng: 96.75,
  },
] as const

export const SIGNATURE_BEANS = [
  {
    name: 'Midnight Ember',
    origin: 'Ethiopia & Guatemala Blend',
    roast: 'Medium-Dark',
    notes: ['Dark Chocolate', 'Toasted Almond', 'Smoky Finish'],
    body: 8,
    acidity: 5,
    sweetness: 7,
    description: 'Our flagship blend. Born from fire, refined by precision.',
  },
  {
    name: 'Copper sunrise',
    origin: 'Colombia Huila',
    roast: 'Medium',
    notes: ['Red Berry', 'Caramel', 'Citrus Zest'],
    body: 6,
    acidity: 8,
    sweetness: 9,
    description: 'A luminous cup that captures the first light of dawn.',
  },
  {
    name: 'Steel Reserve',
    origin: 'Kenya Nyeri & Brazil Cerrado',
    roast: 'Dark',
    notes: ['Blackcurrant', 'Dark Plum', 'Molasses'],
    body: 9,
    acidity: 6,
    sweetness: 4,
    description: 'Unapologetically bold. Built for those who demand intensity.',
  },
  {
    name: 'Smoke Signal',
    origin: 'Sumatra Gayo',
    roast: 'Full City',
    notes: ['Cedar', 'Pipe Tobacco', 'Dark Earth'],
    body: 10,
    acidity: 3,
    sweetness: 5,
    description: 'The terroir of volcanic soil in every sip.',
  },
] as const

export const TEAM_MEMBERS = [
  {
    name: 'Marcus Steel',
    role: 'Head Roaster',
    bio: '15 years mastering the art of the roast. Former champion, eternal student of fire.',
  },
  {
    name: 'Elena Voss',
    role: 'Green Coffee Buyer',
    bio: 'Travels 200 days a year sourcing the worlds most extraordinary beans.',
  },
  {
    name: 'James Copper',
    role: 'Head Barista',
    bio: 'Precision in every extraction. Where science meets intuition.',
  },
  {
    name: 'Sofia Rojas',
    role: 'Quality Director',
    bio: 'Cupping 300 samples a week. Nothing passes without her seal.',
  },
] as const

export const AWARDS_DATA = [
  { label: 'Cup of Excellence Awards', count: 12 },
  { label: 'Origin Partnerships', count: 24 },
  { label: 'Countries Sourced', count: 8 },
  { label: 'Years of Craft', count: 6 },
] as const
