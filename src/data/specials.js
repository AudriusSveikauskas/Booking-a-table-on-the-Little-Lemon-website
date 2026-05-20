import greekSalad from '../assets/images/greek-salad.jpg';
import bruschetta from '../assets/images/bruschetta.svg';
import lemonDessert from '../assets/images/lemon-dessert.jpg';

// The week's specials. In a fuller app this would come from an API; keeping it
// as a small data module lets the Specials component simply loop over it.
const specials = [
  {
    id: 'greek-salad',
    title: 'Greek salad',
    price: '$12.99',
    image: greekSalad,
    description:
      'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 'bruschetta',
    title: 'Bruschetta',
    price: '$5.99',
    image: bruschetta,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    id: 'lemon-dessert',
    title: 'Lemon dessert',
    price: '$5.00',
    image: lemonDessert,
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

export default specials;
