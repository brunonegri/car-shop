import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotocycleServices from '../Services/motocycle.services';

class MotocycleController {
  private _service: MotocycleServices;
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._service = new MotocycleServices();
    this._req = req;
    this._res = res;
    this._next = next;
  }

  public async create() {
    const motocycle: IMotorcycle = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status,
      buyValue: this._req.body.buyValue,
      category: this._req.body.category,
      engineCapacity: this._req.body.engineCapacity,
    };
    const newCar = await this._service.createMotorcycle(motocycle);
    return this._res.status(201).json(newCar);
  }

  public async getMotorcycle() {
    const cars = await this._service.getMotorcycle();
    return this._res.status(200).json(cars);
  }

  public async getMotorcycleById() {
    try {
      const { id } = this._req.params;
      const car = await this._service.getMotorcycleById(id);
      return this._res.status(200).json(car);
    } catch (error) {
      this._next(error);
    }
  }

  public async updateById() {
    try {
      const { id } = this._req.params;
      const { body } = this._req;
      const car = await this._service.updateById(id, body);
      return this._res.status(200).json(car);
    } catch (error) {
      this._next(error);
    }
  }
}

export default MotocycleController;