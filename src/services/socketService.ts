import io from "socket.io-client";

export const socket = io("https://chat-server-app-node.herokuapp.com/");