import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

export default defineEventHandler(async (event) => {
  // Extract data from the request body
  const body = await readBody(event);
  const { title, comment, slug } = body;

  // Ensure all fields are provided
  if (!title || !comment || !slug) {
    return { status: 400, message: 'Title, comment, and slug are required' };
  }

  // Define the path to the JSON file
  //const filePath = resolve('C:\\Users\\DELL\\Documents\\Projects\\nuxt-abonos\\nuxt-abonos\\data\\example.json');

  //const filePath='example.json'
  //const file_=readFileSync('example.json')

 // console.log('file', file_)

 //console.log("filepath", filePath)

  // Read the existing data from test.json
  const data = JSON.parse(readFileSync('example.json', 'utf-8'));

  // Append the new comment to the comments array
  data.comments.push({ title, slug, comment });

  // Write the updated data back to test.json
  writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

  return { status: 200, message: 'Comment added successfully' };
});