import { HttpService } from "./API/HttpService";

console.log("Server in entrypoint");

const httpService = new HttpService();
httpService.setupMiddleware();
httpService.startListening();
