import { EventEmitter } from 'events';

export const EVENT_UNAUTHORIZED = 'event-unauthorized';
export const EVENT_FORBIDDEN = 'event-forbidden';
export const EVENT_SUCCESS = 'success';
export const EVENT_ERROR = 'error';

const eventManager = new EventEmitter();

export default eventManager;
