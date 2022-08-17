import { HttpService } from "./API/HttpService";
import { Repository } from "./Infrastructure/Repository";

console.log("Server in entrypoint");

const httpService = new HttpService();
httpService.setupMiddleware();
httpService.startListening();
