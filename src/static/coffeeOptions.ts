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
    categories: ['Tradicional'],
    price: '9,90',
    imageSrc: express,
  },
  american: {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    categories: ['Tradicional'],
    price: '9,90',
    imageSrc: american,
  },
  creamyExpress: {
    name: 'Expresso Cremoso',
    description: 'Expresso diluído, menos intenso que o tradicional',
    categories: ['Tradicional'],
    price: '9,90',
    imageSrc: creamyExpress,
  },
  icedCoffee: {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    categories: ['Tradicional', 'Gelado'],
    price: '9,90',
    imageSrc: icedCOffee,
  },
  coffeeAndMilk: {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    categories: ['Tradicional', 'Com Leite'],
    price: '9,90',
    imageSrc: coffeeAndMilk,
  },
  latte: {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    categories: ['Tradicional', 'Com Leite'],
    price: '9,90',
    imageSrc: latte,
  },
  cappuccino: {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    categories: ['Tradicional', 'Com Leite'],
    price: '9,90',
    imageSrc: cappuccino,
  },
  macchiato: {
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    categories: ['Tradicional', 'Com Leite'],
    price: '9,90',
    imageSrc: macchiato,
  },
  mochaccino: {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    categories: ['Tradicional', 'Com Leite'],
    price: '9,90',
    imageSrc: mochaccino,
  },
  hotChocolate: {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    categories: ['Especial', 'Com Leite'],
    price: '9,90',
    imageSrc: hotChocolate,
  },
  cuban: {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    categories: ['Especial', 'Alcoólico', 'Gelado'],
    price: '9,90',
    imageSrc: cuban,
  },
  hawaiian: {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    categories: ['Especial'],
    price: '9,90',
    imageSrc: hawaiian,
  },
  arabic: {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    categories: ['Especial'],
    price: '9,90',
    imageSrc: arabic,
  },
  irish: {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    categories: ['Especial', 'Alcoólico'],
    price: '9,90',
    imageSrc: irish,
  },
}

export type CoffeeData = typeof coffeeOptions
