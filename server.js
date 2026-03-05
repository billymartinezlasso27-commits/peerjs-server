const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/peerjs',
  allow_discovery: false,
  proxied: true
});

console.log('PeerJS server running');
