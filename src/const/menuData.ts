export type MenuButtonType = {
  id: string;
  menu: string;
  itemPrice: number;
};

export const menuData: MenuButtonType[] = [
  {
    id: 'coffee',
    menu: 'コーヒー',
    itemPrice: 480,
  },
  {
    id: 'tea',
    menu: '紅茶',
    itemPrice: 280,
  },
  {
    id: 'milk',
    menu: 'ミルク',
    itemPrice: 180,
  },
  {
    id: 'coke',
    menu: 'コーラ',
    itemPrice: 190,
  },
  {
    id: 'beer',
    menu: 'ビール',
    itemPrice: 580,
  },
];
