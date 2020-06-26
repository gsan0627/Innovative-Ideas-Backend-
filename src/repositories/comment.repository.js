const BaseRepository = require("./base.repository");
let _comment = null;

class CommentRepository extends BaseRepository {
  constructor({ Comment }) {
    super(Comment);
  }
}

module.exports = CommentRepository;
