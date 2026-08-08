import Tesseract from 'tesseract.js';
import path from 'path';
import fs from 'fs';

export class OcrService {
  static async extractText(imagePath: string): Promise<string> {
    try {
      const resolvedPath = path.isAbsolute(imagePath)
        ? imagePath
        : path.resolve(process.cwd(), imagePath);

      if (!fs.existsSync(resolvedPath)) {
        console.error(`[OCR] File not found at path: ${resolvedPath}`);
        return '';
      }

      console.log(`[OCR] Starting Tesseract recognition for file: ${resolvedPath}`);
      const imageBuffer = fs.readFileSync(resolvedPath);

      const { data: { text } } = await Tesseract.recognize(imageBuffer, 'vie+eng', {
        logger: (m) => {
          if (m.status === 'recognizing text') {
            console.log(`[OCR] Progress: ${Math.round((m.progress || 0) * 100)}%`);
          }
        },
      });

      console.log(`[OCR] Extracted ${text ? text.length : 0} characters from image.`);
      return text || '';
    } catch (error: any) {
      console.error(`[OCR Warning] Primary vie+eng recognition error:`, error?.message || error);
      
      // Fallback: try default 'eng' recognition if vie+eng traineddata fails
      try {
        const resolvedPath = path.isAbsolute(imagePath)
          ? imagePath
          : path.resolve(process.cwd(), imagePath);
        const imageBuffer = fs.readFileSync(resolvedPath);
        const { data: { text } } = await Tesseract.recognize(imageBuffer, 'eng');
        console.log(`[OCR Fallback] Extracted ${text ? text.length : 0} characters.`);
        return text || '';
      } catch (fallbackErr) {
        console.error(`[OCR Fallback Error]:`, fallbackErr);
        return '';
      }
    }
  }
}
