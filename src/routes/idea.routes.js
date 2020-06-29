const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("/:ideaId", AuthMiddleware, IdeaController.get);
  router.get("/", AuthMiddleware, IdeaController.getAll);
  router.get("/:userId/all", AuthMiddleware, IdeaController.getUserIdea);
  router.post("/", AuthMiddleware, IdeaController.create);
  router.patch("/:ideaId", AuthMiddleware, IdeaController.update);
  router.delete("/:ideaId", AuthMiddleware, IdeaController.delete);
  router.post("/:ideaId/upvote", AuthMiddleware, IdeaController.upvoteIdea);
  router.post("/:ideaId/downvote", AuthMiddleware, IdeaController.downvoteIdea);

  return router;
};
