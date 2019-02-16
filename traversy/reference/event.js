const EventEmitter = require('events');

class MyEmmiter extends EventEmitter {};

const myEmmiter = new MyEmmiter();

myEmmiter.on('event', () => console.log('[App] Emmiter fired'));

myEmmiter.emit('event');
