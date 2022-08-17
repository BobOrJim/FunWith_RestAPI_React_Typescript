import { Room } from "../../Common/room";
import type express from "express"; //Jag vill endast avnända typerna, så jag importerar endast dem :)

export class RoomController {
  private room: Room;

  constructor() {
    this.room = new Room();
  }

  public getRooms(req: express.Request, res: express.Response) {
    res.status(200).send("getRooms NOT IMPLEMENTED: ");
    //res.status(200).json(this.room.getRooms());
  }

  public getRoomDetails(req: express.Request, res: express.Response) {
    res.status(200).send("getRoomDetails. NOT IMPLEMENTED: Book detail: " + req.params.id);
  }

  public postRoom(req: express.Request, res: express.Response) {
    console.log("postRoom");
    console.log(req.body.name);
    res.status(200).json(req.body);
  }
}
