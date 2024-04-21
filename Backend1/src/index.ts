// websocket server setup
import { WebSocketServer } from 'ws';
import { GameManagement } from './GameManagement';

const wss = new WebSocketServer({ port: 8080 });
const gameManagement = new GameManagement(); // Instantiate the GameManagement class

wss.on('connection', function connection(ws) {
    gameManagement.addUser(ws);
    ws.on('disconnect', () => gameManagement.removeUser(ws))
});
