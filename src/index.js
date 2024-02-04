/** @format */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import { prompt } from "./prompt.js";
import { execSync } from "child_process";
config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_AI_API_KEY);

async function hasRepoGit() {
  try {
    execSync("git diff --staged");
    return true;
  } catch (error) {
    return false;
  }
}

async function run() {
  if (!hasRepoGit()) return console.log("No existe repositorio de git");
  // Obtener los cambios staged desde el repositorio de Git
  const changes = execSync("git diff --staged ").toString();

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const promptAtSend = prompt(changes);

  const result = await model.generateContent(promptAtSend);
  const response = await result.response;
  const commitMessage = response.text();

  // Mostrar el commit message por la consola
  console.log("Commit Message:", commitMessage);

  return commitMessage;
}

run();
