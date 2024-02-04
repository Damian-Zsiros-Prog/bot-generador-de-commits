/** @format */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import { prompt } from "./prompt.js";
import { execSync } from "child_process";
import simpleGit from "simple-git";
config();
const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_GEMINI_AI_API_KEY ||
    "AIzaSyDRxja8eXpAxY0lnIVSx23ncNGLxwlja8A"
);

async function hasRepoGit() {
  const git = simpleGit();

  git.checkIsRepo((error, isRepo) => {
    if (error) {
      console.error("Error al verificar el repositorio de Git:", error);
      return false;
    }
    return isRepo;
  });
}
async function getChanges() {
  const git = simpleGit();
  return new Promise((resolve, reject) => {
    git.diff(["-U20"], (error, diff) => {
      if (error) {
        console.error("Error al obtener las diferencias:", error);
        reject(error);
        return;
      }

      resolve(diff);
    });
  });
}

async function run() {
  if (!hasRepoGit()) return console.log("No existe repositorio de git");

  try {
    const changes = await getChanges();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const promptAtSend = prompt(changes);

    const result = await model.generateContent(promptAtSend);
    const response = await result.response;
    const commitMessage = response.text();

    console.log("Commit Message:", commitMessage);
    return commitMessage;
  } catch (error) {
    console.error("Error:", error);
  }
  return null;
}

run();
