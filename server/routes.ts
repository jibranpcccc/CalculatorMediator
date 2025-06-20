import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve sitemap.xml and robots.txt directly
  const publicPath = path.resolve(process.cwd(), "public");
  
  app.get("/sitemap.xml", (req, res) => {
    res.sendFile(path.join(publicPath, "sitemap.xml"));
  });
  
  app.get("/robots.txt", (req, res) => {
    res.sendFile(path.join(publicPath, "robots.txt"));
  });
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, id: contact.id });
    } catch (error) {
      console.error("Contact creation error:", error);
      res.status(400).json({ message: "Invalid contact data" });
    }
  });

  // Get articles for blog
  app.get("/api/articles", async (req, res) => {
    try {
      const articles = await storage.getPublishedArticles();
      res.json(articles);
    } catch (error) {
      console.error("Articles fetch error:", error);
      res.status(500).json({ message: "Failed to fetch articles" });
    }
  });

  // Get single article by slug
  app.get("/api/articles/:slug", async (req, res) => {
    try {
      const article = await storage.getArticleBySlug(req.params.slug);
      if (!article) {
        return res.status(404).json({ message: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      console.error("Article fetch error:", error);
      res.status(500).json({ message: "Failed to fetch article" });
    }
  });

  // Save pension calculation (for analytics)
  app.post("/api/calculations", async (req, res) => {
    try {
      const calculationData = req.body;
      // In a real implementation, you might want to save calculations for analytics
      // For now, just return success
      res.json({ success: true, message: "Calculation saved" });
    } catch (error) {
      console.error("Calculation save error:", error);
      res.status(500).json({ message: "Failed to save calculation" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
