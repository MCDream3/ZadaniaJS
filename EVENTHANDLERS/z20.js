const EventEmitter = require('events');

class Logger extends EventEmitter 
{
    info(message) 
    {
        this.emit('log', message);
    }
}

const logger = new Logger();
logger.on('log', (msg) => console.log('LOG:', msg));
logger.info('Test');