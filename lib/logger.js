import pino from 'pino';

const options = {
  level: 'info',
  prettyPrint: true
};

const transport = pino.transport({
  targets: [
    {
      level: 'trace',
      target: 'pino/file',
      options: {
        destination: '#root/tmp/logs/stooge.log',
      },
    },
    {
      level: 'trace',
      target: 'pino-pretty',
      options: {},
    },
  ],
});

const logger = pino(options, transport);

export default logger;
