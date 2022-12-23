import Motorcycle from '../../../src/Domains/Motorcycle';

export const newMotor = {
  model: 'Honda Cb 600',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const newMotorId = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const updateMotor = {
  model: 'Honda Cb 600f',
  year: 2005,
  color: 'Black',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};
export const updateMotorId = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f',
  year: 2005,
  color: 'Black',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const allMotor = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export const MotorDomain = new Motorcycle(allMotor[0]);
export const otherMotorDomain = new Motorcycle(allMotor[1]);
export const motorList = [MotorDomain, otherMotorDomain];