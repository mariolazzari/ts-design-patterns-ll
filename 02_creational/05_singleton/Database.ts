export class Database {
  private static instance: Database;

  private constructor() {}

  public static getInstance() {
    if (!Database.instance) {
      console.log("Create db instance");
      Database.instance = new Database();
    } else {
      console.log("Return db instance");
    }

    return Database.instance;
  }
}
