// Build public asset URLs that honor Vite's base (GH Pages).
const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

export const MENU = [
  {
    id: 'espresso',
    title: 'Espresso Bar',
    accent: 'espresso',
    items: [
      { id: 'espresso-single', name: 'Espresso',   price: 3.5, image: asset('img/espresso.png'),  ingredients: ['Single origin espresso'], notes: '2oz, syrupy, balanced' },
      { id: 'cappuccino',      name: 'Cappuccino', price: 4.5, image: asset('img/espresso.png'),  ingredients: ['Espresso', 'Steamed milk', 'Foam'], notes: 'Traditional 6oz' },
      { id: 'latte',           name: 'Latte',      price: 5.0, image: asset('img/espresso.png'),  ingredients: ['Espresso', 'Steamed milk'], notes: '12oz' },
    ],
  },
  {
    id: 'matcha',
    title: 'Tea & Matcha',
    accent: 'matcha',
    items: [
      { id: 'matcha-latte', name: 'Matcha Latte', price: 5.5, image: asset('img/matcha.png'),    ingredients: ['Ceremonial matcha', 'Milk of choice'], notes: 'Whisked to order' },
      { id: 'chai',         name: 'Masala Chai',  price: 5.0, image: asset('img/matcha.png'),    ingredients: ['Black tea', 'Cardamom', 'Ginger', 'Cinnamon', 'Milk'] },
    ],
  },
  {
    id: 'bakery',
    title: 'Bakery',
    accent: 'neutral',
    items: [
      { id: 'croissant', name: 'Butter Croissant', price: 4.25, image: asset('img/croissant.png'), ingredients: ['Flour', 'Butter', 'Yeast', 'Salt', 'Sugar'], notes: '48-hour lamination' },
      { id: 'sfogliatella', name: 'Sfogliatella', price: 5.25, image: asset('img/croissant.png'), ingredients: ['Semolina', 'Ricotta', 'Candied citrus', 'Cinnamon'] },
    ],
  },
]
