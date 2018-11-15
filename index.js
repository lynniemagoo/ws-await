'use strict';

const WebSocketAwait = require('./lib/websocket.js');

WebSocketAwait.Server = require('./lib/websocket-server.js');
WebSocketAwait.Receiver = require('ws/lib/receiver.js');
WebSocketAwait.Sender = require('ws/lib/sender.js');

module.exports = WebSocketAwait;
