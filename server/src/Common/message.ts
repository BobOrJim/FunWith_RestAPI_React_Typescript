export class Message {
  public timeStamp: Date;
  public message: string;
  public sendingUser: string;
  public destinationRoom: string;

  constructor() {
    this.timeStamp = new Date();
    this.message = "";
    this.sendingUser = "";
    this.destinationRoom = "";
  }
}
