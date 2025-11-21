import { timeStamp } from "console";
import { Page } from "playwright";
import * as fs from "fs";
import * as path from "path";

export async function takeScreenshot(page:Page, filename:string) {
     // Create absolute path to Screenshots folder at project root
  const dirPath = path.join(process.cwd(), "Screenshots");

  // Ensure folder exists
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Replace invalid timestamp chars for Windows filenames
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filePath = path.join(dirPath, `${filename}-${timestamp}.png`);

  // Save screenshot
  await page.screenshot({ path: filePath });
  console.log(`Screenshot saved at: ${filePath}`)    
}

async function click(page:Page, locatora: String){

  await page.click("")
}
