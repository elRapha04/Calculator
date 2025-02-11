const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('logging', (data) => {
  console.log('logging', data.data);
  
});

emitter.emit('logging', {data: 'hello world from an event!!'});