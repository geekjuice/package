import { create } from './logger';

const logger = create('main');

(async (): Promise<void> => {
  try {
    logger.log('starting');
    console.log('hello world');
    process.exit(0);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
})();
