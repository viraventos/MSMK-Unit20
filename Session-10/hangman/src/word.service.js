import fs from 'fs';

export class WordService {
  constructor(filePath) {
    this.filePath = filePath;
  }

  getRandomWord() {
    const content = fs.readFileSync(this.filePath, 'utf-8');
    const words = content.split('\n').filter(Boolean);
    const index = Math.floor(Math.random() * words.length);
    return words[index].trim().toLowerCase();
  }
}
