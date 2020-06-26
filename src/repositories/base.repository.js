class BaseRepository {
  constructor(model) {
    this._model = model;
  }

  async get(id) {
    return await this._model.findById(id);
  }

  async getAll() {
    return await this._model.find();
  }

  async create(entity) {
    return await this._model.create(entity);
  }

  async update(id, entity) {
    return await this._model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    return await this._model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
