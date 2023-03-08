import { setupWorker } from 'msw';

import { studyHandlers } from './handlers/study';

export const worker = setupWorker(...studyHandlers);
