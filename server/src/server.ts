require("dotenv").config();
import http from "http";
import { Client } from "@notionhq/client";

interface ThingToLearn {
  label: object;
  url: string;
}

const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionSecret = process.env.NOTION_SECRET;

if (!notionDatabaseId || !notionSecret) {
  throw Error("Must define NOTION_SECRET and NOTION_DATABASE_ID in env");
}

const notion = new Client({
  auth: notionSecret,
});

const host = "localhost";
const port = 8000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  switch (req.url) {
    case "/":
      const query = await notion.databases.query({
        database_id: notionDatabaseId,
      });

      const list: ThingToLearn[] = query.results.map((row) => {
        const label = row.properties;
        const url = row.url;

        return { label, url };
      });

      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(list));
      break;

    default:
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});