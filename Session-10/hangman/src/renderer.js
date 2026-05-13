export class Renderer {
    static draw(attempts) {
      const stages = [
        "💀",
        "😵",
        "😨",
        "😐",
        "🙂",
        "😀"
      ];
      console.log("Estado:", stages[attempts] || "💀");
    }
  
    static showWord(hidden) {
      console.log("\nPalabra:", hidden.join(" "));
    }
  
    static showUsedLetters(letters) {
      console.log("Letras usadas:", letters.join(", "));
    }
  }
  