
export const pinoConfig = {
    pinoHttp: {
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'UTC:mm/dd/yyyy, hh:MM:ss TT Z'
        }
      }
    }
  }

export const pinoConfigDev = {
    pinoHttp: {
      timestamp: () => `,"time":"${new Date().toISOString()}"`,
      serializers: ''
      // transport: {
      //   target: '',
      //   options: {

      //   }
      // }
    }
  }