class Logger {

    static instance;

    constructor() {
      if (Logger.instance) {
        return Logger.instance;
      }
  
      this.logs = [];
      Logger.instance = this;
      this.id = Math.floor(Math.random() * 1000);
    }
  
    log(message) {
      const entry = `${new Date().toISOString()} - ${message}`;
      this.logs.push(entry);
      console.log(entry);
    }
  
    getLogs() {
      return this.logs;
    }
  }
  
  // Exportamos SIEMPRE la misma instancia
  const logger = new Logger();
  export default logger;
  
