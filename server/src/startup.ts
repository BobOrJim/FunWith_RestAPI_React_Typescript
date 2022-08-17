console.log("Server in entrypoint");

import { HttpService } from "./API/HttpService";

//Http communication
const httpService = new HttpService();
httpService.setupMiddleware();
httpService.startListening();
