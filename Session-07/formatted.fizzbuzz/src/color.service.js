class ColorService {
    constructor() {
      this.RESET = "\x1b[0m";
      this.CYAN = "\x1b[36m";
      this.YELLOW = "\x1b[33m";
      this.MAGENTA = "\x1b[35m";
      this.GREEN = "\x1b[32m";
    }
  
    colorize(text, colorName) {
      const colorCode = this[colorName.toUpperCase()] || this.RESET;
      return `${colorCode}${text}${this.RESET}`;
    }
  }
  
  module.exports = ColorService;
  