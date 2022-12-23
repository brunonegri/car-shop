import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/cars.services';
import { allCars, carList, newCar, newCarWithId, updateCar, updateCarWithId } from './car.mocks';

describe('Testes na services da rota /cars', function () {
  const service = new CarService();
  it('deve cadastrar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(newCarWithId);
    const result = await service.createCar(newCar);
    expect(result).to.be.deep.equal(newCarWithId);
  });
  it('deve listar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(allCars);
    const result = await service.getCars();
    expect(result).to.be.deep.equal(carList);
  });
  it('deve listar o carro igual o ID do parametro', async function () {
    sinon.stub(Model, 'findOne').resolves(newCarWithId);
    const result = await service.getCarById('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(newCarWithId);
  });
  it('deve atualizar um carro pelo ID', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updateCarWithId);
    const result = await service.updateById('6348513f34c397abcad040b2', updateCar);
    expect(result).to.be.deep.equal(updateCarWithId);
  });
  it('deve retornar um erro', async function () {
    sinon.stub(Model, 'findOne').resolves();
    try {
      await service.getCarById('6348513f34c397abcad09999');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('deve retornar um erro chave invalida', async function () {
    sinon.stub(Model, 'findOne').resolves();
    try {
      await service.getCarById('6348513f34c397abcad0');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});