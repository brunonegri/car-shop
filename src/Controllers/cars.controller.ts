import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/cars.services';

class CarController {
  private _service: CarService;
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._service = new CarService();
    this._req = req;
    this._res = res;
    this._next = next;
  }

  public async create() {
    const car: ICar = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status || false, 
      buyValue: this._req.body.buyValue,
      doorsQty: this._req.body.doorsQty,
      seatsQty: this._req.body.seatsQty,
    };
    const newCar = await this._service.createCar(car);
    return this._res.status(201).json(newCar);
  }

  public async getCars() {
    const cars = await this._service.getCars();
    return this._res.status(200).json(cars);
  }

  public async getCarById() {
    try {
      const { id } = this._req.params;
      const car = await this._service.getCarById(id);
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

export default CarController;