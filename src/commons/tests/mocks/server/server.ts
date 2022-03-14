import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const worker = setupServer(...handlers);
export { worker };
