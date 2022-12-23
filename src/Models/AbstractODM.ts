import { isValidObjectId, Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
  
abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema); 
  }
  public async create(data: T): Promise<T> {
    return this.model.create({ ...data });
  }
  
  public async getAll() {
    return this.model.find({});
  }
  
  public async getById(id: string): Promise<T | null> {
    const isValid = isValidObjectId(id);
    if (!isValid) throw new Error('Invalid mongo id');
    return this.model.findOne({ _id: id });
  }
  
  public async updateById(_id: string, obj: ICar | IMotorcycle): Promise<T | null> {
    const isValid = isValidObjectId(_id);
    if (!isValid) throw new Error('Invalid mongo id');
    return this.model.findByIdAndUpdate({ _id }, obj, { new: true });
  } 
}
  
export default AbstractODM;