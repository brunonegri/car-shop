import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle {
  category: 'Street' | 'Custom' | 'Trail' | string;
  engineCapacity: number;
}

export default IMotorcycle;