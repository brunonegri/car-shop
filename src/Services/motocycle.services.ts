import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

class MotocycleServices {
  model = new MotorcyclesODM();
  private createMotorcycleDomain(motor: IMotorcycle | null) {
    if (motor) return new Motorcycle(motor);
    return null;
  }

  public async createMotorcycle(motor: IMotorcycle) {
    const newMotorcycle = await this.model.create(motor);
    if (!motor.status) {
      newMotorcycle.status = false;
    }
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getMotorcycle() {
    const motorcycle = await this.model.getAll();
    return motorcycle.map((motor: IMotorcycle) => this.createMotorcycleDomain(motor));
  }

  public async getMotorcycleById(id: string) {
    const motorcycle = await this.model.getById(id);
    if (!motorcycle) {
      throw new Error('Motorcycle not found');
    }   
    return this.createMotorcycleDomain(motorcycle);
  }

  public async updateById(id: string, body: IMotorcycle) {
    const motorcycle = await this.model.updateById(id, body);
    if (!motorcycle) {
      throw new Error('Motorcycle not found');
    }   
    return this.createMotorcycleDomain(motorcycle);
  }
}

export default MotocycleServices;