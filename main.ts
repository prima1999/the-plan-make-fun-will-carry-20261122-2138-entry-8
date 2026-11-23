// Writes a 1-280 character plan for turning $100 into the most money in 30 days.
import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Day 1: list a $25 AI-written SEO article gig on Fiverr and Upwork. Spend the $100 on a $29/mo AI seat and promotion. Deliver 4 a day for 30 days: 120 orders, $3,000 gross. Edge: the agent works 24/7, delivers in 2 hours, and undercuts human freelancers on speed and price.";

const length = [...PLAN].length;
if (length < 1 || length > 280) {
  throw new Error(`Plan must be 1-280 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
console.log(`Wrote ${length}-character plan to /output/entry.txt`);
