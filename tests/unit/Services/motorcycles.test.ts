import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotocycleServices from '../../../src/Services/motocycle.services';
import { allMotor, newMotor, newMotorId, updateMotor, updateMotorId } from './motorcycle.mocks';

describe('Testes na services da rota /motorcycles', function () {
  const service = new MotocycleServices();
  it('deve cadastrar uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(newMotorId);
    const result = await service.createMotorcycle(newMotor);
    expect(result).to.be.deep.equal(newMotorId);
  });
  it('deve listar todas as motos', async function () {
    sinon.stub(Model, 'find').resolves(allMotor);
    const result = await service.getMotorcycle();
    expect(result).to.be.deep.equal(allMotor);
  });
  it('deve listar a moto igual o ID do parametro', async function () {
    sinon.stub(Model, 'findOne').resolves(newMotorId);
    const result = await service.getMotorcycleById('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(newMotorId);
  });
  it('deve atualizar uma moto pelo ID', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updateMotorId);
    const result = await service.updateById('6348513f34c397abcad040b2', updateMotor);
    expect(result).to.be.deep.equal(updateMotorId);
  });
  it('deve retornar um erro moto não encontrada', async function () {
    sinon.stub(Model, 'findOne').resolves();
    try {
      await service.getMotorcycleById('6348513f34c397abcad09999');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('deve retornar um erro chave invalida', async function () {
    sinon.stub(Model, 'findOne').resolves();
    try {
      await service.getMotorcycleById('6348513f34c397abcad0');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});