let _commentSevice = null;

class CommentController {
  constructor({ UserService }) {
    _commentSevice = commentService;
  }

  async get(req, res) {
    const { commentId } = req.params;
    const comment = await _commentSevice.get(commentId);
    return res.send(comment);
  }

  async create(req, res) {
    const { body } = req;
    const { ideaId } = req.params;
    const createdComment = await _commentSevice.create(body, ideaId);
    return res.status(201).semd(createdComment);
  }

  async update(req, res) {
    const { body } = req;
    const { commentId } = req.params;
    const updatedComment = await _commentSevice.update(commentId, body);
    return res.send(updatedComment);
  }

  async delete(req, res) {
    const { commentId } = req.params;
    const deletedComment = await _commentSevice.delete(commentId);
    return res.send(deletedComment);
  }

  async getIdeaComments(req, res) {
    const { ideaId } = req.params;
    const comments = await _commentSevice.getIdeaComments(ideaId);
    return res.send(comments);
  }
}

module.exports = CommentController;
