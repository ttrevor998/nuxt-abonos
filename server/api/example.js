import { readFileSync } from 'fs';
import { resolve } from 'path';

export default defineEventHandler((event) => {
  // Resolve the path to the JSON file
  const filePath = resolve('data/example.json');

  // Read the JSON file
  const jsonData = readFileSync(filePath, 'utf-8');

  // Parse the JSON and return it
  return JSON.parse(jsonData);
});