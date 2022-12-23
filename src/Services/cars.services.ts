import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarService {
  model = new CarsODM();
  private createCarDomain(car: ICar | null) {
    if (car) return new Car(car);
    return null;
  }

  public async createCar(car: ICar) {
    const newCar = await this.model.create(car);
    return this.createCarDomain(newCar);
  }

  public async getCars() {
    const cars = await this.model.getAll();
    return cars.map((car: ICar) => this.createCarDomain(car));
  }

  public async getCarById(id: string) {
    const car = await this.model.getById(id);
    if (!car) {
      throw new Error('Car not found');
    }   
    return this.createCarDomain(car);
  }

  public async updateById(id: string, body: ICar) {
    const car = await this.model.updateById(id, body);
    if (!car) {
      throw new Error('Car not found');
    }   
    return this.createCarDomain(car);
  }
}

export default CarService;