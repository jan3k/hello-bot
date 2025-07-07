import { createNodeMiddleware, Probot } from "probot";

export default (app) => {
  app.on("pull_request.opened", async (context) => {
    const body = "Dzięki za Pull Requesta! 🎉";
    await context.octokit.issues.createComment(
      context.issue({ body })
    );
  });
};

// uruchomienie lokalne ‑-> node src/index.js
export const probot = new Probot({});
export const webhooks = createNodeMiddleware(probot, { probot });