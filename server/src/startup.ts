import { HttpService } from "./api/HttpService";
import { seedRepository } from "./infrastructure/Repository";

console.log("Server in entrypoint");

seedRepository();

const httpService = new HttpService();
httpService.setupMiddleware();
httpService.startListening();
