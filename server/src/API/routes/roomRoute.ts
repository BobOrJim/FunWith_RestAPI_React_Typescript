import express from "express";
import { RoomController } from "../controllers/roomController";
import { Room } from "../../Common/room";

//A Route can have one or moer controllers
export class RoomRoute {
  private roomController: RoomController;
  public router = express.Router();

  constructor() {
    this.roomController = new RoomController();
    this.router.get("/", this.roomController.getRooms);
    this.router.get("/:id", this.roomController.getRoomDetails);
    this.router.post("/", this.roomController.postRoom);
  }
}
