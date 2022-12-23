import Car from '../../../src/Domains/Car';

export const newCar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

export const newCarWithId = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

export const updateCar = {
  model: 'Marea',
  year: 2002,
  color: 'RED',
  status: true,
  buyValue: 99.99,
  doorsQty: 4,
  seatsQty: 5,
};
export const updateCarWithId = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'RED',
  status: true,
  buyValue: 99.99,
  doorsQty: 4,
  seatsQty: 5,
};

export const allCars = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const carDomain = new Car(allCars[0]);

export const otherCarDomain = new Car(allCars[1]);

export const carList = [carDomain, otherCarDomain];