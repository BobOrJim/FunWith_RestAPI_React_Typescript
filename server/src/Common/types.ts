
import { Server, Socket } from "socket.io";
import { ClientToServerEvents, InterServerEvents, ServerSocketData, ServerToClientEvents } from "../../CommunicationProtocols/protocols";

//Dessa skall nog ligg i common
// These types can be used to type parameters when defining functions
//export type IOServer = typeof io

export type ServerWithProtocol = Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, ServerSocketData>;

export type SocketWithProtocol = Socket<ClientToServerEvents, ServerToClientEvents>;
