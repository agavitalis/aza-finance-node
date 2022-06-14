export interface IBaseRepository {
    create(query): any;
    getOne(id): any;
    getAll(query): any;
    updateOne(id, update): any;
    deleteOne(id): any;
}