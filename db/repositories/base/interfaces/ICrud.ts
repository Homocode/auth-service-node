import { Filter } from "mongodb";

interface ICrud<T> {
  findOne(filter: Filter<T>): Promise<T | null>;
}

export { ICrud };
