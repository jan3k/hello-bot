import { createNodeMiddleware, Probot } from "probot";

export default (app) => {
  app.on("pull_request.opened", async (context) => {
    const body = "Dzięki za Pull Requesta! 🎉";
    await context.octokit.issues.createComment(
      context.issue({ body })
    );
  });
};