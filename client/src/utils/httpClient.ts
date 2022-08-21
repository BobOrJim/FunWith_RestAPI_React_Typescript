export class HttpClient {
  private userName: string = "";
  public setUserName(userName: string) {
    this.userName = userName;
  }

  public run() {
    console.log(this.userName);
  }
}
