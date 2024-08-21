// /pages/api/projects.js
import { createClient } from "@/prismicio";

export default async function handler(req, res) {
  try {
    const client = createClient();
    const projects = await client.getAllByType("projects");
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
}
