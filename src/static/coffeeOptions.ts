import express from '../assets/expresso.svg'
import american from '../assets/americano.svg'
import creamyExpress from '../assets/expresso-cremoso.svg'
import icedCOffee from '../assets/cafe-gelado.svg'
import coffeeAndMilk from '../assets/cafe-com-leite.svg'
import latte from '../assets/latte.svg'
import cappuccino from '../assets/capuccino.svg'
import macchiato from '../assets/macchiato.svg'
import mochaccino from '../assets/mochaccino.svg'
import hotChocolate from '../assets/chocolate-quente.svg'
import cuban from '../assets/cubano.svg'
import hawaiian from '../assets/havaiano.svg'
import arabic from '../assets/arabe.svg'
import irish from '../assets/irlandes.svg'

export const coffeeOptions = {
  express: {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    image: express,
  },
  american: {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    image: american,
  },
  creamyExpress: {
    name: 'Expresso Cremoso',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    image: creamyExpress,
  },
  icedCoffee: {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    image: icedCOffee,
  },
  coffeeAndMilk: {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    image: coffeeAndMilk,
  },
  latte: {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    image: latte,
  },
  cappuccino: {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    image: cappuccino,
  },
  macchiato: {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    image: macchiato,
  },
  mochaccino: {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    image: mochaccino,
  },
  hotChocolate: {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    image: hotChocolate,
  },
  cuban: {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    image: cuban,
  },
  hawaiian: {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    image: hawaiian,
  },
  arabic: {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    image: arabic,
  },
  irish: {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    image: irish,
  },
}
