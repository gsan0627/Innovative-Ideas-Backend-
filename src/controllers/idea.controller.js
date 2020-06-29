let _ideaSevice = null;

class IdeaController {
  constructor({ IdeaService }) {
    _ideaSevice = IdeaService;
  }

  async get(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaSevice.get(ideaId);
    return res.send(idea);
  }

  async getAll(req, res) {
    const ideas = await _ideaSevice.getAll();
    return res.send(ideas);
  }

  async create(req, res) {
    const { body } = req;
    const createdIdea = await _ideaSevice.create(body);
    return res.status(201).semd(createdIdea);
  }

  async update(req, res) {
    const { body } = req;
    const { ideaId } = req.params;
    const updatedIdea = await _ideaSevice.update(ideaId, body);
    return res.send(updatedIdea);
  }

  async delete(req, res) {
    const { ideaId } = req.params;
    const deletedIdea = await _ideaSevice.delete(ideaId);
    return res.send(deletedIdea);
  }

  async getUserIdea(req, res) {
    const { userId } = req.params;
    const ideas = await _ideaSevice.getUserIdeas(userId);
    return res.send(ideas);
  }

  async upvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaSevice.upvoteIdea(ideaId);
    return res.send(idea);
  }

  async downvoteIdea(req, res) {
    const { ideaId } = req.params;
    const idea = await _ideaSevice.downvoteIdea(ideaId);
    return res.send(idea);
  }
}

module.exports = IdeaController;
