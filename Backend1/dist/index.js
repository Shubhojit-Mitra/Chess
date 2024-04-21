"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// websocket server setup
const ws_1 = require("ws");
const GameManagement_1 = require("./GameManagement");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const gameManagement = new GameManagement_1.GameManagement(); // Instantiate the GameManagement class
wss.on('connection', function connection(ws) {
    gameManagement.addUser(ws);
    ws.on('disconnect', () => gameManagement.removeUser(ws));
});
