import simpleGit from "simple-git";
import fs from "fs";
import path from "path";

async function runPipeline(repoUrl: string) {
  console.log("🚀 Pipeline started by Simran Anand");

  const repoPath = path.join("/app/workdir/repo");

  // Clear old repo
  if (fs.existsSync(repoPath)) {
    console.log("🗑 Removing old repo folder...");
    fs.rmSync(repoPath, { recursive: true, force: true });
  }

  console.log(`Cloning repository: ${repoUrl}`);
  const git = simpleGit();

  await git.clone(repoUrl, repoPath);
  console.log("✔ Repo cloned successfully");

  console.log("🚀 Worker step finished!");
}

if (require.main === module) {
  const repo =
    process.argv[2] || "https://github.com/kelseyhightower/nocode.git";
  runPipeline(repo).catch(console.error);
}
