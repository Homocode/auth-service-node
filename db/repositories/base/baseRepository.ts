import { Db, Collection, Filter } from "mongodb";

import { ICrud } from "./interfaces/ICrud";

export abstract class BaseRepository<T> implements ICrud<T> {
  public readonly _collection: Collection;

  constructor(db: Db, collectionName: string) {
    this._collection = db.collection(collectionName);
  }

  async findOne(filter: Filter<T>): Promise<T | null> {
    try {
      const result = await this._collection.findOne(filter);
      return result as T | null;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}
