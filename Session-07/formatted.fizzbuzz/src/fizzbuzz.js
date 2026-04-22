class FizzBuzz {
    constructor(colorService) {
      this.colorService = colorService;
    }
  
    execute(n) {
      if (typeof n !== 'number') return "Error";
  
      let word = "";
      if (n % 3 === 0) word += "Fizz";
      if (n % 5 === 0) word += "Buzz";
      
      const result = word || n.toString();
  
      // Aplicamos a cor dependendo do resultado
      if (result === "FizzBuzz") return this.colorService.colorize(result, "magenta");
      if (result === "Fizz") return this.colorService.colorize(result, "cyan");
      if (result === "Buzz") return this.colorService.colorize(result, "yellow");
      
      return result;
    }
  }
  
  module.exports = FizzBuzz;
  